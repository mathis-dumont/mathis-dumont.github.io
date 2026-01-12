import { motion } from 'framer-motion';
import { skills } from '../data/projects';

export default function Skills() {
  const skillCategories = [
    { title: "AI & LLMs", items: skills.ai },
    { title: "ML & Data", items: skills.ml },
    { title: "Engineering", items: skills.engineering },
    { title: "Frontend", items: skills.frontend },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-serif font-bold mb-12 text-gray-900 dark:text-white"
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.items.map((skill) => (
                  <li
                    key={skill}
                    className="text-gray-600 dark:text-gray-400 text-sm"
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
  );
}
