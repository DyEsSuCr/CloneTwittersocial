import { Sequelize } from 'sequelize'

import { database, user, password } from '../config.js'

export const sequelize = new Sequelize(database, user, password, {
  database,
  dialect: 'mysql'
})
