import { motion } from 'framer-motion';
import { projects } from '../data/projects';

export default function ResearchPage() {
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
            Research
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-loose max-w-2xl">
            Academic work and research projects from my studies at ENSAE Paris and Arts & Métiers.
          </p>
        </motion.div>

        <div className="space-y-16">
          {academicProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="border-b border-gray-200 dark:border-gray-800 pb-16 last:border-0"
            >
              <h2 className="text-3xl font-serif font-medium text-gray-900 dark:text-gray-100 mb-4">
                {project.title}
              </h2>
              
              {project.award && (
                <p className="text-gray-600 dark:text-gray-400 italic mb-6">
                  {project.award}
                </p>
              )}

              <p className="text-gray-600 dark:text-gray-400 leading-loose mb-8">
                {project.description}
              </p>

              <h3 className="text-lg font-serif font-medium mb-4 text-gray-900 dark:text-gray-100">
                Key Contributions
              </h3>
              <ul className="space-y-4 mb-8">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="text-gray-600 dark:text-gray-400 leading-relaxed flex">
                    <span className="mr-3 text-gray-400">-</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

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
  );
}
