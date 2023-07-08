import { createContext, useEffect, useState } from 'react'
import { api } from '@/services/api'
import {
  AuthContextDataType,
  AuthProviderProps,
  AuthResponseTypes,
  UserType
} from './model'

export const AuthContext = createContext({} as AuthContextDataType)

export function AuthProvider(props: AuthProviderProps) {
  const [user, setUser] = useState<UserType | null>(null)

  const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=${
    import.meta.env.VITE_CLIENT_ID
  }&redirect_uri=http://localhost:5173/`

  async function signIn(githubCode: string) {
    const response = await api.post<AuthResponseTypes>('authenticate', {
      code: githubCode
    })

    const { token, user } = response.data
    localStorage.setItem('@app:token', token)
    api.defaults.headers.common.authorization = `Bearer ${token}`

    setUser(user)
  }

  function signOut() {
    setUser(null)
    localStorage.removeItem('@app:token')
  }

  useEffect(() => {
    const token = localStorage.getItem('@app:token')

    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`
      api.get<UserType>('profile').then((response) => {
        setUser(response.data)
      })
    }
  }, [])

  useEffect(() => {
    const url = window.location.href
    const hasGithubCode = url.includes('?code=')

    if (hasGithubCode) {
      const [urlWithoutCode, githubCode] = url.split('?code=')
      //clean url
      window.history.pushState({}, '', urlWithoutCode)
      signIn(githubCode)
    }
  }, [])

  return (
    <AuthContext.Provider value={{ signInUrl, user, signOut }}>
      {props.children}
    </AuthContext.Provider>
  )
}
