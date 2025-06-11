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
} from "../controllers/user.controller.js";
import { createCategory } from "../controllers/category.controller.js";
import upload from "../middlewares/upload.middleware.js";
import { addUserValidator } from "../validators/addUser.validator.js";
import { validateRequest } from "../middlewares/validate.middleware.js";

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
  upload.single("avatar"),
  addUserValidator,
  validateRequest,
  addUser
);

// Delete User
router.delete(
  "/users/:id",
  authenticateUser,
  authorizeRoles("admin"),
  deleteUser
);

// Create category
router.post(
  "/categories/new",
  authenticateUser,
  authorizeRoles("admin"),
  createCategory
);

export default router;
