import express from "express";
import {
  forgotPassword,
  loginUser,
  registerUser,
  resetPassword,
  verifyUser,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/verify/:token", verifyUser);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);

export default router;
