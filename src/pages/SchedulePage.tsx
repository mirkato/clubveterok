import Layout from '../components/layout/Layout';
import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import Container from '../components/layout/Container';

const SchedulePage: React.FC = () => {
  return (
    <Layout>
      <PageHeader
        title="Расписание активностей"
        subtitle="Планируйте встречи вашего ребёнка"
        description="Актуальное расписание всех мастерских и встреч в клубе «Ветерок»"
        bgColor="brand-green"
      />
      
      <Container className="py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <div className="text-5xl mb-4">📅</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Расписание в разработке
            </h2>
            <p className="text-gray-600 mb-6">
              Скоро здесь появится интерактивное расписание с фильтрами по возрасту, 
              направлениям и дням недели. Вы сможете видеть свободные места в группах!
            </p>
            <div className="inline-block px-4 py-2 bg-brand-blue/10 text-brand-blue rounded-full text-sm font-medium">
              Скоро будет доступно
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default SchedulePage;