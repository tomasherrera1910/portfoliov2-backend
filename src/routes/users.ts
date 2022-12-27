import { Router } from 'express'
import { createUser, deleteUser, editUser, getUser, getUsers } from '../services/userService'
const usersRouter = Router()

usersRouter.get('/users', (req, res, next) => {
  getUsers()
    .then(users => res.json(users))
    .catch(e => next(e))
})
usersRouter.get('/users/:id', (req, res, next) => {
  const { id } = req.params
  getUser(+id)
    .then(user => {
      user !== null
        ? res.json(user)
        : res.status(404).json({ error: 'User not found' })
    })
    .catch(e => next(e))
})
usersRouter.post('/users', (req, res, next) => {
  const { username, email, password } = req.body
  createUser({
    username,
    email,
    password
  })
    .then(newUser => res.status(201).json(newUser))
    .catch(e => next(e))
})
usersRouter.put('/users/:id', (req, res, next) => {
  const { id } = req.params
  editUser(+id, req.body)
    .then(userUpdated => res.status(202).json(userUpdated))
    .catch(e => next(e))
})
usersRouter.delete('/users/:id', (req, res, next) => {
  const { id } = req.params
  deleteUser(+id)
    .then(() => res.status(204).end())
    .catch(e => next(e))
})

export default usersRouter
