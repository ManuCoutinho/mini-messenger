import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../services/api'

type User = {
  id: string
  name: string
  login: string
  avatar_url: string
}
type AuthContextData = {
  user: User | null
  signInUrl: string
  signOut: () => void
}

type AuthResponse = {
  token: string
  user: {
    id: string
    avatar_url: string
    name: string
    login: string
  }
}

type AuthProvider = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider(props: AuthProvider) {
  const [user, setUser] = useState<User | null>(null)

  const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=${
    import.meta.env.VITE_CLIENT_ID
  }&redirect_uri=http://localhost:5173/`

  async function signIn(githubCode: string) {
    const response = await api.post<AuthResponse>('authenticate', {
      code: githubCode
    })
    console.log(response)
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
      api.get<User>('profile').then((response) => {
        setUser(response.data)
      })
    }
  }, [])

  useEffect(() => {
    const url = window.location.href
    const hasGithubCode = url.includes('?code=')

    if (hasGithubCode) {
      const [urlWithoutCode, githubCode] = url.split('?code=')
      //limpar barra de navegação
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
