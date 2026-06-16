import { MotionConfig } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import SinglePageHome from './pages/SinglePageHome';

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div id="top" className="min-h-screen bg-paper text-ink">
        <Navigation />
        <div className="relative z-10 mx-auto max-w-5xl">
          <main>
            <Hero />
            <SinglePageHome />
          </main>
          <footer className="border-t border-line px-6 sm:px-10 py-6 flex justify-between items-center">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
              © 2026 Mathis Dumont
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
              Paris
            </span>
          </footer>
        </div>
      </div>
    </MotionConfig>
  );
}

export default App;
