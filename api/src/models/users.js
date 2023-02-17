import { DataTypes } from 'sequelize'
import { sequelize } from '../database/db.js'

import { Tweet } from './Tweets.js'

export const User = sequelize.define('users', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  password: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(120),
    allowNull: true,
  },
  username: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
  state: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  email: {
    type: DataTypes.STRING(40),
    allowNull: false,
  },
  avatar: {
    type: DataTypes.BLOB,
    allowNull: true,
  },
  cover: {
    type: DataTypes.BLOB,
    allowNull: true,
  },
  biography: {
    type: DataTypes.STRING(180),
    allowNull: true,
  },
  web: {
    type: DataTypes.STRING(120),
    allowNull: true,
  },
})

User.hasMany(Tweet, {
  foreignKey: 'userId',
  sourceKey: 'id',
})

Tweet.belongsTo(User, {
  foreignKey: 'userId',
  targetKey: 'id',
})
