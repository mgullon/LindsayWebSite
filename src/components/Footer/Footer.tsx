import { motion } from 'framer-motion';
import { personal } from '../../data/resumeData';
import styles from './Footer.module.css';

const navLinks = [
  { id: 'about',        label: 'About' },
  { id: 'education',    label: 'Education' },
  { id: 'skills',       label: 'Skills' },
  { id: 'experience',   label: 'Experience' },
  { id: 'projects',     label: 'Projects' },
  { id: 'transcript',   label: 'Transcript' },
  { id: 'cover-letter', label: 'Cover Letter' },
  { id: 'contact',      label: 'Contact' },
];

/** Site footer with navigation, attribution, and back-to-top button. */
export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        {/* Brand */}
        <motion.div
          className={styles.brand}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.logo}>LG</div>
          <p className={styles.tagline}>Building great software, one commit at a time.</p>
        </motion.div>

        {/* Nav grid */}
        <motion.nav
          className={styles.nav}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          aria-label="Footer navigation"
        >
          {navLinks.map(({ id, label }) => (
            <button
              key={id}
              className={styles.navLink}
              onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
            >
              {label}
            </button>
          ))}
        </motion.nav>

        <div className={styles.divider} />

        {/* Bottom row */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} {personal.name} · San Diego, CA
          </p>
          <p className={styles.built}>
            Built with React, TypeScript &amp; Framer Motion
          </p>
          <button className={styles.backToTop} onClick={scrollToTop} aria-label="Back to top">
            ↑ Top
          </button>
        </div>
      </div>
    </footer>
  );
}
