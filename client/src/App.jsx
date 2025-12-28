import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import { DataProvider } from './context/DataContext';

function AppContent() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
        } />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <DataProvider>
        <ThemeProvider>
          <div className="App">
            <AppContent />
          </div>
        </ThemeProvider>
      </DataProvider>
    </Router>
  );
}

export default App;
