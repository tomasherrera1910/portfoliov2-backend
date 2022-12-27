import './config/dotenv'
import express from 'express'
import cors from 'cors'
import corsOptions from './config/corsOptions'
import './database/connect'
import projectsRouter from './routes/projects'
import skillsRouter from './routes/skills'
import ProjectsTechnologiesRouter from './routes/projectsTechnologies'
import usersRouter from './routes/users'
import handleErrors from './middlewares/handleErrors'
import loginRouter from './routes/login'

const app = express()
app.use(cors(corsOptions))
app.use(express.json()) // bodyparser

// Routes
app.use(projectsRouter)
app.use(skillsRouter)
app.use(ProjectsTechnologiesRouter)
app.use(usersRouter)
app.use(loginRouter)
// Handle Errors
app.use(handleErrors)

const PORT = process.env.PORT ?? 3001
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})
