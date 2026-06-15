import { useEffect, useState } from 'react';
import DarkModeToggle from './DarkModeToggle';

const NAV_LINKS = [
  { href: '#about', label: 'About', id: 'about' },
  { href: '#projects', label: 'Projects', id: 'projects' },
  { href: '#experience', label: 'CV', id: 'experience' },
  { href: '#lab', label: 'Lab', id: 'lab' },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-100px 0px -66% 0px', threshold: 0 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-light-bg dark:bg-dark-bg border-b border-light-border dark:border-dark-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-4 sm:py-6">
        <div className="flex justify-between items-center">
          <a
            href="#"
            className="text-lg sm:text-xl font-serif font-medium text-light-text dark:text-dark-text hover:text-light-muted dark:hover:text-dark-muted transition-colors"
          >
            MD
          </a>

          <div className="flex items-center gap-4 sm:gap-8">
            <div className="hidden md:flex gap-8">
              {NAV_LINKS.map(({ href, label, id }) => (
                <a
                  key={id}
                  href={href}
                  className={`text-xs uppercase tracking-widest transition-colors font-sans ${
                    activeSection === id
                      ? 'text-light-text dark:text-dark-text'
                      : 'text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text'
                  }`}
                >
                  {label}
                </a>
              ))}
            </div>
            <div className="md:hidden flex gap-3 text-xs uppercase tracking-widest font-sans">
              {NAV_LINKS.slice(0, 3).map(({ href, label, id }) => (
                <a
                  key={id}
                  href={href}
                  className="text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text"
                >
                  {label}
                </a>
              ))}
            </div>
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
