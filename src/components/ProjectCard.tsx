import { motion } from 'framer-motion';
import { Project } from '../data/projects';

const PROJECT_LINKS: { key: 'github' | 'demo' | 'pdf' | 'video'; label: string }[] = [
  { key: 'github', label: 'View Code →' },
  { key: 'demo', label: 'Live Demo →' },
  { key: 'pdf', label: 'Read Paper →' },
  { key: 'video', label: 'Watch Demo →' },
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
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="border-b border-light-border dark:border-dark-border pb-16 last:border-0"
    >
      <h3 className="text-2xl font-serif font-medium text-light-text dark:text-dark-text mb-4">
        {project.title}
      </h3>

      {project.award && (
        <p className="text-light-text dark:text-dark-text italic mb-4">{project.award}</p>
      )}

      <p className="text-light-text dark:text-dark-text leading-loose mb-6">
        {project.description}
      </p>

      <ul className="space-y-3 mb-6">
        {project.highlights.map((highlight, i) => (
          <li key={i} className="text-light-text dark:text-dark-text leading-relaxed flex">
            <span className="mr-3 text-light-muted dark:text-dark-muted">-</span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      {hasLinks && (
        <div className="flex gap-6 text-sm font-sans mb-6">
          {PROJECT_LINKS.map(({ key, label }) =>
            project[key] ? (
              <a
                key={key}
                href={project[key] as string}
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-text dark:text-dark-text hover:text-light-muted dark:hover:text-dark-muted transition-colors"
              >
                {label}
              </a>
            ) : null
          )}
        </div>
      )}

      <div className="flex flex-wrap gap-3">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-sans text-light-text dark:text-dark-text border border-light-border dark:border-dark-border px-3 py-1"
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
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}

      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="w-64 mt-6 mx-auto block border border-light-border dark:border-dark-border"
        />
      )}
    </motion.article>
  );
}
