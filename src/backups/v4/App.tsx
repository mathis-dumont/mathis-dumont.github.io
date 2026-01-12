import Navigation from './components/Navigation';
import SinglePageHome from './pages/SinglePageHome';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg transition-colors">
      <Navigation />
      <SinglePageHome />
      
      <footer className="py-16 px-8 border-t border-gray-900 dark:border-gray-100">
        <div className="max-w-4xl mx-auto text-center text-gray-500 dark:text-gray-500">
          <p className="text-sm font-sans">
            © 2026 Mathis Dumont
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
