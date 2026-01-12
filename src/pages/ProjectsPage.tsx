import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { getProjectSlug } from '../data/projectSlugs';

export default function ProjectsPage() {
  const featuredProjects = projects.filter(p => p.category === 'featured');
  const academicProjects = projects.filter(p => p.category === 'academic');

  return (
    <div className="pt-32 pb-32 px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h1 className="text-6xl font-serif font-medium mb-6 text-gray-900 dark:text-gray-100">
            Projects
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-loose max-w-2xl">
            A collection of work exploring AI systems, MLOps, and production-ready solutions.
          </p>
        </motion.div>

        <div className="mb-32">
          <h2 className="text-2xl font-serif font-medium mb-12 text-gray-900 dark:text-gray-100">
            Featured
          </h2>
          
          <div className="space-y-12">
            {featuredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="border-b border-gray-200 dark:border-gray-800 pb-12 last:border-0"
              >
                <Link to={`/projects/${getProjectSlug(project.id)}`}>
                  <h3 className="text-2xl font-serif font-medium text-gray-900 dark:text-gray-100 mb-4 hover:text-gray-600 dark:hover:text-gray-400 transition-colors">
                    {project.title}
                  </h3>
                </Link>
                <p className="text-gray-600 dark:text-gray-400 leading-loose mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-sans text-gray-500 dark:text-gray-500 border border-gray-300 dark:border-gray-700 px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-serif font-medium mb-12 text-gray-900 dark:text-gray-100">
            Academic Research
          </h2>
          
          <div className="space-y-12">
            {academicProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="border-b border-gray-200 dark:border-gray-800 pb-12 last:border-0"
              >
                <Link to={`/projects/${getProjectSlug(project.id)}`}>
                  <h3 className="text-2xl font-serif font-medium text-gray-900 dark:text-gray-100 mb-4 hover:text-gray-600 dark:hover:text-gray-400 transition-colors">
                    {project.title}
                  </h3>
                </Link>
                <p className="text-gray-600 dark:text-gray-400 leading-loose mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-sans text-gray-500 dark:text-gray-500 border border-gray-300 dark:border-gray-700 px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
