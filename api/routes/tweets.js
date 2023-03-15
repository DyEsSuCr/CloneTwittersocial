import { Router } from 'express'
import { tweets } from '../controllers/index.js'
import { verifyToken } from '../middlewares/authorization.js'

const router = Router()

router.get('/tweets/:id', tweets.getTweet)
router.get('/tweets/', tweets.getTweets)
router.post('/tweets/', verifyToken, tweets.postTweets)
router.put('/tweets/:id', tweets.putTweets)
router.delete('/tweets/:id', tweets.delTweets)

export default router
