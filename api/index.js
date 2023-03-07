import app from './app.js'
import { sequelize } from './database/db.js'

import './models/Tweets.js'
import './models/Users.js'
import './models/Asociations.js'

async function main () {
  try {
    await sequelize.sync({ force: false })

    app.listen(app.get('port'), () => {
      console.log(`Server on port ${app.get('port')}`)
    })
  } catch (err) {
    console.error(`Not conection database ${err}`)
  }
}

main()
