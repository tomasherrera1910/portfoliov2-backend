import { NextFunction, Request, Response } from 'express'
import jwt, { Secret } from 'jsonwebtoken'

const verifyUser = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const token = req.cookies.token ?? req.params.token
    if (token === undefined) {
      throw new Error()
    }
    const secret: Secret = process.env.JWT_SECRET ?? ''
    const decodedToken = jwt.verify(token, secret)
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!decodedToken) {
      throw new Error()
    }
    next()
  } catch (_error) {
    res.status(401).json({ error: 'Token inválido o inexistente' })
  }
}

export default verifyUser
