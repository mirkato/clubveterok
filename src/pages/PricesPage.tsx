import Layout from '../components/layout/Layout';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/ui/PageHeader';
import Container from '../components/layout/Container';

const PricesPage: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <title>Цены на занятия в детском клубе Ветерок в Каменке</title>
        <meta name="description" content="Стоимость занятий в детском клубе Ветерок в Каменке. Пробные занятия, абонементы, разовые посещения. Гибкие тарифы для детей 3-16 лет." />
      </Helmet>
      <PageHeader
        title="Стоимость встреч"
        subtitle="Прозрачные цены и тарифы"
        description="Выберите подходящий формат участия для вашего ребёнка"
        bgColor="brand-orange"
      />
      
      <Container className="py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="text-center mb-8">
              <div className="text-5xl mb-4">💰</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Страница цен обновляется
              </h2>
              <p className="text-gray-600">
                Мы готовим для вас подробную информацию о тарифах, пакетах и акциях.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {[
                { title: 'Пробное занятие', price: 'от 300 руб.', desc: 'Знакомство с клубом' },
                { title: 'Месячный абонемент', price: 'от 2 400 ₽', desc: 'На 1 направление' },
                { title: 'Разовые мастер-классы', price: 'от 300 ₽', desc: 'На все направления' }
               ].map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 text-center hover:border-brand-blue transition-colors">
                  <h3 className="font-bold text-lg text-gray-800 mb-2">{item.title}</h3>
                  <div className="text-2xl font-bold text-brand-blue mb-2">{item.price}</div>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default PricesPage;