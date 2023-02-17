import { Router } from 'express'
import { delTweets, getTweet, getTweets, postTweets, putTweets } from '../controllers/tweets.controller.js'

const router = Router()

router.get('/tweets/:id', getTweet)
router.get('/tweets/', getTweets)
router.post('/tweets/', postTweets)
router.put('/tweets/:id', putTweets)
router.delete('/tweets/:id', delTweets)

export default router
