import { validationResult } from "express-validator";

export const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const formatted = {};
    errors.array().forEach((err) => {
      if (err.path) {
        formatted[err.path] = err.msg;
      }
    });
    return res.status(400).json({ errors: formatted });
  }

  next();
};
