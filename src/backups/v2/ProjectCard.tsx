import { motion } from 'framer-motion';
import { ExternalLink, Github, Award } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
  gridClass?: string;
}

export default function ProjectCard({ project, index, gridClass = '' }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`bg-white dark:bg-dark-surface border border-gray-200 dark:border-dark-border rounded-xl p-6 hover:shadow-lg dark:hover:shadow-2xl transition-all hover:scale-[1.02] ${gridClass}`}
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {project.title}
        </h3>
        {project.award && (
          <div className="flex items-center gap-1 text-yellow-600 dark:text-yellow-500" title={project.award}>
            <Award size={20} />
          </div>
        )}
      </div>

      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <ul className="space-y-2 mb-4">
        {project.highlights.map((highlight, i) => (
          <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex">
            <span className="mr-2">•</span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-dark-border">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <Github size={18} />
            <span className="text-sm font-medium">Code</span>
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <ExternalLink size={18} />
            <span className="text-sm font-medium">Demo</span>
          </a>
        )}
      </div>
    </motion.div>
  );
}
