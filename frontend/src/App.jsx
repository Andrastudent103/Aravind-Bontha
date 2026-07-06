import React from 'react';
import Hero from './components/Hero';
import ItBerries from './components/ItBerries';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Education from './components/Education';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app-container">
      <Hero />
      <ItBerries />
      <About />
      <Education />
      <Certifications />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
