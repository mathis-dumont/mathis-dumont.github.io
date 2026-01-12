import { motion } from 'framer-motion';
import { currentlyLearning } from '../data/projects';
import { BookOpen } from 'lucide-react';

export default function Lab() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="text-gray-700 dark:text-gray-300" size={32} />
            <h2 className="text-4xl font-serif font-bold text-gray-900 dark:text-white">
              Currently Learning
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {currentlyLearning.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-dark-surface border border-gray-200 dark:border-dark-border rounded-xl p-6 hover:shadow-lg dark:hover:shadow-2xl transition-all hover:scale-[1.02]"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {item.source} • <span className="italic">{item.progress}</span>
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
