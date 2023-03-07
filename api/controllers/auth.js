import jwt from 'jsonwebtoken'

import { User } from '../models/Users.js'

export const signUp = async (req, res) => {
  try {
    const user = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    })

    const token = jwt.sign({ id: user.id }, process.env.SECRET, {
      expiresIn: 86400
    })

    const { password, ...userData } = user.dataValues

    res.cookie('access_token', token, { httpOnly: true }).status(200).json({ userData })
  } catch (err) {
    res.status(404).json({ err })
  }
}

export const signIn = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email
      },
      attributes: {
        exclude: ['is_active', 'password', 'updatedAt']
      }
    })

    const token = jwt.sign({ id: user.id }, process.env.SECRET, {
      expiresIn: 86400
    })

    res.cookie('access_token', token, { httpOnly: true }).status(200).json({ user })
  } catch (err) {
    res.status(404).json({ err })
  }
}
