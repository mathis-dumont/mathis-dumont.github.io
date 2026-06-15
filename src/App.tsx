import Sidebar from './components/Sidebar';
import MobileHeader from './components/Navigation';
import SinglePageHome from './pages/SinglePageHome';

function App() {
  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg transition-colors duration-500 flex">
      <Sidebar />

      <div className="flex-1 md:ml-60">
        <MobileHeader />
        <main>
          <SinglePageHome />
        </main>
        <footer className="border-t border-light-border dark:border-dark-border px-8 sm:px-14 py-6 flex justify-between items-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-light-muted dark:text-dark-muted">
            © 2026 Mathis Dumont
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-light-muted dark:text-dark-muted">
            Paris
          </span>
        </footer>
      </div>
    </div>
  );
}

export default App;