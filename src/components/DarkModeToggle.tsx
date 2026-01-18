import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Force dark mode by default unless user has explicitly chosen light
    let isDarkMode = true;
    if (localStorage.theme === 'light') {
      isDarkMode = false;
    }
    setIsDark(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full hover:bg-light-border dark:hover:bg-dark-border transition-colors"
      aria-label="Toggle dark mode"
    >
      {isDark ? (
        <Sun className="text-light-text dark:text-dark-text" size={18} />
      ) : (
        <Moon className="text-light-text dark:text-dark-text" size={18} />
      )}
    </button>
  );
}
