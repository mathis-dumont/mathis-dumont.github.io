import { motion } from 'framer-motion';
import { projects } from '../data/projects';

export default function CVPage() {
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
            Curriculum Vitae
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-loose max-w-2xl">
            Mathis Dumont — AI Engineer & Researcher
          </p>
        </motion.div>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 pb-24 border-b border-gray-200 dark:border-gray-800"
        >
          <h2 className="text-3xl font-serif font-medium mb-12 text-gray-900 dark:text-gray-100">
            Education
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-serif font-medium text-gray-900 dark:text-gray-100 mb-2">
                ENSAE Paris
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Master's in Data Science & Statistics
              </p>
              <p className="text-gray-500 dark:text-gray-500 text-sm font-sans">
                2023 — Present
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif font-medium text-gray-900 dark:text-gray-100 mb-2">
                Arts & Métiers
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Engineering Degree — Industrial Engineering
              </p>
              <p className="text-gray-500 dark:text-gray-500 text-sm font-sans">
                2022 — Present
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 pb-24 border-b border-gray-200 dark:border-gray-800"
        >
          <h2 className="text-3xl font-serif font-medium mb-12 text-gray-900 dark:text-gray-100">
            Experience
          </h2>

          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-serif font-medium text-gray-900 dark:text-gray-100 mb-2">
                Head of Sales
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Junior Enterprise
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400 leading-relaxed">
                <li className="flex">
                  <span className="mr-3">—</span>
                  <span>Led sales operations and client relationship management</span>
                </li>
                <li className="flex">
                  <span className="mr-3">—</span>
                  <span>Managed project proposals and business development</span>
                </li>
                <li className="flex">
                  <span className="mr-3">—</span>
                  <span>Coordinated cross-functional teams for project delivery</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 pb-24 border-b border-gray-200 dark:border-gray-800"
        >
          <h2 className="text-3xl font-serif font-medium mb-12 text-gray-900 dark:text-gray-100">
            Research & Academic Projects
          </h2>

          <div className="space-y-12">
            {academicProjects.map((project, _index) => (
              <div key={project.id}>
                <h3 className="text-xl font-serif font-medium text-gray-900 dark:text-gray-100 mb-2">
                  {project.title}
                </h3>
                {project.award && (
                  <p className="text-gray-600 dark:text-gray-400 italic mb-4">
                    {project.award}
                  </p>
                )}
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
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
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-serif font-medium mb-8 text-gray-900 dark:text-gray-100">
            Contact
          </h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-400">
            <p>
              <a 
                href="mailto:mathis.dumont@example.com"
                className="hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
              >
                mathis.dumont@example.com
              </a>
            </p>
            <div className="flex gap-8 pt-4">
              <a
                href="https://github.com/mathisdumont"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-sans hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
              >
                GitHub →
              </a>
              <a
                href="https://linkedin.com/in/mathis-dumont"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-sans hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
              >
                LinkedIn →
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
