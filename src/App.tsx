import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Projects from './components/Projects';
import Resources from './components/Resources';
import Leaderboard from './components/Leaderboard';
import Contact from './components/Contact';
import Team from './components/Team';
import Footer from './components/Footer';
import AIBot from './components/AIBot';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <Navbar 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      
      <main className="container mx-auto px-4 pt-20">
        <section id="home" className={activeSection === 'home' ? 'block' : 'hidden'}>
          <Hero />
          <Team />
        </section>
        
        <section id="about" className={activeSection === 'about' ? 'block' : 'hidden'}>
          <About />
        </section>
        
        <section id="events" className={activeSection === 'events' ? 'block' : 'hidden'}>
          <Events />
        </section>
        
        <section id="projects" className={activeSection === 'projects' ? 'block' : 'hidden'}>
          <Projects />
        </section>
        
        <section id="resources" className={activeSection === 'resources' ? 'block' : 'hidden'}>
          <Resources />
        </section>
        
        <section id="leaderboard" className={activeSection === 'leaderboard' ? 'block' : 'hidden'}>
          <Leaderboard />
        </section>
        
        <section id="contact" className={activeSection === 'contact' ? 'block' : 'hidden'}>
          <Contact />
        </section>
      </main>

      <Footer />
      <AIBot />
    </div>
  );
}

export default App;