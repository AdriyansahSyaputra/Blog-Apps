import express from "express";
import { register } from "../controllers/auth.controller";
import { registerValidator } from "../validators/auth.validator";
import { validateRequest } from "../middlewares/validate";

const router = express.Router();

router.post("/register", registerValidator, validateRequest, register);

export default router;