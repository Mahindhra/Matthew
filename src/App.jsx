import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Internships from './sections/Internships';
import Projects from './sections/Projects';
import Certifications from './sections/Certifications';
import Achievements from './sections/Achievements';
import Leadership from './sections/Leadership';
import Interests from './sections/Interests';
import Contact from './sections/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Sticky Clean Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Internships />
        <Projects />
        <Certifications />
        <Achievements />
        <Leadership />
        <Interests />
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* Back to top button */}
      <BackToTop />
    </div>
  );
}
