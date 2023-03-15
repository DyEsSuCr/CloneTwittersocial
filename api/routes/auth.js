import { Router } from 'express'
import { auth } from '../controllers/index.js'
import { validateSignIn, validateSignUp } from '../validators/index.js'
import { verifyToken } from '../middlewares/authorization.js'

const router = Router()

router.post('/signup/', validateSignUp, auth.signUp)
router.post('/signin/', validateSignIn, auth.signIn)
router.get('/authlogin/', verifyToken, auth.authLogin)

export default router
