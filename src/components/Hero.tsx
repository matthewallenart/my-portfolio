import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={`container ${styles.inner}`}>
        <div className={styles.overline}>
          <p className={styles.discipline}>LEAD PRODUCT DESIGNER · 13 YEARS EXPERIENCE</p>
          <p className={styles.availability}>
            <span className={styles.dot} aria-hidden="true" />
            Currently at ICIS
          </p>
        </div>

        <h1 className={styles.statement}>
          Complex made <em>clear.</em>
          <span className={styles.arrow} aria-hidden="true">
            ↗
          </span>
        </h1>

        <div className={styles.summary}>
          <p className={styles.lede}>
            Lead Product Designer with 13 years of experience shaping complex digital
            products and user experiences.
          </p>
          <a className={styles.anchor} href="#work">
            Explore selected work{' '}
            <span className="arrow arrow--down" aria-hidden="true">
              ↓
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
