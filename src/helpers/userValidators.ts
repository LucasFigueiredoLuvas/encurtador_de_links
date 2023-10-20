import { body, param } from "express-validator";

export const validationNewUserFields = [
  body("name").isLength({ min: 2 }),
  body("email").trim().isEmail(),
  body("password").isStrongPassword(),
  body("passwordConfirmation").notEmpty().custom((value, { req }) => {
    return value === req.body.password;
  })
];

export const validationUserToUpdateFields = [
  param("id"),
  body("email").escape().trim().isEmail(),
  body("name").escape().isLength({ min: 2 }),
  body("password").escape().isStrongPassword()
];

