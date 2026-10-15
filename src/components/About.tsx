import styles from './About.module.css'

export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className={`container ${styles.inner}`}>
        <p className={styles.label}>A LITTLE ABOUT ME</p>
        <h2 className={styles.headline}>Currently working as lead UI designer at ICIS.</h2>
        <p className={styles.bio}>
          When I was 5 years old I wanted to be the designer for the toys at McDonald’s.
        </p>
        <div className={styles.links}>
          <a href="#about">
            About <span className="arrow" aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}
