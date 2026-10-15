import styles from './SelectedWork.module.css'
import { projects } from '../data'

const webScreen = '/assets/smarkets-web.png'
const appScreen = '/assets/smarkets-app.png'

export default function SelectedWork() {
  return (
    <section className={styles.section} id="work">
      <div className={`container ${styles.inner}`}>
        <div className={styles.intro}>
          <hr className="divider" />
          <div className={styles.heading}>
            <h2 className={styles.title}>
              Selected work <span className={styles.count}>(03)</span>
            </h2>
            <p className={styles.blurb}>
              UI/UX case studies from 13 years shaping complex digital products.
            </p>
          </div>
        </div>

        {/* Featured project */}
        <article className={styles.featured}>
          <div className={styles.featuredStage}>
            <div className={styles.featuredTop}>
              <p className={styles.product}>
                Smarkets <span className={`${styles.productArrow} arrow`} aria-hidden="true">↗</span>
              </p>
              <p className={styles.platform}>EXCHANGE REDESIGN</p>
            </div>
            <div className={styles.shots}>
              <div className={styles.webShot}>
                <img src={webScreen} alt="Smarkets exchange web interface redesign" loading="lazy" />
              </div>
              <div className={styles.appShot}>
                <img src={appScreen} alt="Smarkets mobile app screen" loading="lazy" />
              </div>
            </div>
          </div>
          <a className={styles.caption} href="#work">
            <div className={styles.captionMeta}>
              <span className={styles.metaLabel}>01 / SMARKETS EXCHANGE · UI/UX CASE STUDY</span>
              <span className={`${styles.open} arrow`} aria-hidden="true">↗</span>
            </div>
            <p className={styles.captionTitle}>
              End-to-end redesign clarifying back/lay betting, commissions, and trading.
            </p>
            <p className={styles.disciplines}>
              Lead UX/UI (with 2 designers) / Web &amp; mobile / Exchange betting
            </p>
          </a>
        </article>

        {/* Secondary projects */}
        <div className={styles.grid}>
          <article className={styles.project}>
            <div className={`${styles.preview} ${styles.previewNavy}`}>
              <p className={styles.wordmark}>ICIS</p>
              <p className={styles.descriptor}>INDEPENDENT COMMODITY INTELLIGENCE SERVICES</p>
              <span className={styles.lock}>
                <span className={styles.lockIcon} aria-hidden="true" />
                Password protected
              </span>
            </div>
            <a className={styles.caption} href={projects[0].href}>
              <div className={styles.captionMeta}>
                <span className={styles.metaLabel}>{projects[0].meta}</span>
                <span className={`${styles.open} arrow`} aria-hidden="true">↗</span>
              </div>
              <p className={styles.captionTitle}>{projects[0].title}</p>
              <p className={styles.disciplines}>{projects[0].disciplines}</p>
            </a>
          </article>

          <article className={styles.project}>
            <div className={`${styles.preview} ${styles.previewNavy}`}>
              <p className={styles.wordmark}>SBK</p>
              <p className={styles.descriptor}>SPORTSBOOK · UI/UX DESIGN</p>
              <p className={styles.previewBody}>
                Modernized betting flows and improved discovery of community features
                through research, IA, prototyping, testing, visual design, and design
                system development.
              </p>
            </div>
            <a className={styles.caption} href={projects[1].href}>
              <div className={styles.captionMeta}>
                <span className={styles.metaLabel}>{projects[1].meta}</span>
                <span className={`${styles.open} arrow`} aria-hidden="true">↗</span>
              </div>
              <p className={styles.captionTitle}>{projects[1].title}</p>
              <p className={styles.disciplines}>{projects[1].disciplines}</p>
            </a>
          </article>
        </div>
      </div>
    </section>
  )
}
