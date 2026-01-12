import { motion } from 'framer-motion';
import { skills, currentlyLearning } from '../data/projects';

export default function AboutPage() {
  const skillCategories = [
    { title: "AI & LLMs", items: skills.ai },
    { title: "ML & Data", items: skills.ml },
    { title: "Engineering", items: skills.engineering },
    { title: "Frontend", items: skills.frontend },
  ];

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
            About
          </h1>
        </motion.div>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 pb-24 border-b border-gray-200 dark:border-gray-800"
        >
          <h2 className="text-3xl font-serif font-medium mb-8 text-gray-900 dark:text-gray-100">
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
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 pb-24 border-b border-gray-200 dark:border-gray-800"
        >
          <h2 className="text-3xl font-serif font-medium mb-12 text-gray-900 dark:text-gray-100">
            Expertise
          </h2>

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
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 pb-24 border-b border-gray-200 dark:border-gray-800"
        >
          <h2 className="text-3xl font-serif font-medium mb-12 text-gray-900 dark:text-gray-100">
            Currently Learning
          </h2>

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
