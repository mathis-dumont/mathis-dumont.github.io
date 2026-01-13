import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-8 py-32">
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
  );
}
