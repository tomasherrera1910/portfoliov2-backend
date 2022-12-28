import { Router } from 'express'
import verifyUser from '../middlewares/verifyUser'
import { getSkills, getSkill, createSkill, editSkill, deleteSkill } from '../services/skillsService'

const skillsRouter = Router()

skillsRouter.get('/skills', (req, res, next) => {
  getSkills()
    .then(skills => res.json(skills))
    .catch(e => next(e))
})
skillsRouter.get('/skills/:id', (req, res, next) => {
  const { id } = req.params
  getSkill(+id)
    .then(skill => {
      skill !== null
        ? res.json(skill)
        : res.status(404).json({ error: 'Skill not found' })
    })
    .catch(e => next(e))
})
skillsRouter.post('/skills', verifyUser, (req, res, next) => {
  const { name, imageURL, technology } = req.body
  createSkill({
    name,
    imageURL,
    technology
  })
    .then(newSkill => res.status(201).json(newSkill))
    .catch(e => next(e))
})
skillsRouter.put('/skills/:id', verifyUser, (req, res, next) => {
  const { id } = req.params
  editSkill(+id, req.body)
    .then(skillUpdated => res.status(202).json(skillUpdated))
    .catch(e => next(e))
})
skillsRouter.delete('/skills/:id', verifyUser, (req, res, next) => {
  const { id } = req.params
  deleteSkill(+id)
    .then(() => res.status(204).end())
    .catch(e => next(e))
})

export default skillsRouter
