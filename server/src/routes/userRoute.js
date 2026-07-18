import express from "express";
import {
  registerUser,
  loginUser,
  logout,
  forgotPassword,
  resetPassword,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/password/forgot/", forgotPassword);
router.put("/password/reset/:token", resetPassword);


router.post("/logout", logout);

export default router;
