import { User } from '../models/Users.js'

export const checkEmailOrUsername = async (req, res, next) => {
  const username = await User.findOne({ where: { username: req.body.username } })
  if (username) return res.status(400).json({ messaje: 'The user already exists ' })

  const email = await User.findOne({ where: { email: req.body.email } })
  if (email) return res.status(400).json({ messaje: 'The email already exists' })

  next()
}
