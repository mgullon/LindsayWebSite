import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { terms, cumulativeSummary, type Term, type Course } from '../../data/transcriptData';
import styles from './Transcript.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

function gradeClass(grade: string): string {
  if (['A+', 'A', 'A-', 'B+', 'B'].includes(grade)) return 'excellent';
  if (grade === 'P') return 'pass';
  return 'progress';
}

function CourseRow({ course }: { course: Course }) {
  return (
    <tr className={styles.row}>
      <td className={styles.code}>{course.code}</td>
      <td className={styles.courseName}>{course.title}</td>
      <td className={styles.units}>{course.units}</td>
      <td>
        <span className={`grade-badge ${gradeClass(course.grade)}`}>{course.grade}</span>
      </td>
    </tr>
  );
}

function TermAccordion({ term }: { term: Term }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`${styles.termBlock} ${term.inProgress ? styles.termInProgress : ''}`}>
      <button
        className={styles.termHeader}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <div className={styles.termInfo}>
          <span className={styles.termName}>{term.name} {term.year}</span>
          {term.honors && <span className={styles.honorsBadge}>{term.honors}</span>}
          {term.inProgress && <span className={styles.inProgressBadge}>In Progress</span>}
        </div>
        <div className={styles.termMeta}>
          {term.termGPA !== null && (
            <span className={styles.termGpa}>GPA {term.termGPA.toFixed(2)}</span>
          )}
          <span className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`}>›</span>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div className={styles.termBody}>
              <table className={styles.courseTable}>
                <thead>
                  <tr>
                    <th>Code</th>
                    <th>Course</th>
                    <th>Units</th>
                    <th>Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {term.courses.map((c) => (
                    <CourseRow key={c.code} course={c} />
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/** Official transcript viewer with expandable term accordions and a GPA summary banner. */
export default function Transcript() {
  return (
    <section id="transcript" className="section section-alt">
      <div className="container">
        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
        >
          <span className="section-label">UC San Diego · Official Record</span>
          <h2 className="section-title">Academic Transcript</h2>
          <p className="section-subtitle">
            Click any term to expand courses. Grades reflect the official UCSD academic record.
          </p>
        </motion.div>

        {/* Summary banner */}
        <motion.div
          className={styles.summaryBanner}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { label: 'Cumulative GPA', value: cumulativeSummary.gpa.toFixed(3) },
            { label: 'UC Credits', value: `${cumulativeSummary.letterGradeCreditsCompleted}` },
            { label: 'Total Credits', value: `${cumulativeSummary.totalCreditsCompleted}` },
            { label: 'Grade Points', value: `${cumulativeSummary.gradePoints}` },
          ].map(({ label, value }) => (
            <div key={label} className={styles.summaryItem}>
              <span className={styles.summaryValue}>{value}</span>
              <span className={styles.summaryLabel}>{label}</span>
            </div>
          ))}
        </motion.div>

        {/* Terms */}
        <motion.div
          className={styles.termsGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {terms.map((term) => (
            <motion.div
              key={`${term.name}-${term.year}`}
              variants={fadeUp}
            >
              <TermAccordion term={term} />
            </motion.div>
          ))}
        </motion.div>

        {/* Footer note */}
        <p className={styles.note}>
          ✓ Certified official transcript — University of California, San Diego · Registered
          Undergraduate · ID: {'{A18-29-9462}'}
        </p>
      </div>
    </section>
  );
}
