import { http } from './config'

export default {
  singIn: async (email: string, password: string) => {
    const response = await http.post('/auth/login', {
      email: email,
      password: password
    })

    return response?.data
  },

  postShortUrl: async (params: IInputLink) => {
    const response = await http.post('/shortUrl', {
      user_id: params.user_id,
      code: params.code,
      description: params.description,
      original_url: params.original_url
    })

    return response?.data
  },

  editShortenedUrl: async (link: any) => {
    const response = await http.put(`/shortUrl/${link.id}`, link)
    return response?.data
  },

  deleteShorUrl: async (id: number) => {
    const response = await http.delete(`/shortUrl/${id}`)
    return response?.data
  },

  userShortenedUrls: async (id: number) => {
    const response = await http.get(`/shortUrl/${id}`)
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
