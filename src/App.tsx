import Navigation from './components/Navigation';
import SinglePageHome from './pages/SinglePageHome';

function App() {
  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg transition-colors">
      <Navigation />
      <SinglePageHome />
      
      <footer className="py-16 px-8 border-t border-light-border dark:border-dark-border">
        <div className="max-w-4xl mx-auto text-center text-light-muted dark:text-dark-muted">
          <p className="text-sm font-sans">
            © 2026 Mathis Dumont
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
