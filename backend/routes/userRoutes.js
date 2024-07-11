import express from "express";
import { getUser, postUser, loginUser } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

router.get("/me", protect, getUser);
router.post("/login", loginUser);
router.post("/", protect, postUser);

export default router;
