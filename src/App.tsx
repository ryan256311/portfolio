import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './sections/Home';
import Works from './sections/Works';
import About from './sections/About';
import WorkDetail from './sections/WorkDetail';
import Preloader from './components/Preloader'; // Import the Preloader component

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [workId, setWorkId] = useState<number | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const parts = hash.split('/');
      if (parts[0] === 'works' && parts.length > 1) {
        setCurrentView('work-detail');
        setWorkId(parseInt(parts[1], 10));
      } else {
        setCurrentView(hash || 'home');
        setWorkId(null);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initial check
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderView = () => {
    switch (currentView) {
      case 'works':
        return <Works />;
      case 'about':
        return <About />;
      case 'work-detail':
        return workId ? <WorkDetail id={workId} /> : <Works />;
      default:
        return <Home />;
    }
  };

  return (
    <div className={`bg-main-background min-h-screen text-main-text font-sans ${currentView === 'home' ? 'h-full overflow-hidden' : ''}`}>
      <div className="home-button-wrapper">
        <div className="home-button" onClick={() => window.location.href = '#/'}></div> {/* Moved Home button here */}
      </div>
      <Preloader /> {/* Render the Preloader component */}
      <Header /> {/* Moved Header here for full width */}
      <div className="max-w-screen-xl mx-auto px-8 py-0 text-center">
        <main>
          {renderView()}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
