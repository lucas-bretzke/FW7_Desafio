import api from '../services/api'
import React, { useState, createContext } from 'react'

export const AuthContext = createContext({})

export default function AuthProvider({ children }: any) {
  const [user, setUser] = useState({})

  async function singIn(email: string, password: string) {
    const res = await api.singIn(email, password)

    setUser({
      id: res.user_id,
      name: res.username,
      email: res.email,
      token: res.token
    })

    return res
  }

  return (
    <AuthContext.Provider value={{ singIn, user }}>
      {children}
    </AuthContext.Provider>
  )
}
