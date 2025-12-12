import Layout from '../components/layout/Layout';
import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import Container from '../components/layout/Container';

const AccountPage: React.FC = () => {
  return (
    <Layout>
      <PageHeader
        title="Личный кабинет"
        subtitle="Для родителей"
        bgColor="brand-green"
      />
      <Container className="py-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-5xl mb-6">🔐</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Личный кабинет скоро будет доступен
          </h2>
          <p className="text-gray-600 mb-6">
            В личном кабинете вы сможете управлять расписанием ребёнка, 
            отслеживать посещения и оплачивать занятия.
          </p>
          <p className="text-gray-500 text-sm">
            О запуске функции мы сообщим в нашем Telegram-канале
          </p>
        </div>
      </Container>
    </Layout>
  );
};

export default AccountPage;