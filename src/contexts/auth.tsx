import api from '../services/api'
import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState, createContext, useEffect } from 'react'

export const AuthContext = createContext({})

export default function AuthProvider({ children }: any) {
  const [user, setUser] = useState<IUser>()

  async function singIn(email: string, password: string) {
    try {
      const { token, user } = await api.singIn(email, password)

      const userData = {
        id: user.user_id,
        name: user.username,
        email: user.email,
        token: token
      }

      setUser(userData)
      //Armazenar dados do usuario no AsyncStorage
      await AsyncStorage.setItem('userData', JSON.stringify(userData))
    } catch (error) {
      console.log('Erro ao fazer login: ', error)
    }
  }

  async function logout() {
    try {
      await AsyncStorage.removeItem('userData')
      setUser()
    } catch (error) {
      console.log('Erro ao remover os dados do usuário: ', error)
    }
  }

  async function getUserToAsyncStorage() {
    try {
      const userDataString = await AsyncStorage.getItem('userData')

      if (userDataString) {
        const userData = JSON.parse(userDataString)
        setUser(userData)
      }
    } catch (error) {
      console.log('Erro ao recuperar os dados do usuário: ', error)
    }
  }

  async function getUserShortenedUrls() {
    try {
      if (!user) return
      const response = await api.userShortenedUrls(user.id)
      return response
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUserToAsyncStorage()
  }, [])

  return (
    <AuthContext.Provider
      value={{ singIn, getUserShortenedUrls, logout, user }}
    >
      {children}
    </AuthContext.Provider>
  )
}
