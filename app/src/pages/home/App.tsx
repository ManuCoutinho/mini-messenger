import { useContext } from 'react'
import { AuthContext } from '@/context/Auth'
import { Header } from '@/components/Header'
import { LoginBox } from '@/components/LoginBox'
import { MessageList } from '@/components/MessageList'
import { SendMessageForm } from '@/components/SendMessageForm'
import styles from './App.module.scss'

export function App() {
  const { user } = useContext(AuthContext)
  return (
    <main
      className={`${styles.content__container} ${
        user && styles['content__container--signed']
      }`}
    >
      {user ? (
        <>
          <MessageList />
          <SendMessageForm />
        </>
      ) : (
        <>
          <Header />
          <LoginBox />
        </>
      )}
    </main>
  )
}
