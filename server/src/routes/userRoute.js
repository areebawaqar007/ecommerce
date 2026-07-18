import express from "express";
import {
  registerUser,
  loginUser,
  logout,
  forgotPassword,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/password/forgot/", forgotPassword);

router.post("/logout", logout);

export default router;
