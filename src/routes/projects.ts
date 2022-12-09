import { Router } from 'express'
import { createProject, deleteProject, editProject, getProject, getProjects } from '../services/projectsService'
const projectsRouter = Router()

// GET PROJECTS
projectsRouter.get('/projects', (req, res, next) => {
  getProjects()
    .then(projects => res.json(projects))
    .catch(e => next(e))
})
// GET ONE PROJECT
projectsRouter.get('/projects/:id', (req, res, next) => {
  const { id } = req.params
  getProject(+id)
    .then(project => {
      project !== null
        ? res.json(project)
        : res.status(404).json({ error: 'Project not found' })
    })
    .catch(e => next(e))
})
// CREATE PROJECT
projectsRouter.post('/projects', (req, res, next) => {
  const { name, description, image, backendRepo, frontendRepo, deployURL, colors } = req.body
  createProject({
    name,
    description,
    image,
    backendRepo,
    frontendRepo,
    deployURL,
    technologies: [],
    colors
  })
    .then(newProject => res.status(201).json(newProject))
    .catch(e => next(e))
})
// EDIT PROJECT
projectsRouter.put('/projects/:id', (req, res, next) => {
  const { id } = req.params
  editProject(+id, req.body)
    .then(projectUpdated => res.status(202).json(projectUpdated))
    .catch(e => next(e))
})
// DELETE PROJECT
projectsRouter.delete('/projects/:id', (req, res, next) => {
  const { id } = req.params
  deleteProject(+id)
    .then(() => res.status(204).end())
    .catch(e => next(e))
})

export default projectsRouter
