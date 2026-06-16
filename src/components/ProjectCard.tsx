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
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="border-b border-line pb-12 last:border-0 last:pb-0"
    >
      <h3 className="font-display font-normal text-[1.6rem] sm:text-3xl text-ink leading-tight mb-3">
        {project.title}
      </h3>

      {project.award && (
        <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-accent mb-4">
          {project.award}
        </p>
      )}

      <p className="font-body text-[16px] text-ink leading-[1.7] mb-5 max-w-2xl">
        {project.description}
      </p>

      <ul className="space-y-2 mb-6 max-w-2xl">
        {project.highlights.map((highlight, i) => (
          <li key={i} className="flex gap-3 text-[15px] font-body text-muted leading-[1.65]">
            <span className="mt-[0.6em] w-[3px] h-[3px] rounded-full bg-faint flex-shrink-0" />
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
                className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink hover:text-accent transition-colors duration-300"
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
            className="font-mono text-[10px] tracking-[0.04em] text-muted border border-line rounded-full px-2.5 py-1"
          >
            {tag}
          </span>
        ))}
      </div>

      {project.video && (
        <div className="mt-7 w-full aspect-video bg-raised rounded-md overflow-hidden border border-line">
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
          className="w-56 mt-6 rounded-md border border-line"
        />
      )}
    </motion.article>
  );
}
