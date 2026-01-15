import { useEffect, useState } from 'react';
import DarkModeToggle from './DarkModeToggle';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-100px 0px -66% 0px',
        threshold: 0,
      }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const isActive = (sectionId: string) => activeSection === sectionId;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-dark-bg border-b border-gray-100 dark:border-dark-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-4 sm:py-6">
        <div className="flex justify-between items-center">
          <a
            href="#"
            className="text-lg sm:text-xl font-serif font-medium text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            MD
          </a>
          
          <div className="flex items-center gap-4 sm:gap-8">
            <div className="hidden md:flex gap-8">
              <a
                href="#about"
                className={`text-xs uppercase tracking-widest transition-colors font-sans ${
                  isActive('about')
                    ? 'text-gray-900 dark:text-gray-100'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
                }`}
              >
                About
              </a>
              <a
                href="#experience"
                className={`text-xs uppercase tracking-widest transition-colors font-sans ${
                  isActive('experience')
                    ? 'text-gray-900 dark:text-gray-100'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
                }`}
              >
                CV
              </a>
              <a
                href="#projects"
                className={`text-xs uppercase tracking-widest transition-colors font-sans ${
                  isActive('projects')
                    ? 'text-gray-900 dark:text-gray-100'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
                }`}
              >
                Projects
              </a>
              <a
                href="#lab"
                className={`text-xs uppercase tracking-widest transition-colors font-sans ${
                  isActive('lab')
                    ? 'text-gray-900 dark:text-gray-100'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
                }`}
              >
                Lab
              </a>
            </div>
            <div className="md:hidden flex gap-3 text-xs uppercase tracking-widest font-sans">
              <a href="#about" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">About</a>
              <a href="#experience" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">CV</a>
              <a href="#projects" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">Projects</a>
            </div>
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
