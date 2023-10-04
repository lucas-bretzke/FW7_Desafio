import axios from 'axios'

export const http = axios.create({
  baseURL: 'http://192.168.0.14:3000'
})
