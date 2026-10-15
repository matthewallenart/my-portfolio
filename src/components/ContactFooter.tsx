import styles from './ContactFooter.module.css'

export default function ContactFooter() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={`container ${styles.inner}`}>
        <div className={styles.invitation}>
          <div className={styles.copy}>
            <p className={styles.overline}>HAVE SOMETHING IN MIND?</p>
            <p className={styles.headline}>Let’s make it matter.</p>
            <a className={styles.email} href="mailto:hello@matthewallen.design">
              Contact <span className="arrow" aria-hidden="true">↗</span>
            </a>
          </div>
          <a className={styles.bigArrow} href="mailto:hello@matthewallen.design" aria-label="Contact Matthew">
            ↗
          </a>
        </div>

        <div className={styles.colophonWrap}>
          <hr className={styles.footDivider} />
          <div className={styles.colophon}>
            <p>© 2026 Matthew Allen</p>
            <p>matthewallen.design</p>
            <div className={styles.social}>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                LinkedIn <span className="arrow" aria-hidden="true">↗</span>
              </a>
              <a href="#top">
                Back to top <span className="arrow arrow--up" aria-hidden="true">↑</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
