import { Router } from 'express'
import { users } from '../controllers/index.js'
import { verifyToken } from '../middlewares/authorization.js'

const router = Router()

router.get('/users/:username', users.getUser)
router.get('/users/', users.getUsers)
router.post('/users/', verifyToken, users.postUsers)
router.put('/users/:username', users.putUsers)
router.delete('/users/:username', users.delUsers)

router.get('/users/:id/tweets', users.tweetsUser)

export default router
