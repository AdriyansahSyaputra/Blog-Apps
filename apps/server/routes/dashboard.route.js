import express from "express"
import {
  authenticateUser,
  authorizeRoles,
} from "../middlewares/auth.middleware.js";
import { getPendingRequests, approveAuthorRequest, rejectAuthorRequest } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/authors/request", authenticateUser, authorizeRoles("admin"), getPendingRequests);
router.patch("/authors/request/:id/approve", authenticateUser, authorizeRoles("admin"), approveAuthorRequest);
router.patch("/authors/request/:id/reject", authenticateUser, authorizeRoles("admin"), rejectAuthorRequest);

export default router;