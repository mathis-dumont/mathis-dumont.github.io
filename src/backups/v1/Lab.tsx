import { motion } from 'framer-motion';
import { currentlyLearning } from '../data/projects';
import { BookOpen } from 'lucide-react';

export default function Lab() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
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

          <div className="space-y-6">
            {currentlyLearning.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-l-4 border-gray-300 dark:border-gray-600 pl-6"
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
