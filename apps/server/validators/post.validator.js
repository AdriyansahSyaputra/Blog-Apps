import { body } from "express-validator";

export const postValidator = [
  body("title")
    .notEmpty()
    .withMessage("Title is required!")
    .bail()
    .isLength({ min: 3 })
    .withMessage("Title must be at least 3 characters long!")
    .trim(),

  body("slug")
    .notEmpty()
    .withMessage("Slug is required!")
    .bail()
    .isLength({ min: 3 })
    .withMessage("Slug must be at least 3 characters long!")
    .trim(),

  body("excerpt")
    .notEmpty()
    .withMessage("Excerpt is required!")
    .bail()
    .isLength({ min: 20 })
    .withMessage("Excerpt must be at least 20 characters long!")
    .trim(),

  body("content")
    .notEmpty()
    .withMessage("Content is required!")
    .bail()
    .isLength({ min: 100 })
    .withMessage("Content must be at least 100 characters long!")
    .trim(),

  body("status")
    .notEmpty()
    .withMessage("Status is required!")
    .bail()
    .isIn(["published", "draft", "scheduled"])
    .withMessage("Invalid status!"),

  body("categories")
    .notEmpty()
    .withMessage("Categories is required!")
    .bail()
    .isArray({ min: 1 })
    .withMessage("You must select at least 1 category!")
    .trim(),

  body("tags")
    .notEmpty()
    .withMessage("Tags is required!")
    .bail()
    .isArray({ min: 1 })
    .withMessage("You must select at least 1 tag!")
    .trim(),
];
