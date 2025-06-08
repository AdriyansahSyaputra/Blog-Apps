import express from "express";
import {
  registerValidator,
  LoginValidator,
} from "../validators/auth.validator.js";
import { validateRequest } from "../middlewares/validate.middleware.js";
import { register, login, logout } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", registerValidator, validateRequest, register);

router.post("/login", LoginValidator, validateRequest, login);

router.post("/logout", logout);

export default router;
