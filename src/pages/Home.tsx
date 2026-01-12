import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects, skills, currentlyLearning } from '../data/projects';
import { getProjectSlug } from '../data/projectSlugs';

export default function Home() {
  const featuredProjects = projects.filter(p => p.category === 'featured').slice(0, 3);
  
  const skillCategories = [
    { title: "AI & LLMs", items: skills.ai },
    { title: "ML & Data", items: skills.ml },
    { title: "Engineering", items: skills.engineering },
    { title: "Frontend", items: skills.frontend },
  ];

  return (
    <>
      <section className="min-h-screen flex items-center justify-center px-8 py-32 pt-40">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-8xl font-serif font-medium mb-12 text-gray-900 dark:text-gray-100 tracking-tight">
              Mathis Dumont
            </h1>
            
            <div className="space-y-8 text-lg md:text-xl leading-loose">
              <p className="text-gray-700 dark:text-gray-300">
                Bridging the gap between statistical rigor and industrial engineering.
              </p>

              <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
                Dual-degree student at ENSAE Paris and Arts & Métiers, exploring agentic 
                frameworks, advanced RAG architectures, and production-ready machine learning systems.
              </p>
            </div>

            <div className="flex gap-8 mt-16 pt-12 border-t border-gray-200 dark:border-gray-700">
              <a
                href="https://github.com/mathisdumont"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors text-sm font-sans"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/mathis-dumont"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors text-sm font-sans"
              >
                LinkedIn
              </a>
              <a
                href="mailto:mathis.dumont@example.com"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors text-sm font-sans"
              >
                Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-32 px-8 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-serif font-medium mb-8 text-gray-900 dark:text-gray-100">
              Background
            </h2>
            <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-loose text-lg">
              <p>
                I'm a dual-degree student pursuing studies at ENSAE Paris and Arts & Métiers, 
                bridging the gap between statistical rigor and industrial engineering.
              </p>
              <p>
                My work focuses on building production-ready AI systems, exploring agentic frameworks, 
                and advancing retrieval-augmented generation architectures. I'm particularly interested 
                in the intersection of theoretical foundations and practical implementation.
              </p>
              <p>
                Beyond technical work, I served as Head of Sales at a Junior Enterprise, developing 
                skills in leadership, client relations, and project management.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-32 px-8 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-serif font-medium mb-16 text-gray-900 dark:text-gray-100"
          >
            Expertise
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-serif font-medium mb-6 text-gray-900 dark:text-gray-100">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.items.map((skill) => (
                    <li
                      key={skill}
                      className="text-gray-600 dark:text-gray-400 leading-relaxed"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-8 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-serif font-medium mb-16 text-gray-900 dark:text-gray-100"
          >
            Currently Learning
          </motion.h2>

          <div className="space-y-8">
            {currentlyLearning.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-serif text-gray-900 dark:text-gray-100 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 font-sans text-sm">
                  {item.source}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-8 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-serif font-medium mb-6 text-gray-900 dark:text-gray-100">
              Featured Work
            </h2>
            <Link 
              to="/projects"
              className="text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 transition-colors text-sm font-sans"
            >
              View all projects →
            </Link>
          </motion.div>

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
                <p className="text-gray-600 dark:text-gray-400 leading-loose mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.tags.slice(0, 4).map((tag) => (
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
      </section>
    </>
  );
}
