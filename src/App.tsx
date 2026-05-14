import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { VisionMission } from './components/VisionMission';
import { OrganogramLanding } from './components/OrganogramLanding';
import { Programs } from './components/Programs';
import { NewsGrid } from './components/NewsGrid';
import { Footer } from './components/Footer';
import { Sejarah } from './components/Sejarah';
import { Organogram } from './components/sections/Organogram/Organogram';

function LandingPage() {
  return (
    <main>
      <Hero />
      <About />
      <VisionMission />
      <OrganogramLanding />
      <Programs />
      <NewsGrid />
    </main>
  );
}

export default function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sejarah" element={<Sejarah />} />
          <Route path="/organogram" element={<Organogram />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
