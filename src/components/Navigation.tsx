import styles from './Navigation.module.css'

export default function Navigation() {
  return (
    <header className={styles.nav}>
      <div className={`container ${styles.inner}`}>
        <a className={styles.identity} href="#top" aria-label="Matthew Allen, home">
          {/*<span className={styles.monogram}>m.</span>*/}  
          <span className={styles.name}>Matthew Allen</span>
        </a>
        <nav className={styles.links} aria-label="Primary">
          <a className={styles.linkAccent} href="#work">
            Work (03)
          </a>
          <a href="#about">About</a>
          <a href="#contact">
            Contact <span className="arrow" aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  )
}
