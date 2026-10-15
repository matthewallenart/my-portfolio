import styles from './Approach.module.css'
import { principles } from '../data'

export default function Approach() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.heading}>
          <p className={styles.label}>HOW I WORK</p>
          <h2 className={styles.statement}>
            13 years shaping
            <br />
            <em>complex</em> digital products.
          </h2>
        </div>

        <div className={styles.principles}>
          {principles.map((p) => (
            <div className={styles.principle} key={p.number}>
              <hr className="divider" />
              <p className={styles.number}>{p.number}</p>
              <p className={styles.pTitle}>{p.title}</p>
              <p className={styles.pBody}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
