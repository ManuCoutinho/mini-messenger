export type AuthResponseTypes = {
  token: string
  user: {
    id: string
    avatar_url: string
    name: string
    login: string
  }
}

export type AuthProviderProps = {
  children: React.ReactNode
}

export type UserType = {
  id: string
  name: string
  login: string
  avatar_url: string
}

export type AuthContextDataType = {
  user: UserType | null
  signInUrl: string
  signOut: () => void
}
