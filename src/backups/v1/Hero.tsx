import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-gray-900 dark:text-white">
            Mathis Dumont
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Bridging the gap between <span className="font-semibold text-gray-900 dark:text-white">Statistical Rigor</span> (ENSAE Paris) 
            and <span className="font-semibold text-gray-900 dark:text-white">Industrial Engineering</span> (Arts & Métiers)
          </p>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl">
            Dual-degree student passionate about AI systems, MLOps, and building production-ready 
            machine learning solutions. Currently exploring agentic frameworks and advanced RAG architectures.
          </p>

          <div className="flex gap-6">
            <a
              href="https://github.com/mathisdumont"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Github size={24} />
              <span className="font-medium">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/mathis-dumont"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Linkedin size={24} />
              <span className="font-medium">LinkedIn</span>
            </a>
            <a
              href="mailto:mathis.dumont@example.com"
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Mail size={24} />
              <span className="font-medium">Email</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
