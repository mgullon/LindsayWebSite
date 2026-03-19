import { motion } from 'framer-motion';
import { personal } from '../../data/resumeData';
import styles from './Contact.module.css';

const links = [
  { icon: '✉️', label: 'Email', href: `mailto:${personal.email}`, display: personal.email },
  { icon: '💼', label: 'LinkedIn', href: personal.linkedin, display: 'linkedin.com/in/lindsay-gullon' },
  { icon: '🎮', label: 'itch.io', href: 'https://lindsaygullon.itch.io', display: 'lindsaygullon.itch.io' },
  { icon: '📱', label: 'Phone', href: `tel:${personal.phone}`, display: personal.phone },
];

/** Contact section with animated link cards and CTA. */
export default function Contact() {
  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
        >
          <span className="section-label">Let's Connect</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            I'm actively looking for software engineering internship opportunities. If you have an
            opening or just want to chat, I'd love to hear from you!
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {links.map(({ icon, label, href, display }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`card ${styles.linkCard}`}
              variants={{
                hidden: { opacity: 0, y: 28 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
              }}
              whileHover={{ y: -6 }}
            >
              <span className={styles.linkIcon}>{icon}</span>
              <div>
                <p className={styles.linkLabel}>{label}</p>
                <p className={styles.linkDisplay}>{display}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <p className={styles.ctaText}>
            Ready to collaborate? Send me an email and I'll get back to you within 24 hours.
          </p>
          <a href={`mailto:${personal.email}`} className="btn btn-primary">
            Send a Message ✉️
          </a>
        </motion.div>
      </div>
    </section>
  );
}
