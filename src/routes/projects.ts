import { Router } from "express"

const projectsRouter = Router()

projectsRouter.get('/projects', async(req, res) => {
    res.send('ALL THE PROJECTS !!')
})
projectsRouter.get('/projects/:id', async(req, res) => {})
projectsRouter.post('/projects', async(req, res) => {})
projectsRouter.put('/projects/:id', async(req, res) => {})
projectsRouter.delete('/projects/:id', async(req, res) => {})

export default projectsRouter
