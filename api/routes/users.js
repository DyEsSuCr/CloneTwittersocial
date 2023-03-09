import { Router } from 'express'
import { delUsers, getUser, getUsers, postUsers, putUsers } from '../controllers/users.js'
import { verifyToken } from '../middlewares/authorization.js'

const router = Router()

router.get('/users/:username', getUser)
router.get('/users/', getUsers)
router.post('/users/', verifyToken, postUsers)
router.put('/users/:username', putUsers)
router.delete('/users/:username', delUsers)

export default router
