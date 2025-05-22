import express from "express";
import { createStripePaymentIntent, createTransaction, listTransactions } from "../controllers/transactionControllers"; 

const router=express.Router();

router.post("/",createTransaction);
router.get("/",listTransactions)
router.post("/stripe/payment-intent",createStripePaymentIntent);

export default router