import { Router } from 'express'
import { signUp, signIn } from '../controllers/auth.js'
import { checkEmailOrUsername } from '../middlewares/index.js'

const router = Router()

router.post('/signup/', checkEmailOrUsername, signUp)
router.post('/signin/', signIn)

export default router
