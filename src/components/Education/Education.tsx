import { motion } from 'framer-motion';
import { education, type EducationEntry } from '../../data/resumeData';
import styles from './Education.module.css';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

function EducationCard({ entry, index }: { entry: EducationEntry; index: number }) {
  const isPrimary = index === 0;
  return (
    <motion.div
      className={`card ${styles.card} ${isPrimary ? styles.cardPrimary : ''}`}
      variants={cardVariants}
      whileHover={{ y: -6 }}
    >
      <div className={styles.cardTop}>
        <div className={`${styles.icon} ${isPrimary ? styles.iconPrimary : styles.iconSecondary}`}>
          {isPrimary ? '🎓' : '🏫'}
        </div>
        <div className={styles.meta}>
          <p className={styles.period}>{entry.period}</p>
          <div className={styles.gpaTag}>GPA {entry.gpa}</div>
        </div>
      </div>

      <h3 className={styles.institution}>{entry.institution}</h3>
      <p className={styles.degree}>{entry.degree}</p>

      <ul className={styles.highlights}>
        {entry.highlights.map((h) => (
          <li key={h} className={styles.highlight}>
            <span className={styles.bullet} />
            {h}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

/** Education section showing UCSD and high school entries as animated cards. */
export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
        >
          <span className="section-label">Academic Background</span>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            A strong foundation built through dedication, rigorous coursework, and a passion for
            computer science.
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {education.map((entry, i) => (
            <EducationCard key={entry.institution} entry={entry} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
