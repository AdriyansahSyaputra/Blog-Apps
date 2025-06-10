import express from "express";
import { authenticateUser } from "../middlewares/auth.middleware";
import { submitAuthorRequest } from "../controllers/user.controller";

const router = express.Router();

router.post("/request-author", authenticateUser, submitAuthorRequest);

export default router;
