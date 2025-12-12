import Layout from '../components/layout/Layout';
import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import Container from '../components/layout/Container';

const EventsPage: React.FC = () => {
  return (
    <Layout>
      <PageHeader
        title="Мероприятия"
        subtitle="Календарь событий"
        description="Открытые уроки, мастер-классы, праздники и каникулярные программы"
        bgColor="brand-lightgreen"
      />
      <Container className="py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <div className="text-5xl mb-4">🎪</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Календарь мероприятий
            </h2>
            <p className="text-gray-600 mb-6">
              Скоро здесь появится полный календарь событий клуба: мастер-классы, 
              дни рождения, тематические праздники и каникулярные программы.
            </p>
            <a 
              href="https://t.me/+E4OwQ9wH7tdkZTIy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-brand-blue text-white rounded-lg hover:bg-blue-600 font-medium"
            >
              Следить за анонсами в Telegram
            </a>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default EventsPage;