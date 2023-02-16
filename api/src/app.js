// NOTE: Imports
import express from 'express'
import cors from 'cors'

import { port } from './config.js'

// import employeesRoutes from './routes/employees.routes.js'

// NOTE: App
const app = express()

// NOTE: Settings
app.set('port', port)

// NOTE: MiddleWares
app.use(express.json())
app.use(cors())

// NOTE: Routes
// app.use('/api', employeesRoutes)

app.use((req, res) => {
  res.status(404).json({
    messaje: 'Route Not Foud',
  })
})

export default app
