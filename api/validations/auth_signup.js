import { check } from 'express-validator'

export const validateSignUp = [
  check('username').exists().not().notEmpty().isLength({ min: 8, max: 30 }),
  check('email').exists().not().notEmpty().isEmail(),
  check('password').exists().not().notEmpty().isLength({ min: 8 }),
  (req, res, next) => {},
]
