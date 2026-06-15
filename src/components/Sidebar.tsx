import { useEffect, useState } from 'react';
import DarkModeToggle from './DarkModeToggle';

const NAV_LINKS = [
  { href: '#about',      label: 'About',    id: 'about'      },
  { href: '#projects',   label: 'Work',     id: 'projects'   },
  { href: '#experience', label: 'CV',       id: 'experience' },
  { href: '#lab',        label: 'Lab',      id: 'lab'        },
];

const SOCIAL_LINKS = [
  { href: 'https://github.com/mathis-dumont',        label: 'GitHub',   external: true  },
  { href: 'https://linkedin.com/in/mathis-dumont',   label: 'LinkedIn', external: true  },
  { href: 'mailto:contact[dot]mathisdumont@gmail.com', label: 'Email', external: false },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((s) => observer.observe(s));
    return () => sections.forEach((s) => observer.unobserve(s));
  }, []);

  return (
    <aside className="hidden md:flex flex-col fixed left-0 top-0 bottom-0 w-60 bg-light-sidebar dark:bg-dark-sidebar border-r border-light-border dark:border-dark-border z-40">
      <div className="flex flex-col h-full px-8 py-10">

        {/* Identity */}
        <div className="mb-8">
          <img
            src="/images/profile.jpg"
            alt="Mathis Dumont"
            className="w-20 h-20 mb-6 border border-light-border dark:border-dark-border"
          />
          <h1 className="font-display font-light text-[1.75rem] leading-[1.1] text-light-text dark:text-dark-text">
            Mathis<br />Dumont
          </h1>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-light-muted dark:text-dark-muted mt-2 leading-relaxed">
            Data Scientist<br />Applied GenAI
          </p>
        </div>

        {/* Amber separator */}
        <div className="w-8 h-px bg-light-accent dark:bg-dark-accent mb-8" />

        {/* Nav */}
        <nav className="flex flex-col gap-1 flex-1">
          {NAV_LINKS.map(({ href, label, id }) => (
            <a
              key={id}
              href={href}
              className={`font-mono text-[11px] uppercase tracking-[0.16em] py-1.5 transition-colors duration-300 ${
                activeSection === id
                  ? 'text-light-accent dark:text-dark-accent'
                  : 'text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text'
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Social + toggle */}
        <div className="space-y-2">
          {SOCIAL_LINKS.map(({ href, label, external }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="block font-mono text-[10px] uppercase tracking-[0.14em] text-light-muted dark:text-dark-muted hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-300"
            >
              {label}
            </a>
          ))}
          <div className="pt-3">
            <DarkModeToggle />
          </div>
        </div>

      </div>
    </aside>
  );
}