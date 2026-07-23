import express from "express";
import { newOrder } from "../controllers/orderController.js";

import { authorizeRoles, isAuthenticatedUser } from "../middleware/auth.js";
const router = express.Router();

router.post("/order/new", isAuthenticatedUser, newOrder)


export default router;
