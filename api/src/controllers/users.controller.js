import { User } from '../models/Users.js'

export const getUser = async (req, res) => {
  res.send('GET User')
}

export const getUsers = async (req, res) => {
  res.send('GET Users')
}

export const postUsers = async (req, res) => {
  res.send('POST User')
}

export const putUsers = async (req, res) => {
  res.send('PUT User')
}

export const delUsers = async (req, res) => {
  res.send('DELETE User')
}
