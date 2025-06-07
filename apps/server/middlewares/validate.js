import { validationResult } from "express-validator";

export const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const formatted = {};
    errors.array().forEach((error) => (formatted[error.param] = error.msg));
    return res.status(400).json({ errors: formatted });
  }
  next();
};
