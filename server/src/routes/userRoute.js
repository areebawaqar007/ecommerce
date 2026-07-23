import express from "express";
import {
  registerUser,
  loginUser,
  logout,
  forgotPassword,
  resetPassword,
  getUserDetails,
  updatePassword,
  updateProfile,
  getAllUsers,
  getSingleUser,
} from "../controllers/userController.js";


import { isAuthenticatedUser,authorizeRoles} from '../middleware/auth.js'
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/password/forgot/", forgotPassword);
router.put("/password/reset/:token", resetPassword);
router.post("/logout", logout);
router.get("/me", isAuthenticatedUser, getUserDetails);
router.put("/password/update", isAuthenticatedUser, updatePassword)
router.put("/me/update", isAuthenticatedUser, updateProfile);
router.get("/admin/users", isAuthenticatedUser, authorizeRoles("admin"), getAllUsers)
router.get("/admin/user/:id",isAuthenticatedUser,authorizeRoles("admin"),getSingleUser)



export default router;
