import React from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  eventDate: Date;
  tags?: string[];
}

const UpcomingEvents: React.FC = () => {
  // Calculate days until event
  const calculateDaysUntil = (eventDate: Date): number => {
    const today = new Date();
    const timeDiff = eventDate.getTime() - today.getTime();
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
  };

  // Sample event data - in a real app this would come from a data source
  const events: Event[] = [
    {
      id: 'birthday',
      title: "День рождения «Ветерка» и День открытых дверей!",
      date: "1 февраля (воскресенье)",
      time: "с 12:00 до 16:00",
      location: "с. Каменка, ул. Пионовая, 15 (КП «Сказка»)",
      description: "Целый год мы растем, играем и развиваемся вместе с вашими детьми, и это невероятное счастье! Приглашаем всю вашу семью на наш большой праздник — уютный День открытых дверей, где каждый почувствует себя как дома.",
      eventDate: new Date('2026-02-01'),
      tags: ['Особое событие', 'Открытые двери']
    },
    {
      id: 'rattan',
      title: "Мастер-класс «Магия ротанга»",
      date: "31 января 2026 г.",
      time: "с 12:00 до 17:00",
      location: "Детский клуб «Ветерок», КП «Сказка», ул. Пионовая, 15",
      description: "Освойте древнее искусство плетения из натурального материала. Создайте своими руками уникальный предмет интерьера и проведите время в творческой атмосфере.",
      eventDate: new Date('2026-01-31'),
      tags: ['Мастер-класс', 'Для взрослых']
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Предстоящие{' '}
            <span className="bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">
              мероприятия
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Не пропустите интересные события клуба
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => {
            const daysUntil = calculateDaysUntil(event.eventDate);
            return (
              <Card key={event.id} hover={true} className="flex flex-col h-full">
                <div className="flex-grow">
                  {/* Event tags */}
                  {event.tags && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {event.tags.map((tag, index) => (
                        <span 
                          key={index} 
                          className="bg-brand-orange text-white px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center">
                      <span className="text-xl mr-2">📅</span>
                      <span className="text-gray-700 font-medium">{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-xl mr-2">⏰</span>
                      <span className="text-gray-700">{event.time}</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-xl mr-2 mt-1">📍</span>
                      <span className="text-gray-700">{event.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    {event.description}
                  </p>
                </div>
                
                {/* Days counter */}
                <div className="mb-6">
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-brand-blue/10 to-brand-green/10 rounded-full">
                    <span className="text-lg mr-2">⏳</span>
                    <span className="font-bold text-gray-800">
                      {daysUntil > 0 
                        ? `Осталось ${daysUntil} ${daysUntil === 1 ? 'день' : daysUntil < 5 ? 'дня' : 'дней'}` 
                        : daysUntil === 0 
                          ? 'Сегодня!' 
                          : 'Событие прошло'}
                    </span>
                  </div>
                </div>
                
                <div className="mt-auto">
                  <Button
                    variant="primary"
                    onClick={() => window.location.href = `/events/${event.id}`}
                    className="w-full"
                  >
                    Подробнее о мероприятии
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-10">
          <a 
            href="/events" 
            className="inline-flex items-center text-brand-blue hover:text-brand-green font-semibold"
          >
            Смотреть все мероприятия
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;