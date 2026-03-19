import { motion } from 'framer-motion';
import { experience, type ExperienceEntry } from '../../data/resumeData';
import aiLabSvg from '../../assets/images/ai-lab.svg';
import styles from './Experience.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

function ExperienceCard({ entry }: { entry: ExperienceEntry }) {
  return (
    <motion.div className={`card ${styles.card}`} variants={fadeUp} whileHover={{ y: -5 }}>
      <div className={styles.cardInner}>
        <div className={styles.textSide}>
          <div className={styles.header}>
            <div>
              <h3 className={styles.role}>{entry.role}</h3>
              <p className={styles.company}>{entry.company}</p>
            </div>
            <span className={styles.period}>{entry.period}</span>
          </div>

          <ul className={styles.bullets}>
            {entry.bullets.map((b) => (
              <li key={b} className={styles.bullet}>
                <span className={styles.bulletArrow}>›</span>
                {b}
              </li>
            ))}
          </ul>

          <div className={styles.tagRow}>
            {['Computer Vision', 'Python', 'Research', 'AI / ML', 'Data Analysis'].map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>

        <div className={styles.imageSide}>
          <img src={aiLabSvg} alt="AI computer vision lab illustration" className={styles.labImg} />
        </div>
      </div>
    </motion.div>
  );
}

/** Work Experience section rendered as an illustrated card. */
export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
        >
          <span className="section-label">Work History</span>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            Applying algorithms to real-world plant biology via computer vision research.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          transition={{ staggerChildren: 0.15 }}
        >
          {experience.map((entry) => (
            <ExperienceCard key={entry.company} entry={entry} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
