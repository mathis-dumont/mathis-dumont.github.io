import { motion } from 'framer-motion';
import { Project } from '../data/projects';

const PROJECT_LINKS: { key: 'github' | 'demo' | 'pdf' | 'video'; label: string }[] = [
  { key: 'github', label: 'Code' },
  { key: 'demo', label: 'Demo' },
  { key: 'pdf', label: 'Paper' },
  { key: 'video', label: 'Video' },
];

function getYouTubeEmbedUrl(url: string): string {
  const match = url.match(/^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/);
  return match && match[2].length === 11 ? `https://www.youtube.com/embed/${match[2]}` : url;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const hasLinks = PROJECT_LINKS.some(({ key }) => project[key]);

  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: index * 0.08 }}
      className="border-b border-light-border dark:border-dark-border pb-14 last:border-0"
    >
      <div className="flex items-baseline justify-between gap-4 mb-4">
        <h3 className="font-display font-light text-2xl sm:text-3xl text-light-text dark:text-dark-text leading-tight">
          {project.title}
        </h3>
        <span className="font-mono text-[10px] text-light-muted dark:text-dark-muted tracking-widest shrink-0">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      {project.award && (
        <p className="font-mono text-xs text-light-muted dark:text-dark-muted italic mb-4">{project.award}</p>
      )}

      <p className="font-sans text-light-text dark:text-dark-text leading-relaxed mb-5 text-[15px]">
        {project.description}
      </p>

      <ul className="space-y-2 mb-5">
        {project.highlights.map((highlight, i) => (
          <li key={i} className="flex gap-3 text-[14px] font-sans text-light-muted dark:text-dark-muted leading-relaxed">
            <span className="mt-[0.55em] w-3 h-px bg-light-border dark:bg-dark-border flex-shrink-0" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      {hasLinks && (
        <div className="flex gap-5 mb-5">
          {PROJECT_LINKS.map(({ key, label }) =>
            project[key] ? (
              <a
                key={key}
                href={project[key] as string}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] uppercase tracking-[0.12em] text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text transition-colors duration-300"
              >
                {label} →
              </a>
            ) : null
          )}
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[10px] uppercase tracking-[0.1em] text-light-muted dark:text-dark-muted border border-light-border dark:border-dark-border px-2.5 py-1"
          >
            {tag}
          </span>
        ))}
      </div>

      {project.video && (
        <div className="mt-8 w-full aspect-video bg-light-surface dark:bg-dark-surface overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            src={getYouTubeEmbedUrl(project.video)}
            title={project.title}
            style={{ border: 0 }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}

      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="w-56 mt-6 mx-auto block border border-light-border dark:border-dark-border"
        />
      )}
    </motion.article>
  );
}