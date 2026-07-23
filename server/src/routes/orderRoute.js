import express from "express";
import { getSingleOrder, myOrders, newOrder } from "../controllers/orderController.js";

import { authorizeRoles, isAuthenticatedUser } from "../middleware/auth.js";
const router = express.Router();

router.post("/order/new", isAuthenticatedUser, newOrder)
router.get("/order/:id",isAuthenticatedUser,authorizeRoles("admin"), getSingleOrder)
router.get("/orders/me",isAuthenticatedUser,myOrders)

export default router;
