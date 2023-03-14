import { Router } from 'express'
import { signUp, signIn, authLogin } from '../controllers/auth.js'
import { validateSignIn, validateSignUp } from '../validators/index.js'
import { verifyToken } from '../middlewares/authorization.js'

const router = Router()

router.post('/signup/', validateSignUp, signUp)
router.post('/signin/', validateSignIn, signIn)
router.get('/authlogin/', verifyToken, authLogin)

export default router
