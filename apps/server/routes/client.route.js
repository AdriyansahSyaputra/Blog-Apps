import express from "express";
import {
  authenticateUser,
  authorizeRoles,
} from "../middlewares/auth.middleware.js";
import {
  getCurrentUser,
  submitAuthorRequest,
} from "../controllers/user.controller.js";
import { authorRequestValidator } from "../validators/authorRequest.validator.js";
import { validateRequest } from "../middlewares/validate.middleware.js";

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

export default router;
