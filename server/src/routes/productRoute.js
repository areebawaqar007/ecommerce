import express from "express";
import { getAllProducts,createProduct } from "../controllers/productController.js";

const router = express.Router();

// Get all products
router.get("/product", getAllProducts);
router.post("/product/new",createProduct);

export default router;