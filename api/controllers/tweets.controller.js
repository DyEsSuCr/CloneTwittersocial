import { Tweet } from '../models/Tweets.js'

export const getTweet = async (req, res) => {
  res.json({ messaje: 'GET Tweet' })
}

export const getTweets = async (req, res) => {
  res.json({ messaje: 'GET Tweets' })
}

export const postTweets = async (req, res) => {
  res.json({ messaje: 'POST Tweet' })
}

export const putTweets = async (req, res) => {
  res.json({ messaje: 'PUT Tweet' })
}

export const delTweets = async (req, res) => {
  res.json({ messaje: 'DELETE Tweet' })
}
