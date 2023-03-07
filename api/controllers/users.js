import { User } from '../models/Users.js'

export const getUser = async (req, res) => {
  res.json({ messaje: 'GET User' })
}

export const getUsers = async (req, res) => {
  res.json({ messaje: 'GET Users' })
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
