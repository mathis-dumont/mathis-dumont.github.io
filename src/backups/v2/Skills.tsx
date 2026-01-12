import { motion } from 'framer-motion';
import { skills } from '../data/projects';
import { Sparkles, Database, Code2, Layout } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    { title: "AI & LLMs", items: skills.ai, icon: Sparkles, gridClass: "md:col-span-2 md:row-span-2" },
    { title: "ML & Data", items: skills.ml, icon: Database, gridClass: "md:col-span-2 md:row-span-1" },
    { title: "Engineering", items: skills.engineering, icon: Code2, gridClass: "md:col-span-2 md:row-span-1" },
    { title: "Frontend", items: skills.frontend, icon: Layout, gridClass: "md:col-span-2 md:row-span-1" },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-serif font-bold mb-12 text-gray-900 dark:text-white"
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className={`bg-white dark:bg-dark-surface border border-gray-200 dark:border-dark-border rounded-xl p-6 hover:shadow-lg dark:hover:shadow-2xl transition-all hover:scale-[1.02] ${category.gridClass}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="text-gray-700 dark:text-gray-300" size={24} />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
