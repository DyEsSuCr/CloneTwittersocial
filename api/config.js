import { config } from 'dotenv'

if (process.env.NODE_ENV !== 'production') config()

export const port = process.env.PORT || 5500
export const database = process.env.DB || null
export const user = process.env.USER || 'root'
export const password = process.env.PASSWORD || null
export const SECRET = process.env.SECRET || null
