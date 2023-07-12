import { useContext } from 'react'
import { VscGithubInverted } from 'react-icons/vsc'
import { AuthContext } from '@/context/Auth'
import styles from './styles.module.scss'

export function LoginBox(): React.JSX.Element {
  const { signInUrl } = useContext(AuthContext)

  return (
    <div className={styles['login-box']} role='banner'>
      <h2 className={styles['login-box__title']}>
        Entre e compartilhe sua mensagem
      </h2>
      <a
        role='link'
        className={styles['login-box__link']}
        href={signInUrl}
        tabIndex={0}
        rel='noopener noreferrer'
        aria-labelledby='github authentication'
      >
        <VscGithubInverted size='24' />
        Entrar com Github
      </a>
    </div>
  )
}
