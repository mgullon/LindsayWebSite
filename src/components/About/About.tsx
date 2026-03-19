import { motion } from 'framer-motion';
import { personal } from '../../data/resumeData';
import avatarSvg from '../../assets/images/avatar.jpg';
import ucsdSvg from '../../assets/images/ucsd-campus.jpg';
import styles from './About.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const highlights = [
  { icon: '🎓', text: 'CS @ UC San Diego – Seventh College' },
  { icon: '✨', text: 'Perfect 4.0 GPA – 3× Provost Honors' },
  { icon: '🎮', text: 'Game dev (itch.io), AI research (ESB.AI)' },
  { icon: '🌐', text: 'Bilingual: English & Mandarin' },
];

/** About section with a short bio, highlights card, and campus image. */
export default function About() {
  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
        >
          <span className="section-label">Who I Am</span>
          <h2 className="section-title">About Me</h2>
        </motion.div>

        <div className={styles.grid}>
          {/* Left: text */}
          <motion.div
            className={styles.textCol}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
          >
            <p className={styles.bio}>
              I'm <strong>Lindsay Gullon</strong>, a second-year Computer Science student at{' '}
              <strong>UC San Diego</strong> (Seventh College). I graduated as{' '}
              <strong>Valedictorian</strong> from Redlands East Valley High School with a 4.72 GPA
              and went on to maintain a <strong>perfect 4.0</strong> throughout college—earning
              Provost Honors every eligible quarter.
            </p>
            <p className={styles.bio}>
              My passion lives at the crossroads of <strong>algorithms, creativity, and impact</strong>.
              I've built pixel-art escape-room games in 48-hour jams, trained computer-vision models
              in an AI research lab, and am steadily deepening my full-stack and Python skills
              through Udemy's most intensive bootcamps.
            </p>
            <p className={styles.bio}>
              When I'm not coding, I'm leveling up my Mandarin. I'm actively seeking a{' '}
              <strong>software engineering internship</strong> where I can grow alongside a
              great team and make meaningful contributions.
            </p>

            <ul className={styles.highlights}>
              {highlights.map(({ icon, text }) => (
                <li key={text} className={styles.highlightItem}>
                  <span className={styles.highlightIcon}>{icon}</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            <div className={styles.contactRow}>
              <a href={`mailto:${personal.email}`} className={styles.contactChip}>
                ✉️ {personal.email}
              </a>
              <a href={`tel:${personal.phone}`} className={styles.contactChip}>
                📱 {personal.phone}
              </a>
            </div>
          </motion.div>

          {/* Right: image card */}
          <motion.div
            className={styles.imageCol}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, ease: 'easeOut', delay: 0.1 }}
          >
            <div className={styles.imageCard}>
              <img src={ucsdSvg} alt="UC San Diego Geisel Library" className={styles.campusImg} />
              <div className={styles.imageOverlay}>
                <img src={avatarSvg} alt="Lindsay's avatar" className={styles.avatarSmall} />
                <div>
                  <p className={styles.overlayName}>{personal.name}</p>
                  <p className={styles.overlayTitle}>CS @ UCSD · Class of 2028</p>
                </div>
              </div>
            </div>
            <p className={styles.photoCredit}>
              Photo by Erik Jepsen, UC San Diego Communications. Composition by Ben Tolo, SDSC Communications.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
