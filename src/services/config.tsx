import axios from 'axios'

export const http = axios.create({
  baseURL: 'https://expressjs-prisma-production-70e1.up.railway.app/'
})
