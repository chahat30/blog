import express from "express";
const router = express.Router();
import {
  createPost,
  deletePost,
  getAllPosts,
  getPost,
  updatePost,
} from "../controllers/postControllers";
import { authGuard, adminGaurd } from "../middleware/authMiddleware";

router
  .route("/")
  .post(authGuard, adminGaurd, createPost)
  .get(getAllPosts);
router
  .route("/:slug")
  .put(authGuard, adminGaurd, updatePost)
  .delete(authGuard, adminGaurd, deletePost)
  .get(getPost);


export default router;
