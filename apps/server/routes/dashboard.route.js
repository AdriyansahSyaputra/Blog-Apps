import express from "express";
import {
  authenticateUser,
  authorizeRoles,
} from "../middlewares/auth.middleware.js";
import {
  getPendingRequests,
  approveAuthorRequest,
  rejectAuthorRequest,
  addUser,
  getAllUsers,
  deleteUser,
  updateUser,
} from "../controllers/user.controller.js";
import {
  createCategory,
  updateCategory,
  getAllCategories,
  deleteCategory,
} from "../controllers/category.controller.js";
import { createPost, getAllPosts, deletePost } from "../controllers/post.controller.js";
import { uploadThumbnail, uploadProfile } from "../middlewares/upload.middleware.js";
import { addUserValidator } from "../validators/addUser.validator.js";
import { validateRequest } from "../middlewares/validate.middleware.js";
import { updateUserValidator } from "../validators/updateUser.validator.js";
import { postValidator } from "../validators/post.validator.js";

const router = express.Router();

// Author request
router.get(
  "/authors/request",
  authenticateUser,
  authorizeRoles("admin"),
  getPendingRequests
);

// Author request approval
router.patch(
  "/authors/request/:id/approve",
  authenticateUser,
  authorizeRoles("admin"),
  approveAuthorRequest
);

// Author request rejection
router.patch(
  "/authors/request/:id/reject",
  authenticateUser,
  authorizeRoles("admin"),
  rejectAuthorRequest
);

// Get All Users
router.get("/users", authenticateUser, authorizeRoles("admin"), getAllUsers);

// Created New User
router.post(
  "/users/new",
  authenticateUser,
  authorizeRoles("admin"),
  uploadProfile.single("avatar"),
  addUserValidator,
  validateRequest,
  addUser
);

// Update User
router.put(
  "/users/:id",
  authenticateUser,
  authorizeRoles("admin"),
  uploadProfile.single("avatar"),
  updateUserValidator,
  validateRequest,
  updateUser
);

// Delete User
router.delete(
  "/users/:id",
  authenticateUser,
  authorizeRoles("admin"),
  deleteUser
);

// Ambil semua data category
router.get(
  "/categories",
  authenticateUser,
  authorizeRoles("admin", "author"),
  getAllCategories
);

// Create category
router.post(
  "/categories/new",
  authenticateUser,
  authorizeRoles("admin"),
  createCategory
);

// Update category
router.put(
  "/categories/:id",
  authenticateUser,
  authorizeRoles("admin"),
  updateCategory
);

// Delete category
router.delete(
  "/categories/:id",
  authenticateUser,
  authorizeRoles("admin"),
  deleteCategory
);

// create post
router.post(
  "/posts/new",
  authenticateUser,
  authorizeRoles("admin", "author"),
  uploadThumbnail.single("featuredImage"),
  postValidator,
  validateRequest,
  createPost
);

// Get All Posts
router.get(
  "/posts",
  authenticateUser,
  authorizeRoles("admin", "author"),
  getAllPosts
)

// Delete Post
router.delete(
  "/posts/:id",
  authenticateUser,
  authorizeRoles("admin", "author"),
  deletePost
);

export default router;
