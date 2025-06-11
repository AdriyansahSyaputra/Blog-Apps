import { body } from "express-validator";

export const authorRequestValidator = [
  body("bio")
    .notEmpty()
    .withMessage("Bio is required!")
    .bail()
    .isLength({ min: 100, })
    .withMessage("Bio must be at least 100 characters long!")
    .trim(),

  body("job").notEmpty().withMessage("Job is required!").trim(),

  body("topics")
    .isArray({ min: 3 })
    .withMessage("You must select at least 3 topics!")
    .bail()
    .notEmpty()
    .withMessage("Topics is required!")
    .trim(),

  body("portfolio")
    .notEmpty()
    .withMessage("Portfolio is required!")
    .bail()
    .isURL()
    .withMessage("Invalid URL format! (e.g. https://yourportfolio.com)")
    .trim(),

  body("twitter")
    .trim(),

  body("instagram")
    .trim(),

  body("facebook")
    .trim(),

  body("medium")
    .trim(),

  body("reason")
    .notEmpty()
    .withMessage("Reason is required!")
    .bail()
    .isLength({ min: 100 })
    .withMessage("Reason must be at least 100 characters long!")
    .trim(),
];
