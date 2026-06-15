import DarkModeToggle from './DarkModeToggle';

export default function MobileHeader() {
  return (
    <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-light-bg/90 dark:bg-dark-bg/90 backdrop-blur-sm border-b border-light-border dark:border-dark-border">
      <div className="px-6 py-4 flex justify-between items-center">
        <a
          href="#"
          className="font-display font-light text-xl text-light-text dark:text-dark-text"
        >
          MD
        </a>
        <DarkModeToggle />
      </div>
    </header>
  );
}