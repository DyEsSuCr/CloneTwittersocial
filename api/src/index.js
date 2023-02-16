import app from './app.js'
import { sequelize } from './database/db.js'

async function main() {
  try {
    await sequelize.sync()

    app.listen(app.get('port'), () => {
      console.log(`Server on port ${app.get('port')}`)
    })
  } catch (err) {
    console.error(`Not conection database ${err}`)
  }
}

main()
