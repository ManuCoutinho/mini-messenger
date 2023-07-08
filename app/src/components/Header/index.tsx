import styles from './styles.module.scss'

export function Header(): React.JSX.Element {
  return (
    <header className={styles.header__wrapper}>
      <h1 className={styles.header}>BEATLE CODE</h1>
      <h3 className={styles.header__subtitle}>Sábado, 20/10/2030 às 19hs</h3>
      <p className={styles.header__description}>
        Não perca o maior beattle royale tech!
      </p>
      <p className={styles.header__description}>
        Faça seu login e veja o que os Coders estão falando.
      </p>
    </header>
  )
}
