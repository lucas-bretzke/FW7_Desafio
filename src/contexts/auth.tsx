import api from '../services/api'
import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState, createContext, useEffect } from 'react'

interface IUser {
  id: string
  name: string
  email: string
}

interface AuthContextData {
  user?: IUser
  signIn(email: string, password: string): Promise<IUser | undefined>
  logout(): Promise<void>
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export default function AuthProvider({
  children
}: {
  children: React.ReactNode
}) {
  const [user, setUser] = useState<IUser>()

  const signIn = async (
    email: string,
    password: string
  ): Promise<IUser | undefined> => {
    try {
      const { user } = await api.signIn(email, password)

      const userData: IUser = {
        id: user.user_id,
        name: user.username,
        email: user.email
      }

      setUser(userData)
      await AsyncStorage.setItem('userData', JSON.stringify(userData))

      return userData
    } catch (error) {
      console.error('Error during login:', error)
      return undefined
    }
  }

  const logout = async (): Promise<void> => {
    try {
      await AsyncStorage.clear()
      setUser(undefined)
    } catch (error) {
      console.error('Error clearing user data:', error)
    }
  }

  const loadUserData = async (): Promise<void> => {
    try {
      const userDataString = await AsyncStorage.getItem('userData')

      if (userDataString) {
        const userData: IUser = JSON.parse(userDataString)
        setUser(userData)
      }
    } catch (error) {
      console.error('Error loading user data:', error)
    }
  }

  useEffect(() => {
    loadUserData()
  }, [])

  return (
    <AuthContext.Provider value={{ user, signIn, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
