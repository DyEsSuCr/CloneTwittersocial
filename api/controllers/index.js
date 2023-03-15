import { authLogin, signIn, signUp } from './auth.js'
import { delTweets, getTweet, getTweets, postTweets, putTweets } from './tweets.js'
import { delUsers, getUser, getUsers, postUsers, putUsers, tweetsUser } from './users.js'

export const users = { delUsers, getUser, getUsers, postUsers, putUsers, tweetsUser }
export const tweets = { delTweets, getTweet, getTweets, postTweets, putTweets }
export const auth = { authLogin, signIn, signUp }
