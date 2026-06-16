import { motion } from 'framer-motion';
import { useState } from 'react';

const EMAIL = 'contact.mathisdumont@gmail.com';

const SOCIAL_LINKS = [
  { href: 'https://github.com/mathis-dumont',      label: 'GitHub',   external: true  },
  { href: 'https://linkedin.com/in/mathis-dumont', label: 'LinkedIn', external: true  },
  { href: `mailto:${EMAIL}`,                       label: 'Email',    external: false },
];

// Masked line: text rises into place from behind its own clip. Calm, one-time.
function RevealLine({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        initial={{ y: '110%' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard?.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <section className="px-6 sm:px-10 pt-16 sm:pt-24 pb-16 sm:pb-24">
      <div className="grid md:grid-cols-[1fr_auto] gap-10 md:gap-14 items-end">
        {/* Name + thesis */}
        <div>
          <h1 className="font-display font-light text-ink text-[3.25rem] leading-[0.95] sm:text-[5rem] sm:leading-[0.92] tracking-[-0.01em]">
            <RevealLine>Mathis</RevealLine>
            <RevealLine delay={0.08}>Dumont</RevealLine>
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="mt-7 w-12 h-px bg-accent" />
            <p className="mt-6 font-body text-lg sm:text-xl text-ink leading-snug max-w-md">
              ML engineer. I take language models from a research idea to something running in production.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2">
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                Paris
              </span>
              <span className="hidden sm:block h-3 w-px bg-line" />
              <div className="flex gap-5">
                {SOCIAL_LINKS.map(({ href, label, external }) => {
                  const isEmail = href.startsWith('mailto:');
                  return (
                    <a
                      key={label}
                      href={href}
                      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      {...(isEmail ? { onClick: copyEmail } : {})}
                      className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted hover:text-accent transition-colors duration-300"
                    >
                      {isEmail && copied ? 'Copied ✓' : label}
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="order-first md:order-none"
        >
          <img
            src="/images/profile.jpg"
            alt="Mathis Dumont"
            className="w-36 sm:w-44 md:w-52 aspect-[4/5] object-cover object-top rounded-md border border-line shadow-[0_18px_40px_-24px_rgba(27,23,20,0.45)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
