import { check, validationResult } from 'express-validator'
import { User } from '../models/Users.js'
import bcrypt from 'bcryptjs'

export const validateSignIn = [
  check('email')
    .exists()
    .not()
    .notEmpty()
    .isEmail()
    .custom(async (value, { req }) => {
      const userFound = await User.findOne({
        where: {
          email: value
        }
      })

      if (!userFound) throw new Error('User not found')

      return true
    }),

  check('password')
    .exists()
    .not()
    .notEmpty()
    .custom(async (value, { req }) => {
      const userFound = await User.findOne({
        where: {
          email: req.body.email
        }
      })

      const comparePassword = await bcrypt.compare(value, userFound.password)

      if (!comparePassword) throw new Error('Password not match')

      return true
    }),

  (req, res, next) => {
    try {
      validationResult(req).throw()
      return next()
    } catch (err) {
      res.status(403).json({ error: err.array() })
    }
  }
]
