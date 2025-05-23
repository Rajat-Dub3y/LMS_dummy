import express from "express";
import dotenv from "dotenv";
import bodyparser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import * as dynamoose from "dynamoose" ;
import courseRouter from "./routes/courseRoutes"
import { clerkMiddleware, createClerkClient, requireAuth } from "@clerk/express";
import userClerkRoutes from "./routes/userClerkRoutes"
import tarnsactionRoutes from "./routes/transactionRoutes"
import COurseProgressRoutes from "./routes/userCourseProgressRoutes"
import seed from "./seed/seedDynamodb"
import serverless from "serverless-http"


dotenv.config();

const isProduction = process.env.NODE_ENV === "production";

if(!isProduction){
    dynamoose.aws.ddb.local();
}

export const clerkClient=createClerkClient({ secretKey:process.env.CLERK_SECRET_KEY})

const app=express()

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}));
app.use(morgan("common"));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use(cors());
app.use(clerkMiddleware());



//Routes

app.get("/", (req, res) => {
  res.send("Hello from root route!");
});


app.use("/courses",courseRouter)
app.use("/users/clerk",requireAuth(),userClerkRoutes)
app.use("/transactions",requireAuth(),tarnsactionRoutes)
app.use("/users/course-progress",requireAuth(),COurseProgressRoutes)


const port=process.env.PORT || 3000;
if(!isProduction){
    app.listen(8001 ,()=>{
        console.log(`Server running on port ${port}`);
    })
}

const serverlessApp=serverless(app);
export const handler = async (event: any, context: any) => {
  if (event.action === "seed") {
    await seed();
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Data seeded successfully" }),
    };
  } else {
    return serverlessApp(event, context);
  }
};
