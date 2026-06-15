import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="flex items-center justify-center px-4 sm:px-8 pb-4 pt-40">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex flex-col sm:flex-row items-start gap-8 sm:gap-12 mb-12">
            <img
              src="/images/profile.jpg"
              alt="Mathis Dumont"
              className="w-24 h-24 sm:w-32 sm:h-32 border border-light-border dark:border-dark-border"
            />
            <div className="flex-1 min-w-0">
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif font-medium text-light-text dark:text-dark-text tracking-tight break-words mb-6">
                Mathis Dumont
              </h1>
              <div className="flex flex-wrap gap-6">
                <a
                  href="https://github.com/mathis-dumont"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light-text dark:text-dark-text hover:text-light-muted dark:hover:text-dark-muted transition-colors text-sm font-sans"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/mathis-dumont"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light-text dark:text-dark-text hover:text-light-muted dark:hover:text-dark-muted transition-colors text-sm font-sans"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:contact[dot]mathisdumont@gmail.com"
                  className="text-light-text dark:text-dark-text hover:text-light-muted dark:hover:text-dark-muted transition-colors text-sm font-sans"
                >
                  contact[dot]mathisdumont@gmail.com
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
