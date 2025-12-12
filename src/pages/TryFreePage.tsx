import Layout from '../components/layout/Layout';
import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import Container from '../components/layout/Container';

const TryFreePage: React.FC = () => {
  return (
    <Layout>
      <PageHeader
        title="Пробное занятие"
        subtitle="Бесплатно и без обязательств"
        description="Запишитесь на первую встречу, чтобы познакомиться с клубом и выбрать активность"
        bgColor="brand-blue"
      />
      <Container className="py-12">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="text-center mb-8">
              <div className="text-5xl mb-4">🎯</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Форма записи скоро здесь
              </h2>
              <p className="text-gray-600">
                Вы сможете выбрать направление, дату и время для пробной встречи.
              </p>
            </div>
            <div className="space-y-4">
              <div className="p-4 border border-gray-200 rounded-lg">
                <p className="font-medium text-gray-800">А пока вы можете:</p>
              </div>
              <a 
                href="tel:+79199259765" 
                className="block p-4 border border-brand-blue rounded-lg text-center hover:bg-blue-50 transition-colors"
              >
                <div className="font-bold text-lg text-brand-blue mb-1">Позвонить</div>
                <div className="text-gray-600">+7 (919) 925-97-65</div>
              </a>
              
              <a 
                href="https://t.me/VeterokSkaska" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block p-4 border border-green-500 rounded-lg text-center hover:bg-green-50 transition-colors"
              >
                <div className="font-bold text-lg text-green-600 mb-1">Написать в Telegram</div>
                <div className="text-gray-600">@VeterokSkaska</div>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default TryFreePage;