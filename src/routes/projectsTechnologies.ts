import { Router } from 'express'
import { createProjectSkillRelation, deleteProjectSkillRelation } from '../services/projectsTechnologiesService'
const ProjectsTechnologiesRouter = Router()

// CREATE RELATION
ProjectsTechnologiesRouter.post('/union/project-skill', (req, res, next) => {
  const { projectId, skillId } = req.body
  createProjectSkillRelation(projectId, skillId)
    .then(newUnion => res.status(201).json(newUnion))
    .catch(e => next(e))
})

// DELETE RELATION
ProjectsTechnologiesRouter.delete('/union/project-skill/:id', (req, res, next) => {
  const { id } = req.params
  deleteProjectSkillRelation(+id)
    .then(() => res.status(204).end())
    .catch(e => next(e))
})

export default ProjectsTechnologiesRouter
