import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ClientTypes from './components/ClientTypes';
import Companies from './components/Companies';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    document.title = "James Williams -Developer &  Designer";
  }, []);

  return (
    <div className="bg-black min-h-screen text-white">
      <Header />
      <main>
        <Hero />
        <ClientTypes />
        <Companies />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;