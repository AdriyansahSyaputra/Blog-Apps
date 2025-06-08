import { body } from "express-validator";

export const registerValidator = [
  body("name")
    .notEmpty()
    .withMessage("Name is required!")
    .isLength({ min: 3 })
    .withMessage("Name must be at least 3 characters long!")
    .trim(),

  body("username")
    .notEmpty()
    .withMessage("Username is required!")
    .isLength({ min: 5 })
    .withMessage("Username must be at least 5 characters long!")
    .matches(/^[a-zA-Z0-9_]+$/)
    .withMessage("Username can only contain letters, numbers, and underscores!")
    .trim(),

  body("email")
    .notEmpty()
    .withMessage("Email is required!")
    .isEmail()
    .withMessage("Invalid email format!")
    .trim(),

  body("phone")
    .notEmpty()
    .withMessage("Phone number is required!")
    .isMobilePhone("id-ID")
    .withMessage("Invalid phone number format!")
    .matches(/^[0-9]+$/)
    .withMessage("Phone number can only contain numbers!")
    .trim(),

  body("password")
    .notEmpty()
    .withMessage("Password is required!")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long!")
    .trim(),

  body("confirmPassword")
    .custom((value, { req }) => value === req.body.password)
    .withMessage("Passwords do not match"),

  body("terms")
    .equals("true")
    .withMessage("You must agree to the terms and conditions"),
];

export const LoginValidator = [
  body("email")
    .notEmpty()
    .withMessage("Email is required!")
    .isEmail()
    .withMessage("Invalid email format!")
    .trim(),

  body("password")
    .notEmpty()
    .withMessage("Password is required!")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long!")
    .trim(),
];
