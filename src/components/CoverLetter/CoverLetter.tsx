import { motion } from 'framer-motion';
import { coverLetter } from '../../data/coverLetterData';
import styles from './CoverLetter.module.css';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const paraVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

/** Sample cover letter rendered as a styled document card. */
export default function CoverLetter() {
  return (
    <section id="cover-letter" className="section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
        >
          <span className="section-label">For Hiring Managers</span>
          <h2 className="section-title">Cover Letter</h2>
          <p className="section-subtitle">
            A customizable template ready for any software engineering internship application.
          </p>
        </motion.div>

        <motion.div
          className={styles.doc}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          {/* Doc header */}
          <div className={styles.docHeader}>
            <div className={styles.senderInfo}>
              <p className={styles.senderName}>{coverLetter.authorName}</p>
              <p className={styles.senderMeta}>
                {coverLetter.contact.email} · {coverLetter.contact.phone}
              </p>
              <a
                href={coverLetter.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.senderLink}
              >
                LinkedIn ↗
              </a>
            </div>
            <div className={styles.recipientInfo}>
              <p className={styles.recipient}>{coverLetter.role}</p>
              <p className={styles.company}>{coverLetter.company}</p>
            </div>
          </div>

          <div className={styles.divider} />

          {/* Salutation */}
          <p className={styles.salutation}>Dear Hiring Manager,</p>

          {/* Body paragraphs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={styles.body}
          >
            {coverLetter.body.map((para, i) => (
              <motion.p key={i} className={styles.para} variants={paraVariants}>
                {para}
              </motion.p>
            ))}
          </motion.div>

          {/* Closing */}
          <div className={styles.closing}>
            <p className={styles.closingWord}>{coverLetter.closing}</p>
            <p className={styles.signature}>{coverLetter.authorName}</p>
          </div>

          {/* Template note */}
          <div className={styles.templateNote}>
            <span className={styles.noteIcon}>📝</span>
            <span>
              Placeholders like <code>[Company Name]</code> and <code>[company mission]</code> are
              filled in when submitting a real application.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
