import { http } from './config'

export default {
  singIn: async (email: string, password: string) => {
    const response = await http.post('/login', {
      email: email,
      password: password
    })
    return response?.data
  },

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
