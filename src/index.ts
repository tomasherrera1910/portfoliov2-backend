import './dotenv/config'
import express from 'express'
import { dbConnect } from './database/connect'
import projectsRouter from './routes/projects'
import handleErrors from './middlewares/handleErrors'

dbConnect()
  .catch(e => console.error(e))

const app = express()
app.use(express.json()) // bodyparser

// Routes
app.use(projectsRouter)

// Handle Errors
app.use(handleErrors)

const PORT = process.env.PORT ?? 3001
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})
