import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Benefits from './components/sections/Benefits';
import Programs from './components/sections/Programs';
import Audience from './components/sections/Audience';
import MapSection from './components/sections/MapSection'; // <-- Добавляем импорт
import Testimonials from './components/sections/Testimonials';
import CTASection from './components/sections/CTASection';
import Footer from './components/layout/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Programs />
        <Audience />
        <MapSection /> {/* <-- Добавляем секцию карты здесь */}
        {/* Если у вас есть Testimonials и CTASection, добавьте их после */}
        <Testimonials />
        <CTASection /> 
      </main>
      <Footer />
    </div>
  );
};

export default App;