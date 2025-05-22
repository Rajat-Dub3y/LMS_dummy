import express from "express";
import { UpdateUser } from "../controllers/userClerkController";

const router=express.Router();

router.put("/:userId",UpdateUser)

export default router