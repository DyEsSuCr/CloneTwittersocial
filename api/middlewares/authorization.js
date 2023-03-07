import jwt from 'jsonwebtoken'
import { User } from '../models/Users.js'

export const veryfyToken = async (req, res, next) => {
  const token = req.headers['authorization']

  try {
    if (!token) return res.status(403).json({ messaje: 'No token provided' })

    const decoded = jwt.verify(token, process.env.SECRET)
    const user = await User.findByPk(decoded.id, {
      attributes: {
        exclude: ['password'],
      },
    })

    if (!user) return res.status(404).json({ messaje: 'User not found' })

    req.user = user

    next()
  } catch (err) {
    res.status(401).json({ messaje: 'Unauthorized' })
  }
}
