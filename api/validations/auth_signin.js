import { check } from 'express-validator'

export const validateSignIn = [
  check('email')
    .exists()
    .not()
    .notEmpty()
    .isEmail()
    .custom((value, { req }) => {
      console.log(req.body.email)
      return
    }),

  check('password')
    .exists()
    .not()
    .notEmpty()
    .custom((value, { req }) => {
      console.log(req.body.email)
      return
    }),
  (req, res, next) => {},
]
