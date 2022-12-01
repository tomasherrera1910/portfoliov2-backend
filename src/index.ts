import './dotenv/config'
import express from 'express'
import { dbConnect } from './database/connect'
import projectsRouter from './routes/projects'

dbConnect()
  .catch(e => console.error(e))

const app = express()
app.use(express.json()) // bodyparser

app.use(projectsRouter)

const PORT = process.env.PORT ?? 3001
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})
