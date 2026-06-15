import { motion } from 'framer-motion';

const SOCIAL_LINKS = [
  { href: 'https://github.com/mathis-dumont',          label: 'GitHub',   external: true  },
  { href: 'https://linkedin.com/in/mathis-dumont',     label: 'LinkedIn', external: true  },
  { href: 'mailto:contact[dot]mathisdumont@gmail.com', label: 'Email',    external: false },
];

export default function MobileHero() {
  return (
    <section className="md:hidden pt-24 pb-12 px-6 border-b border-light-border dark:border-dark-border">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <div className="flex items-start gap-5 mb-6">
          <img
            src="/images/profile.jpg"
            alt="Mathis Dumont"
            className="w-16 h-16 border border-light-border dark:border-dark-border flex-shrink-0"
          />
          <h1 className="font-display font-light text-5xl leading-[1.05] text-light-text dark:text-dark-text">
            Mathis<br />Dumont
          </h1>
        </div>
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-light-muted dark:text-dark-muted mb-6">
          Data Scientist · Applied GenAI
        </p>
        <div className="flex gap-5">
          {SOCIAL_LINKS.map(({ href, label, external }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="font-mono text-[10px] uppercase tracking-[0.14em] text-light-muted dark:text-dark-muted hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-300"
            >
              {label}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}