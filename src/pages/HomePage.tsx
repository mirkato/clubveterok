// src/pages/HomePage.tsx
import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/sections/Hero';
import Benefits from '../components/sections/Benefits';
import Programs from '../components/sections/Programs';
import Audience from '../components/sections/Audience';
import MapSection from '../components/sections/MapSection';
import Testimonials from '../components/sections/Testimonials';
import CTASection from '../components/sections/CTASection';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <Benefits />
      <Programs />
      <Audience />
      <MapSection />
      <Testimonials />
      <CTASection />
    </Layout>
  );
};

export default HomePage;