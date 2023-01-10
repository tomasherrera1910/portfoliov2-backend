import { Router, RequestHandler } from 'express'
import { User } from '../models/User'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import verifyUser from '../middlewares/verifyUser'
const loginRouter = Router()

loginRouter.post('/login', (async (req, res) => {
  const { password } = req.body
  const user: any = await User.findOne({
    where: { email: 'tomymza10@gmail.com' }
  })
  const passwordCorrect = (user != null) ? await bcrypt.compare(password, user.password) : false
  if ((user == null) || !passwordCorrect) {
    return res.status(401).json({ error: 'La clave es incorrecta' })
  }
  const userForToken = { id: user.id, email: user.email }
  const secret: string = process.env.JWT_SECRET ?? ''
  const token = jwt.sign(userForToken, secret, {
    expiresIn: 60 * 60 * 24 * 365
  })

  res.cookie('token', token, {
    domain: 'localhost:3000',
    sameSite: 'none'
  })
  return res.status(202).json({ token })
}) as RequestHandler)

loginRouter.get('/verifyLogin/:token', verifyUser, (_req, res) => {
  return res.json({ login: true })
})
export default loginRouter
