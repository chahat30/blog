import express from "express";
const router = express.Router();
import {
  createPost,
  deletePost,
  getPost,
  updatePost,
} from "../controllers/postControllers";
import { authGuard, adminGaurd } from "../middleware/authMiddleware";

router.post("/", authGuard, adminGaurd, createPost);
router
  .route("/:slug")
  .put(authGuard, adminGaurd, updatePost)
  .delete(authGuard, adminGaurd, deletePost)
  .get(getPost);

export default router;
