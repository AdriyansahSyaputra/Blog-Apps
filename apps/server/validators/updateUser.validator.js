import { body } from "express-validator";

export const updateUserValidator = [
  body("name")
    .notEmpty()
    .withMessage("Name is required!")
    .bail()
    .isLength({ min: 3 })
    .withMessage("Name must be at least 3 characters long!")
    .trim(),

  body("username")
    .notEmpty()
    .withMessage("Username is required!")
    .bail()
    .isLength({ min: 5 })
    .withMessage("Username must be at least 5 characters long!")
    .bail()
    .matches(/^[a-zA-Z0-9_]+$/)
    .withMessage("Username can only contain letters, numbers, and underscores!")
    .trim(),

  body("email")
    .notEmpty()
    .withMessage("Email is required!")
    .bail()
    .isEmail()
    .withMessage("Invalid email format!")
    .trim(),

  body("phone")
    .notEmpty()
    .withMessage("Phone number is required!")
    .bail()
    .isMobilePhone("id-ID")
    .withMessage("Invalid phone number format! (e.g. +628123456789)"),

  body("role")
    .notEmpty()
    .withMessage("Role is required!")
    .bail()
    .isIn(["viewer", "author", "admin"])
    .withMessage("Invalid role!"),

  body("birthday")
    .notEmpty()
    .withMessage("Birthday is required!")
    .bail(),

  body("status")
    .notEmpty()
    .withMessage("Status is required!")
    .bail()
    .isIn(["active", "inactive", "suspended"])
    .withMessage("Invalid status!"),
];
