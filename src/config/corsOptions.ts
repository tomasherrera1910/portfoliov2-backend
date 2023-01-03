import { CorsOptions } from 'cors'

const whitelist = ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:3001/**']
const corsOptions: CorsOptions = {
  origin: function (origin: any, callback: any) {
    if (whitelist.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  credentials: true
}
export default corsOptions
