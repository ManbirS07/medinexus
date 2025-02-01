import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import MainSection from './components/Mainsection.jsx';
import CovidSection from './components/covidsection.jsx';
import './assets/css/style.css';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <MainSection />
      <CovidSection />
    </>
  );
}

export default App;