import Layout from '../components/layout/Layout';
import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import Container from '../components/layout/Container';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const EventsPage: React.FC = () => {
  // Data for the birthday event
  const birthdayEvent = {
    title: "День рождения «Ветерка» и День открытых дверей!",
    date: "1 февраля (воскресенье)",
    time: "с 12:00 до 16:00",
    location: "с. Каменка, ул. Пионовая, 15 (КП «Сказка»)",
    description: "Целый год мы растем, играем и развиваемся вместе с вашими детьми, и это невероятное счастье! Приглашаем всю вашу семью на наш большой праздник — уютный День открытых дверей, где каждый почувствует себя как дома.",
  };

  return (
    <Layout>
      <PageHeader
        title="Мероприятия"
        subtitle="Календарь событий"
        description="Открытые уроки, мастер-классы, праздники и каникулярные программы"
        bgColor="brand-lightgreen"
      />
      <Container className="py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Предстоящие мероприятия
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-8 mb-12">
            {/* Birthday Event Card */}
            <Card hover={true} className="flex flex-col md:flex-row">
              <div className="md:w-1/3 mb-6 md:mb-0 flex items-center justify-center">
                <div className="gradient-brand rounded-xl w-48 h-48 flex items-center justify-center">
                  <span className="text-6xl">🎉</span>
                </div>
              </div>
              <div className="md:w-2/3 md:pl-8">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="bg-brand-orange text-white px-3 py-1 rounded-full text-sm font-medium">
                    Особое событие
                  </span>
                  <span className="bg-brand-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                    Открытые двери
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {birthdayEvent.title}
                </h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">📅</span>
                    <span className="text-gray-700 font-medium">{birthdayEvent.date}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">⏰</span>
                    <span className="text-gray-700">{birthdayEvent.time}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-3 mt-1">📍</span>
                    <span className="text-gray-700">{birthdayEvent.location}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">
                  {birthdayEvent.description}
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Button
                    variant="primary"
                    onClick={() => window.location.href = '/events/birthday'}
                  >
                    Подробнее о мероприятии
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => window.location.href = '/events/birthday#registration'}
                  >
                    Записаться на мастер-классы
                  </Button>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="text-center">
            <p className="text-gray-600 mb-6">
              Следите за анонсами, чтобы не пропустить другие интересные мероприятия клуба
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