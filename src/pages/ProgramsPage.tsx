import Layout from '../components/layout/Layout';
// src/pages/ProgramsPage.tsx
import React from 'react';
import Container from '../components/layout/Container';
import PageHeader from '../components/ui/PageHeader';
import ProgramCategory from '../components/sections/programs/ProgramCard';
import { programCategories } from '../data/programs-data'; // Массив данных

const ProgramsPage: React.FC = () => {
  return (
    <Layout>
      <PageHeader
        title="Все активности клуба"
        subtitle="Выберите направление, которое понравится вашему ребёнку. Каждая встреча — это творчество, игра и новые друзья."
        bgColor="brand-blue"
      />
      
      <Container className="py-12">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Направления по интересам
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            В клубе «Ветерок» мы создали мастерские, где дети и подростки могут пробовать себя в разных активностях, 
            находить увлечения и развиваться через игру.
          </p>
        </div>
        <div className="space-y-16">
          {programCategories.map((category) => (
            <ProgramCategory
              key={category.id}
              title={category.title}
              icon={category.icon}
              description={category.description}
              programs={category.programs}
              color={category.color}
            />
          ))}
        </div>
    
        {/* CTA-секция */}
        <div className="mt-20 bg-gradient-to-r from-brand-blue to-brand-green rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Запишитесь на первую встречу — она бесплатная!
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Приходите, познакомьтесь с наставниками и пространством, чтобы понять, 
            какая активность подходит именно вашему ребёнку.
          </p>
          <a 
            href="/try-free" 
            className="inline-flex items-center bg-white text-brand-blue hover:bg-gray-100 font-bold px-8 py-3 rounded-lg text-lg transition-colors"
          >
            Записаться на пробную встречу
          </a>
        </div>
      </Container>
    </Layout>
  );
};

export default ProgramsPage;