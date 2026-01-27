// src/pages/HomePage.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '../components/layout/Layout';
import Hero from '../components/sections/Hero';
import Benefits from '../components/sections/Benefits';
import Programs from '../components/sections/Programs';
import Audience from '../components/sections/Audience';
import UpcomingEvents from '../components/sections/UpcomingEvents';
import MapSection from '../components/sections/MapSection';
import Testimonials from '../components/sections/Testimonials';
import CTASection from '../components/sections/CTASection';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <title>Детский клуб Ветерок - Развивающие занятия для детей 3-16 лет</title>
        <meta name="description" content="Детский клуб Ветерок в Каменке. Развивающие занятия, творчество, спорт и технологии для детей 3-16 лет. Запишитесь на пробное занятие!" />
      </Helmet>
      <Hero />
      <Benefits />
      <Programs />
      <Audience />
      <UpcomingEvents />
      <MapSection />
      <Testimonials />
      <CTASection />
    </Layout>
  );
};

export default HomePage;