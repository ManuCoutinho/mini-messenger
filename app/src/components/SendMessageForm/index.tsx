import { useContext, useState } from 'react'
import { VscGithubInverted, VscSignOut } from 'react-icons/vsc'
import { AuthContext } from '@/context/Auth'
import { api } from '@/services/api'
import styles from './styles.module.scss'

export function SendMessageForm(): React.JSX.Element {
  const { user, signOut } = useContext(AuthContext)
  const [message, setMessage] = useState('')

  async function handleSendMessage(event: React.FormEvent) {
    event.preventDefault()
    if (!message.trim()) {
      return
    }
    await api.post('messages', { message })
    setMessage('')
  }

  return (
    <div className={styles.sm__wrapper}>
      <button
        onClick={signOut}
        className={styles['sm__button--singout']}
        name='logout'
        aria-label='logout'
      >
        <VscSignOut size='32' />
      </button>

      <header className={styles['sm-user__information']}>
        <div className={styles['sm-user__img']}>
          <img src={user?.avatar_url} alt={user?.name} />
        </div>
        <strong className={styles['sm-user__name']}>{user?.name}</strong>
        <span className={styles['sm-user__github']}>
          <VscGithubInverted size='16' />
          {user?.login}
        </span>
      </header>

      <form
        onSubmit={handleSendMessage}
        action=''
        method='POST'
        id='form-send-message'
        className={styles.sm__form}
      >
        <label htmlFor='message'>Menssagem</label>
        <textarea
          name='message'
          id='message'
          autoFocus
          placeholder='Qual sua expectativa para o evento?'
          onChange={(event) => setMessage(event.target.value)}
          value={message}
        />

        <button type='submit' name='submit message'>
          Enviar mensagem
        </button>
      </form>
    </div>
  )
}
