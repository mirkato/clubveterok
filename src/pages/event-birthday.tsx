// Файл: src/pages/event-birthday.tsx (обновленная версия)
import Layout from '../components/layout/Layout';
import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import Container from '../components/layout/Container';
import EventRegistrationForm from '../components/forms/EventRegistrationForm';

const EventBirthdayPage: React.FC = () => {
  const eventData = {
    title: "День рождения «Ветерка» и День открытых дверей!",
    subtitle: "Отмечаем наш первый годик вместе с вами!",
    description: "Целый год мы растем, играем и развиваемся вместе с вашими детьми, и это невероятное счастье! Приглашаем всю вашу семью на наш большой праздник — уютный День открытых дверей, где каждый почувствует себя как дома.",
    date: "1 февраля (воскресенье)",
    time: "с 12:00 до 16:00",
    location: "с. Каменка, ул. Пионовая, 15 (КП «Сказка»)",
    videoUrl: "https://vk.com/video-229222504_456239040",
  };

  // Данные для формы
  const workshopsForForm = [
    { id: 'wool-12', time: '12:00 - 13:00', title: 'Мастер-класс «Магия шерсти»', emoji: '🧶' },
    { id: 'speech-12', time: '12:00 - 13:00', title: 'Консультация логопеда', emoji: '🗣' },
    { id: 'paint-12', time: '12:00 - 13:00', title: 'Акварель «Живые краски»', emoji: '🎨' },
    { id: 'learning-13', time: '13:00 - 14:00', title: 'Формула успешного обучения', emoji: '🧠' },
    { id: 'english-13', time: '13:00 - 14:00', title: 'Английский: ликвидация сложностей', emoji: '🇬🇧' },
    { id: 'karate-13', time: '13:00 - 14:00', title: 'Каратэ для малышей', emoji: '🥋' },
    { id: 'school-14', time: '14:00 - 15:00', title: 'Готовимся к школе правильно', emoji: '📚' },
    { id: 'digital-14', time: '14:00 - 15:00', title: 'Путешествие в цифровое будущее', emoji: '💻' },
    { id: 'defile-14', time: '14:00 - 15:00', title: 'Искусство дефиле', emoji: '👗' },
  ];

  const workshops = [
    {
      time: "12:00 - 13:00",
      sessions: [
        {
          emoji: "🧶",
          title: "Мастер-класс «Магия шерсти: валяние для начинающих»",
          description: "Создайте уютную игрушку или украшение из шерсти. Успокаивающее ремесло, которое развивает мелкую моторику.",
          by: "Арт-ателье «Мастерская волшебных ремесел»",
          color: "card-orange"
        },
        {
          emoji: "🗣",
          title: "Групповая консультация с логопедом «Игра — это серьёзно»",
          description: "Узнайте, как через простые игры дома можно улучшить речь ребенка и сделать общение легким и радостным.",
          by: "",
          color: "card-blue"
        },
        {
          emoji: "🎨",
          title: "Мастер-класс по акварели «Живые краски»",
          description: "Первое знакомство с красками и цветом. Поможет ребенку преодолеть страх перед чистым листом.",
          by: "Арт-студия «Мелодия холста»",
          color: "card-green"
        }
      ]
    },
    {
      time: "13:00 - 14:00",
      sessions: [
        {
          emoji: "🧠",
          title: "«Формула успешного обучения»",
          description: "Разговор для родителей о том, как разжечь в ребенке интерес к знаниям.",
          by: "",
          color: "card-blue"
        },
        {
          emoji: "🇬🇧",
          title: "«Английский: ликвидация сложностей»",
          description: "Практические приемы, которые помогут снять страх перед иностранным языком.",
          by: "",
          color: "card-green"
        },
        {
          emoji: "🥋",
          title: "«Каратэ для малышей»",
          description: "Веселая игровая тренировка для развития координации, дисциплины и выплеска энергии.",
          by: "Федерация Каратэ Кёкусинкай",
          color: "card-orange"
        }
      ]
    },
    {
      time: "14:00 - 15:00",
      sessions: [
        {
          emoji: "📚",
          title: "Комбо-урок для будущих первоклашек «Готовимся к школе правильно»",
          description: "Ребенок попробует развивающие игры и первые шаги в чтении.",
          by: "",
          color: "card-blue"
        },
        {
          emoji: "💻",
          title: "Демо-занятие «Путешествие в цифровое будущее»",
          description: "Приключение в мире технологий: программирование робота, создание 3D-объекта или погружение в VR.",
          by: "Цифровая лаборатория «Кибертоник»",
          color: "card-green"
        },
        {
          emoji: "👗",
          title: "Мастер-класс «Искусство дефиле шаг за шагом»",
          description: "Первый выход на «подиум»: королевская осанка, уверенность в себе.",
          by: "Театр моды «Силуэты звёзд»",
          color: "card-orange"
        }
      ]
    }
  ];

  const additionalActivities = [
    "Личные консультации с педагогом и логопедом",
    "Розыгрыш флаеров (бесплатное занятие, скидка или горячий шоколад!)",
    "Теплая, домашняя атмосфера и знакомство с другими семьями"
  ];

  const advantages = [
    "Не нужно никуда ехать! Все лучшее для развития — уже здесь, в Каменке.",
    "Это возможность попробовать самые популярные направления без абонемента.",
    "Мы — свои, местные. Знаем, что важно для наших детей."
  ];

  return (
    <Layout>
      <PageHeader
        title={eventData.title}
        subtitle={eventData.subtitle}
        description={eventData.description}
        bgColor="gradient-fresh"
      />
      
      <Container className="py-8 md:py-12">
        <div className="max-w-6xl mx-auto">
          {/* Основная информация */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8 card-blue animate-slideDown">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center md:text-left">
                <div className="text-4xl mb-2">📅</div>
                <h3 className="font-bold text-lg mb-1">Дата</h3>
                <p className="text-gray-700">{eventData.date}</p>
              </div>
              <div className="text-center md:text-left">
                <div className="text-4xl mb-2">⏰</div>
                <h3 className="font-bold text-lg mb-1">Время</h3>
                <p className="text-gray-700">{eventData.time}</p>
              </div>
              <div className="text-center md:text-left">
                <div className="text-4xl mb-2">📍</div>
                <h3 className="font-bold text-lg mb-1">Место</h3>
                <p className="text-gray-700">{eventData.location}</p>
              </div>
            </div>
          </div>

          {/* Видео блок */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
              Посмотрите, как прошел наш первый год.            </h2>
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-6 md:p-8">
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                <iframe src="https://vk.com/video_ext.php?oid=-229222504&id=456239040&hash=85b0e587227c0797&hd=3" width="1280" height="720" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameBorder="0" allowFullScreen></iframe>
              </div>
              <p className="text-center text-gray-600 mt-4">
                Видео с наших мероприятий.
              </p>
            </div>
          </div>

          {/* Программа мастер-классов */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Программа мастер-классов
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Выберите занятия по интересам и составьте свой идеальный маршрут праздника!<br />
              <span className="font-semibold text-brand-green">Участие во всех активностях — бесплатное.</span>
            </p>
            
            {workshops.map((timeSlot, index) => (
              <div key={index} className="mb-10 last:mb-0">
                <div className="flex items-center mb-6">
                  <div className="gradient-brand text-white px-6 py-2 rounded-full font-bold text-lg">
                    {timeSlot.time}
                  </div>
                  <div className="h-0.5 flex-grow bg-gradient-to-r from-brand-blue to-brand-green ml-4"></div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {timeSlot.sessions.map((session, sIndex) => (
                    <div 
                      key={sIndex} 
                      className={`${session.color} rounded-xl p-6 hover:shadow-lg transition-shadow duration-300`}
                    >
                      <div className="text-4xl mb-4">{session.emoji}</div>
                      <h3 className="font-bold text-lg mb-3 text-gray-800">
                        {session.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {session.description}
                      </p>
                      {session.by && (
                        <p className="text-sm text-gray-500">
                          От: <span className="font-medium">{session.by}</span>
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Дополнительные активности */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              А еще вас ждет
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {additionalActivities.map((activity, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-white to-blue-50 border-2 border-blue-100 rounded-xl p-6 text-center"
                >
                  <div className="text-3xl mb-4">
                    {index === 0 ? "✅" : index === 1 ? "🎁" : "❤️"}
                  </div>
                  <p className="text-gray-700 font-medium">{activity}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Преимущества для жителей */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Почему это удобно для жителей наших поселков?
            </h2>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
              <div className="grid md:grid-cols-3 gap-6">
                {advantages.map((advantage, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl mb-4 animate-pulse-slow">
                      {index === 0 ? "✨" : index === 1 ? "🎯" : "🤝"}
                    </div>
                    <p className="text-gray-700">{advantage}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>


          {/* Форма записи - ВМЕСТО СТАРЫХ КОНТАКТОВ */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Запись на мастер-классы
            </h2>
            <EventRegistrationForm
              workshops={workshopsForForm}
              eventTitle={eventData.title}
            />
          </div>

          {/* Призыв к действию */}
          <div className="text-center p-8 bg-gradient-to-r from-blue-50/50 to-green-50/50 rounded-2xl">
            <div className="text-5xl mb-4 animate-float">🎉</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Ждем в гости родителей с детьми, бабушек, дедушек и друзей!
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Будем пить какао, творить, играть и праздновать наш первый год вместе! ❤️
            </p>
            <div className="text-4xl flex justify-center gap-4">
              <span className="animate-pulse-slow">👨‍👩‍👧‍👦</span>
              <span className="animate-pulse-slow" style={{animationDelay: '0.5s'}}>🎂</span>
              <span className="animate-pulse-slow" style={{animationDelay: '1s'}}>✨</span>
            </div>
          </div>

          {/* Альтернативные контакты */}
          <div className="gradient-sun rounded-2xl p-8 md:p-10 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
              Есть вопросы?
            </h2>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-6">
              <a
                href="https://t.me/VeterokSkaska"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-800 px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-shadow flex items-center gap-3"
              >
                <span className="text-2xl">📲</span>
                <div className="text-left">
                  <div className="text-sm text-gray-500">Telegram</div>
                  <div>@VeterokSkaska</div>
                </div>
              </a>
              
              <a
                href="tel:+79199259765"
                className="bg-white text-gray-800 px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-shadow flex items-center gap-3"
              >
                <span className="text-2xl">📞</span>
                <div className="text-left">
                  <div className="text-sm text-gray-500">Позвонить</div>
                  <div>+7 919 925-97-65</div>
                </div>
              </a>
            </div>                        
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default EventBirthdayPage;