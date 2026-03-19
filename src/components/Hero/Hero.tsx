import { motion } from 'framer-motion';
import { personal } from '../../data/resumeData';
import avatarSvg from '../../assets/images/avatar.jpg';
import styles from './Hero.module.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

/** Full-viewport hero banner with animated greeting and CTA buttons. */
export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className={styles.hero}>
      {/* Decorative blobs */}
      <div className={styles.blob1} aria-hidden="true" />
      <div className={styles.blob2} aria-hidden="true" />
      <div className={styles.grid} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Avatar */}
          <motion.div className={styles.avatarWrap} variants={itemVariants}>
            <div className={styles.avatarRing}>
              <img src={avatarSvg} alt="Lindsay Gullon avatar" className={styles.avatar} />
            </div>
            <span className={styles.statusBadge}>
              <span className={styles.statusDot} />
              Open to internships
            </span>
          </motion.div>

          {/* Greeting */}
          <motion.p className={styles.greeting} variants={itemVariants}>
            Hi there, I'm
          </motion.p>

          {/* Name */}
          <motion.h1 className={styles.name} variants={itemVariants}>
            {personal.name}
          </motion.h1>

          {/* Title */}
          <motion.div className={styles.titleWrap} variants={itemVariants}>
            <span className={styles.title}>{personal.title}</span>
          </motion.div>

          {/* Summary */}
          <motion.p className={styles.summary} variants={itemVariants}>
            {personal.summary}
          </motion.p>

          {/* Stats row */}
          <motion.div className={styles.stats} variants={itemVariants}>
            {[
              { value: '4.0', label: 'GPA' },
              { value: '3×', label: 'Provost Honors' },
              { value: '10+', label: 'Languages' },
              { value: '#1', label: 'Valedictorian' },
            ].map(({ value, label }) => (
              <div key={label} className={styles.stat}>
                <span className={styles.statValue}>{value}</span>
                <span className={styles.statLabel}>{label}</span>
              </div>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div className={styles.buttons} variants={itemVariants}>
            <button className="btn btn-primary" onClick={() => scrollTo('projects')}>
              View Projects ↓
            </button>
            <a
              href="/Lindsay_Gullon_Resume.pdf"
              download="Lindsay_Gullon_Resume.pdf"
              className={`btn btn-primary ${styles.btnDownload}`}
            >
              ↓ Download Resume
            </a>
            <button className="btn btn-outline" onClick={() => scrollTo('contact')}>
              Get in Touch
            </button>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              LinkedIn ↗
            </a>
          </motion.div>

          {/* Location badge */}
          <motion.p className={styles.location} variants={itemVariants}>
            📍 {personal.location} &nbsp;·&nbsp; ✉️&nbsp;
            <a href={`mailto:${personal.email}`}>{personal.email}</a>
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className={styles.scrollHint}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        >
          ↓
        </motion.span>
      </motion.div>
    </section>
  );
}
