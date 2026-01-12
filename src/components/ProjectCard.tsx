import { motion } from 'framer-motion';
import { ExternalLink, Github, Award } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="border-b border-gray-200 dark:border-gray-800 pb-12 mb-12 last:border-0"
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-2xl font-serif font-medium text-gray-900 dark:text-gray-100">
          {project.title}
        </h3>
        {project.award && (
          <Award className="text-gray-400 dark:text-gray-600 flex-shrink-0 ml-4" size={20} />
        )}
      </div>

      <p className="text-gray-600 dark:text-gray-400 mb-6 leading-loose">
        {project.description}
      </p>

      <ul className="space-y-3 mb-6">
        {project.highlights.map((highlight, i) => (
          <li key={i} className="text-gray-600 dark:text-gray-400 leading-relaxed flex">
            <span className="mr-3 text-gray-400">—</span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-3 mb-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-sans text-gray-500 dark:text-gray-500 border border-gray-300 dark:border-gray-700 px-3 py-1"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-6 text-sm font-sans">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 transition-colors"
          >
            View Code →
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 transition-colors"
          >
            Live Demo →
          </a>
        )}
      </div>
    </motion.article>
  );
}
