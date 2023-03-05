import { check, validationResult } from 'express-validator'
import { User } from '../models/Users.js'

export const validateSignUp = [
  check('username')
    .exists()
    .not()
    .notEmpty()
    .isLength({ min: 8, max: 30 })
    .custom(async (value, { req }) => {
      const email = await User.findOne({ where: { email: req.body.email } })
      if (email) throw new Error('The email already exists')

      return true
    }),

  check('email')
    .exists()
    .not()
    .notEmpty()
    .isEmail()
    .custom(async (value, { req }) => {
      const username = await User.findOne({ where: { username: req.body.username } })
      if (username) throw new Error('The user already exists')

      return true
    }),

  check('password').exists().not().notEmpty().isLength({ min: 8 }).withMessage('Minimum 8 characters'),

  (req, res, next) => {
    try {
      validationResult(req).throw()
      next()
    } catch (err) {
      res.status(403).json({ error: err.array() })
    }
  },
]
