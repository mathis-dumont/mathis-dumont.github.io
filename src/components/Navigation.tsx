import { useEffect, useState } from 'react';
import DarkModeToggle from './DarkModeToggle';

const NAV_LINKS = [
  { href: '#about',      label: 'About',  id: 'about'      },
  { href: '#projects',   label: 'Work',   id: 'projects'   },
  { href: '#experience', label: 'CV',     id: 'experience' },
  { href: '#lab',        label: 'Lab',    id: 'lab'        },
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
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((s) => observer.observe(s));
    return () => sections.forEach((s) => observer.unobserve(s));
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-paper/80 backdrop-blur-md border-b border-line">
      <div className="mx-auto max-w-5xl px-6 sm:px-10 h-14 flex items-center justify-between">
        <a href="#top" className="font-display text-lg text-ink leading-none hover:text-accent transition-colors duration-300">
          Mathis Dumont
        </a>
        <nav className="flex items-center gap-6 sm:gap-8">
          {NAV_LINKS.map(({ href, label, id }) => {
            const active = activeSection === id;
            return (
              <a
                key={id}
                href={href}
                className={`relative text-[13px] tracking-wide py-1 transition-colors duration-300 ${
                  active ? 'text-ink' : 'text-muted hover:text-ink'
                }`}
              >
                {label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-accent transition-all duration-300 ${
                    active ? 'w-full' : 'w-0'
                  }`}
                />
              </a>
            );
          })}
          <span className="h-3 w-px bg-line" />
          <DarkModeToggle />
        </nav>
      </div>
    </header>
  );
}
