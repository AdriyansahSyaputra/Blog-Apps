import express from "express";
import {
  authenticateUser,
  authorizeRoles,
  optionalAuth,
} from "../middlewares/auth.middleware.js";
import {
  getCurrentUser,
  submitAuthorRequest,
} from "../controllers/user.controller.js";
import { getAllPosts, getPostBySlug } from "../controllers/post.controller.js";
import { authorRequestValidator } from "../validators/authorRequest.validator.js";
import { validateRequest } from "../middlewares/validate.middleware.js";
import {
  createComment,
  getCommentsByPost,
} from "../controllers/comment.controller.js";
import { toggleLike } from "../controllers/like.controller.js";

const router = express.Router();

router.get("/me", authenticateUser, getCurrentUser);

router.post(
  "/request-author",
  authenticateUser,
  authorizeRoles("viewer"),
  authorRequestValidator,
  validateRequest,
  submitAuthorRequest
);

// Get All Posts
router.get("/posts", getAllPosts);

// Get Post By Slug
router.get("/articles/:slug", optionalAuth, getPostBySlug);

// Like post
router.post("/posts/:postId/like", authenticateUser, toggleLike);

router.post("/comment", authenticateUser, createComment);

router.get("/comments", getCommentsByPost);

export default router;
