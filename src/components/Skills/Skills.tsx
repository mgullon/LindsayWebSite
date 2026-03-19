import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillGroups, type SkillGroup } from '../../data/resumeData';
import styles from './Skills.module.css';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const groupVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

function SkillGroupCard({ group }: { group: SkillGroup }) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <motion.div className={`card ${styles.groupCard}`} variants={groupVariants} whileHover={{ y: -4 }}>
      <div className={styles.groupHeader}>
        <span className={styles.groupIcon}>{group.icon}</span>
        <h3 className={styles.groupTitle}>{group.category}</h3>
      </div>
      <motion.div
        className={styles.tagList}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {group.skills.map((skill) => (
          <motion.span
            key={skill}
            className={`${styles.skillTag} ${hovered === skill ? styles.skillTagHovered : ''}`}
            variants={tagVariants}
            onMouseEnter={() => setHovered(skill)}
            onMouseLeave={() => setHovered(null)}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.97 }}
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}

/** Skills section: categorized pills with hover interactions and stagger animations. */
export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
        >
          <span className="section-label">Technical Toolkit</span>
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">
            A broad and growing skill set spanning languages, tools, and software engineering
            concepts.
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {skillGroups.map((group) => (
            <SkillGroupCard key={group.category} group={group} />
          ))}
        </motion.div>

        {/* Total skills bar */}
        <AnimatePresence>
          <motion.div
            className={styles.totalBar}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <span className={styles.totalLabel}>Total skills listed</span>
            <span className={styles.totalValue}>
              {skillGroups.reduce((sum, g) => sum + g.skills.length, 0)}+
            </span>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
