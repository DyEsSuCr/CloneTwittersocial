import { Tweet } from '../models/Tweets.js'

export const getTweet = async (req, res) => {
  res.json({ messaje: 'GET Tweet' })
}

export const getTweets = async (req, res) => {
  try {
    const tweets = await Tweet.findAll({
      where: {
        state: true
      }
    })

    if (tweets.length <= 0) return res.status(200).json({ messaje: '0 Tweets' })

    res.status(200).json(tweets)
  } catch (err) {
    res.status(404).json({ error: err })
  }
}

export const postTweets = async (req, res) => {
  try {
    const newTweet = await Tweet.create({
      tweet: req.body.tweet,
      userId: req.user.id
    })

    res.status(201).json(newTweet)
  } catch (err) {
    res.status(404).json({ error: err })
  }
}

export const putTweets = async (req, res) => {
  res.json({ messaje: 'PUT Tweet' })
}

export const delTweets = async (req, res) => {
  res.json({ messaje: 'DELETE Tweet' })
}
