import { Response } from 'express'

export default function handleErrors (error: Error, _req: any, res: Response, _next: any): void {
  console.error({ error })
  console.error(error.name)
  if (error.name === 'SequelizeValidationError') {
    res.status(400).json({ missingFields: error.message })
  }
  res.status(500).json({ error: error.message })
}
