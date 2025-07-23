import express from "express";
import { addCart } from "../controller/cart-controller.js";

const router = express.Router();

router.post("/add", addCart);

export default router;
