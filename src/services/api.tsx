import { http } from './config'

export default {
  postShortUrl: async (url: string, code: string) => {
    const response = await http.post('/newShortUrl', { url, code })
    return response?.data
  },

  createAccount: async (name: string, email: string, password: string) => {
    const response = await http.post('/user', {
      username: name,
      email: email,
      password: password
    })
    return response?.data
  }
}