import { Router } from 'express'
import { signUp, signIn } from '../controllers/auth.js'
import { validateSignIn, validateSignUp } from '../validators/index.js'

const router = Router()

router.post('/signup/', validateSignUp, signUp)
router.post('/signin/', validateSignIn, signIn)

export default router
