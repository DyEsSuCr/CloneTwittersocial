import { Router } from 'express'
import { delUsers, getUser, getUsers, postUsers, putUsers } from '../controllers/users.js'

const router = Router()

router.get('/users/:id', getUser)
router.get('/users/', getUsers)
router.post('/users/', postUsers)
router.put('/users/:id', putUsers)
router.delete('/users/:id', delUsers)

export default router
