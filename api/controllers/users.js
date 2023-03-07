import { User } from '../models/Users.js'

export const getUser = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.params.username
      },
      attributes: {
        exclude: ['is_active', 'password', 'updatedAt']
      }
    })

    res.status(200).json(user)
  } catch (err) {
    res.status(404).json({ messaje: 'Profile Not Found', error: err })
  }
}

export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      where: {
        is_active: true
      },
      attributes: {
        exclude: ['is_active', 'password', 'updatedAt']
      }
    })

    if (users.length <= 0) return res.status(200).json({ messaje: 'No exist users' })

    res.status(200).json(users)
  } catch (err) {
    res.status(404).json({ error: err })
  }
}

export const postUsers = async (req, res) => {
  res.status(200).json({ user: req.user })
}

export const putUsers = async (req, res) => {
  res.json({ messaje: 'PUT User' })
}

export const delUsers = async (req, res) => {
  res.json({ messaje: 'DELETE User' })
}
