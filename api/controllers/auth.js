import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

import { User } from '../models/Users.js'

export const signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body

    const newUser = await User.create({
      username,
      email,
      password,
    })

    const token = jwt.sign({ id: newUser.id }, process.env.SECRET, {
      expiresIn: 86400,
    })

    res.status(200).json({ user: newUser, token })
  } catch (err) {
    res.status(500).json({ messaje: err })
  }
}

export const signIn = async (req, res) => {
  try {
    const userFound = await User.findOne({
      where: {
        email: req.body.email,
      },
    })

    if (!userFound) return res.status(404).json({ messaje: 'User not found' })

    const comparePassword = await bcrypt.compare(req.body.password, userFound.password)

    if (!comparePassword) return res.status(401).json({ messaje: 'Password not match' })

    const tojtw = jwt.sign({ id: userFound.id }, process.env.SECRET, {
      expiresIn: 86400,
    })

    res.status(200).json({ token: tojtw })
  } catch (err) {
    res.status(404).json({ messaje: err })
  }
}
