import { motion } from 'framer-motion';
import { currentlyLearning } from '../data/projects';

export default function Lab() {
  return (
    <section className="py-32 px-8 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-serif font-medium mb-16 text-gray-900 dark:text-gray-100"
        >
          Currently Learning
        </motion.h2>

        <div className="space-y-12">
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
  );
}
