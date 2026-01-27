import Layout from '../components/layout/Layout';
import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import Container from '../components/layout/Container';
import { Helmet } from 'react-helmet-async';

const TeachersPage: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <title>Наставники детского клуба «Ветерок» в Каменке</title>
        <meta name="description" content="Познакомьтесь с командой опытных наставников детского клуба «Ветерок» в Каменке. Узнайте об их подходе к работе с детьми." />
      </Helmet>
      <PageHeader
        title="Наставники"
        subtitle="Команда клуба «Ветерок»"
        description="Опытные и увлечённые своим делом наставники, которые создают атмосферу творчества и дружбы"
        bgColor="brand-blue"
      />
      <Container className="py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <div className="text-5xl mb-4">👨‍🏫</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Знакомство с наставниками
            </h2>
            <p className="text-gray-600 mb-6">
              На этой странице скоро появятся истории каждого наставника, их опыт, 
              подход к работе с детьми и направления, которые они ведут.
            </p>
            <p className="text-gray-500 text-sm">
              Приходите познакомиться лично на пробную встречу!
            </p>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default TeachersPage;