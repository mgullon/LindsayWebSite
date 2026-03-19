import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navbar.module.css';

const navLinks = [
  { id: 'about',       label: 'About' },
  { id: 'education',   label: 'Education' },
  { id: 'skills',      label: 'Skills' },
  { id: 'experience',  label: 'Experience' },
  { id: 'projects',    label: 'Projects' },
  { id: 'transcript',  label: 'Transcript' },
  { id: 'cover-letter', label: 'Cover Letter' },
  { id: 'contact',     label: 'Contact' },
];

/** Sticky top navigation bar with scroll-active highlighting and mobile menu. */
export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [active, setActive]       = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      // Detect which section is in view
      const offsets = navLinks.map(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return { id, top: Infinity };
        return { id, top: el.getBoundingClientRect().top };
      });
      const current = offsets
        .filter(({ top }) => top <= 100)
        .at(-1);
      setActive(current?.id ?? '');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <motion.header
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <button className={styles.logo} onClick={() => scrollTo('hero')} aria-label="Go to top">
          <span className={styles.logoGradient}>LG</span>
          <span className={styles.logoName}>Lindsay Gullon</span>
        </button>

        {/* Desktop nav */}
        <nav className={styles.desktopNav} aria-label="Main navigation">
          {navLinks.map(({ id, label }) => (
            <button
              key={id}
              className={`${styles.navLink} ${active === id ? styles.navLinkActive : ''}`}
              onClick={() => scrollTo(id)}
            >
              {label}
              {active === id && (
                <motion.span
                  className={styles.activeDot}
                  layoutId="activeNavDot"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen1 : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen2 : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen3 : ''}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className={styles.mobileNav}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            aria-label="Mobile navigation"
          >
            {navLinks.map(({ id, label }, i) => (
              <motion.button
                key={id}
                className={`${styles.mobileNavLink} ${active === id ? styles.mobileNavLinkActive : ''}`}
                onClick={() => scrollTo(id)}
                initial={{ x: -24, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.04, duration: 0.22 }}
              >
                {label}
              </motion.button>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
