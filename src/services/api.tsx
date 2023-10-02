import { http } from './config'

export default {
  singIn: async (email: string, password: string) => {
    const response = await http.post('/auth/login', {
      email: email,
      password: password
    })
    return response?.data
  },

  postShortUrl: async (url: string, code: string) => {
    const response = await http.post('/shortUrl', { url, code })
    return response?.data
  },

  userUrls: async (id: string) => {
    const response = await http.get(`/shortUrl${id}`)
    return response?.data
  },

  createUser: async (name: string, email: string, password: string) => {
    const response = await http.post('/user', {
      username: name,
      email: email,
      password: password
    })
    return response?.data
  },

  checkIfTheEmailIsAlreadyRegistered: async (email: any) => {
    try {
      const response = await http.get(`/users/email/${email}`)
      return response
    } catch (error) {
      console.log('Success: email not found')
    }
  }
}
