import { Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Services from './sections/Services';
import About from './sections/About';
import WhyUs from './sections/WhyUs';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Datenschutz from './pages/Datenschutz';
import Impressum from './pages/Impressum';
import AGB from './pages/AGB';

function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Services />
        <About />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/agb" element={<AGB />} />
      </Routes>
      <Analytics />
    </>
  );
}

export default App;
