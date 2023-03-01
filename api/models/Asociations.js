import { Tweet } from './Tweets.js'
import { User } from './Users.js'

User.hasMany(Tweet, {
  foreignKey: 'userId',
  sourceKey: 'id',
})

Tweet.belongsTo(User, {
  foreignKey: 'userId',
  targetKey: 'id',
})
