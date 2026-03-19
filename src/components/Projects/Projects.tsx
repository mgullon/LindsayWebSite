import { motion } from 'framer-motion';
import { projects, type ProjectEntry } from '../../data/resumeData';
import blinkSvg from '../../assets/images/game-blink.svg';
import mageSvg from '../../assets/images/game-mage.svg';
import styles from './Projects.module.css';

const projectImages: Record<string, string> = {
  'Blink!': blinkSvg,
  'Mopey Mage Maggins': mageSvg,
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.58, ease: 'easeOut' } },
};

const linkLabels: Record<string, string> = {
  'lindsaygullon.itch.io': 'Play on itch.io ↗',
  'www.udemy.com': 'View Course ↗',
};

function linkLabel(url: string): string {
  try {
    const host = new URL(url).hostname;
    return linkLabels[host] ?? 'Visit ↗';
  } catch {
    return 'Visit ↗';
  }
}

function ProjectCard({ project }: { project: ProjectEntry }) {
  const img = projectImages[project.title];
  const hasLink = Boolean(project.url);

  return (
    <motion.article className={`card ${styles.card}`} variants={cardVariants} whileHover={{ y: -6 }}>
      {/* Thumbnail */}
      <div className={styles.thumbnail}>
        {img ? (
          <img src={img} alt={`${project.title} screenshot`} className={styles.thumbnailImg} />
        ) : (
          <div className={styles.thumbnailPlaceholder}>
            <span>{project.placeholder ?? project.title[0]}</span>
          </div>
        )}
        <div className={styles.contextBadge}>{project.context}</div>
      </div>

      {/* Body */}
      <div className={styles.body}>
        <div className={styles.header}>
          <h3 className={styles.title}>{project.title}</h3>
          <span className={styles.period}>{project.period}</span>
        </div>

        <p className={styles.description}>{project.description}</p>

        <div className={styles.tagRow}>
          {project.tags.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>

        {hasLink && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkBtn}
          >
            {linkLabel(project.url)}
          </a>
        )}
      </div>
    </motion.article>
  );
}

/** Projects section: game jam entries and self-study courses as illustrated cards. */
export default function Projects() {
  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
        >
          <span className="section-label">What I've Built</span>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Games, bootcamps, and side projects that put theory into practice.
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
