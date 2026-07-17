import express from "express";
import { getAllProducts,createProduct, updateProduct, deleteProduct } from "../controllers/productController.js";

const router = express.Router();


router.get("/product", getAllProducts);
router.post("/product/new", createProduct);
router.put("/product/:id", updateProduct);
router.delete("/product/:id",deleteProduct);



export default router;