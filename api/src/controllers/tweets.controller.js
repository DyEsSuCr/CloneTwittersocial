import { Tweet } from '../models/Tweets.js'

export const getTweet = async (req, res) => {
  res.send('GET Tweet')
}

export const getTweets = async (req, res) => {
  res.send('GET Tweets')
}

export const postTweets = async (req, res) => {
  res.send('POST Tweet')
}

export const putTweets = async (req, res) => {
  res.send('PUT Tweet')
}

export const delTweets = async (req, res) => {
  res.send('DELETE Tweet')
}
