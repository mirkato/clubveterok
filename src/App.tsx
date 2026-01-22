// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Импорт страниц
import HomePage from './pages/HomePage';
import ProgramsPage from './pages/ProgramsPage';
import SchedulePage from './pages/SchedulePage';
import PricesPage from './pages/PricesPage';
import EventsPage from './pages/EventsPage';
import TeachersPage from './pages/TeachersPage';
import AboutPage from './pages/AboutPage';
import ContactsPage from './pages/ContactsPage';
import BlogPage from './pages/BlogPage';
import AccountPage from './pages/AccountPage';
import TryFreePage from './pages/TryFreePage';
import CybertonicPage from './pages/CybertonicPage';
import ProgramCategoryPage from './pages/ProgramCategoryPage';
import ProgramDetailPage from './pages/ProgramDetailPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import SitemapPage from './pages/SitemapPage';
import NotFoundPage from './pages/NotFoundPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Основные страницы */}
        <Route path="/" element={<HomePage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/programs/:categoryId" element={<ProgramCategoryPage />} />
        <Route path="/programs/:categoryId/:programId" element={<ProgramDetailPage />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/prices" element={<PricesPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/teachers" element={<TeachersPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        
        {/* Дополнительные страницы */}
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/try-free" element={<TryFreePage />} />
        
        {/* Специальные страницы */}
        <Route path="/new-residents" element={<TryFreePage />} />
        <Route path="/doubts" element={<TryFreePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/sitemap" element={<SitemapPage />} />
        
        {/* Страница 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;