// NOTE: Thirds
import express from 'express'
import cors from 'cors'

// NOTE: Node
import path from 'path'
import { fileURLToPath } from 'url'

// NOTE: Local
import { port } from './config.js'
import { authRoutes, usersRoutes, tweetsRoutes } from './routes/index.js'

// NOTE: Variables
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// NOTE: App Init
const app = express()

// NOTE: Settings
app.set('port', port)

// NOTE: MiddleWares
app.use(express.json())
app.use(cors())

// NOTE: Routes
app.use('/api', usersRoutes)
app.use('/api', tweetsRoutes)
app.use('/api', authRoutes)

// NOTE: Static Files
app.use(express.static(path.join(__dirname, 'public')))

app.use((req, res) => {
  res.status(404).json({
    messaje: 'Route Not Foud',
  })
})

export default app
