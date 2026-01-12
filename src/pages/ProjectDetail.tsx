import { motion } from 'framer-motion';
import { useParams, Link, Navigate } from 'react-router-dom';
import { projects } from '../data/projects';
import { getProjectIdFromSlug } from '../data/projectSlugs';
import { ArrowLeft, Award } from 'lucide-react';

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const projectId = slug ? getProjectIdFromSlug(slug) : undefined;
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="pt-32 pb-32 px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Link 
            to="/projects"
            className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 transition-colors text-sm font-sans mb-12"
          >
            <ArrowLeft size={16} />
            Back to projects
          </Link>

          <div className="mt-12 mb-16">
            <div className="flex items-start justify-between mb-6">
              <h1 className="text-5xl font-serif font-medium text-gray-900 dark:text-gray-100 pr-8">
                {project.title}
              </h1>
              {project.award && (
                <Award className="text-gray-400 dark:text-gray-600 flex-shrink-0 mt-2" size={24} />
              )}
            </div>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-loose">
              {project.description}
            </p>
          </div>

          {project.award && (
            <div className="mb-12 pb-12 border-b border-gray-200 dark:border-gray-800">
              <p className="text-gray-600 dark:text-gray-400 italic">
                {project.award}
              </p>
            </div>
          )}

          <div className="mb-16 pb-16 border-b border-gray-200 dark:border-gray-800">
            <h2 className="text-2xl font-serif font-medium mb-8 text-gray-900 dark:text-gray-100">
              Key Highlights
            </h2>
            <ul className="space-y-6">
              {project.highlights.map((highlight, i) => (
                <li key={i} className="text-gray-600 dark:text-gray-400 leading-loose flex">
                  <span className="mr-4 text-gray-400">{i + 1}.</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-16 pb-16 border-b border-gray-200 dark:border-gray-800">
            <h2 className="text-2xl font-serif font-medium mb-8 text-gray-900 dark:text-gray-100">
              Technologies
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm font-sans text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-gray-700 px-4 py-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {(project.github || project.demo) && (
            <div className="flex gap-8 text-sm font-sans">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
                >
                  View on GitHub →
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
                >
                  Live Demo →
                </a>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
