import { Router, RequestHandler } from 'express'
import { User } from '../models/User'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const loginRouter = Router()

loginRouter.post('/login', (async (req, res) => {
  const { email, password } = req.body
  const user: any = await User.findOne({
    where: { email }
  })
  const passwordCorrect = (user != null) ? await bcrypt.compare(password, user.password) : false
  if ((user == null) || !passwordCorrect) {
    return res.status(401).json({ error: 'El email y/o la contraseña son incorrectos' })
  }
  const userForToken = { id: user.id, email: user.email }
  const secret: string = process.env.JWT_SECRET ?? ''
  const token = jwt.sign(userForToken, secret, {
    expiresIn: 60 * 60 * 24 * 365
  })
  return res.status(202).json({ token })
}) as RequestHandler)

export default loginRouter
