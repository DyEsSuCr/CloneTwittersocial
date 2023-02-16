import { DataTypes } from 'sequelize'
import { sequelize } from '../database/db.js'

export const Tweet = sequelize.define('tweets', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  tweet: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  state: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
})
