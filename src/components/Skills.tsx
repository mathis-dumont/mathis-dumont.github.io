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
    <section className="py-32 px-8 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-serif font-medium mb-20 text-gray-900 dark:text-gray-100"
        >
          Expertise
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
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
  );
}
