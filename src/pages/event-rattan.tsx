// Файл: src/pages/event-rattan.tsx
import Layout from '../components/layout/Layout';
import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import Container from '../components/layout/Container';
import EventRegistrationForm from '../components/forms/EventRegistrationForm';
import AdultEventRegistrationForm from '../components/forms/AdultEventRegistrationForm';
import { Helmet } from 'react-helmet-async';

const EventRattanPage: React.FC = () => {
  const eventData = {
    title: "Мастер-класс «Магия ротанга»",
    subtitle: "Плетение из ротанга для взрослых и подростков",
    description: "Освойте древнее искусство плетения из натурального материала. Создайте своими руками уникальный предмет интерьера и проведите время в творческой атмосфере.",
    date: "31 января 2026 г.",
    time: "с 12:00 до 17:00",
    duration: "5 часов",
    location: "Детский клуб «Ветерок», КП «Сказка», ул. Пионовая, 15",
    age: "Взрослые и подростки от 14 лет",
    price: "2300 руб.",
    registrationDeadline: "30 января 2026 г.",
    videoUrl: "https://vk.com/video_ext.php?oid=-123456789&id=456789012&hash=abc123def456", // Замените на реальную ссылку
  };

  // Что узнают и сделают участники
  const benefits = [
    {
      emoji: "🔄",
      title: "Освоите технику",
      description: "Научитесь основам работы с ротангом и техникам плетения"
    },
    {
      emoji: "✨",
      title: "Создадите изделие",
      description: "Сделаете своими руками уникальный предмет интерьера"
    },
    {
      emoji: "👭",
      title: "Проведете время с пользой",
      description: "Творческая атмосфера и общение с единомышленниками"
    },
    {
      emoji: "🎁",
      title: "Все материалы включены",
      description: "Весь необходимый инвентарь и материалы предоставляются"
    }
  ];

  // Программа мастер-класса
  const program = [
    {
      time: "12:00 - 13:00",
      title: "Знакомство с материалом",
      description: "Теория: виды ротанга, инструменты, техники безопасности"
    },
    {
      time: "13:00 - 15:00",
      title: "Основы плетения",
      description: "Практика: освоение базовых техник на учебном образце"
    },
    {
      time: "15:00 - 16:30",
      title: "Создание изделия",
      description: "Работа над основным проектом - плетение ведра с разметкой"
    },
    {
      time: "16:30 - 17:00",
      title: "Завершение и отделка",
      description: "Финальная обработка, советы по уходу, фотосессия работ"
    }
  ];

  // Что входит в стоимость
  const includes = [
    "Ведро с готовой разметкой для плетения",
    "Натуральный ротанг (3 вида толщины)",
    "Профессиональные инструменты (шило, секатор, ножницы)",
    "Защитные перчатки и фартук",
    "Чай/кофе с печеньками",
    "Индивидуальная помощь мастера",
    "Фотосессия готовых работ"
  ];

  // Для кого подходит мастер-класс
  const forWhom = [
    "Для тех, кто хочет освоить новое хобби",
    "Для любителей handmade и рукоделия",
    "Для тех, кто ценит экологичные материалы",
    "Для желающих создавать уникальные подарки",
    "Для подростков, ищущих творческое развитие",
    "Для всех, кто хочет отдохнуть душой"
  ];

  // Что участники заберут с собой
  const takeHome = [
    "Свое изделие (ведро/корзина из ротанга)",
    "Пошаговую инструкцию для продолжения",
    "Навыки, которые можно применять дальше",
    "Список магазинов с материалами",
    "Хорошее настроение и вдохновение"
  ];

  // Данные для формы
  const workshopForForm = [
    { 
      id: 'rattan-master', 
      time: '12:00 - 17:00', 
      title: 'Мастер-класс "Магия ротанга"', 
      emoji: '🌟',
      description: 'Плетение ведра из натурального ротанга'
    },
  ];

  return (
    <Layout>
      <Helmet>
        <title>Мастер-класс «Магия ротанга» для взрослых в Каменке</title>
        <meta name="description" content="Запишитесь на мастер-класс по плетению из ротанга для взрослых в детском клубе «Ветерок» в Каменке. Создайте уникальный предмет интерьера своими руками." />
      </Helmet>
      <PageHeader
        title={eventData.title}
        subtitle={eventData.subtitle}
        description={eventData.description}
        bgColor="gradient-sun"
      />
      
      <Container className="py-8 md:py-12">
        <div className="max-w-6xl mx-auto">
          {/* Основная информация в карточке */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8 card-orange animate-slideDown">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center md:text-left">
                <div className="text-3xl mb-2">📅</div>
                <h3 className="font-bold text-lg mb-1">Дата</h3>
                <p className="text-gray-700">{eventData.date}</p>
                <p className="text-sm text-gray-500 mt-1">Регистрация до {eventData.registrationDeadline}</p>
              </div>
              <div className="text-center md:text-left">
                <div className="text-3xl mb-2">⏰</div>
                <h3 className="font-bold text-lg mb-1">Время</h3>
                <p className="text-gray-700">{eventData.time}</p>
                <p className="text-sm text-gray-500 mt-1">{eventData.duration} погружения в творчество</p>
              </div>
              <div className="text-center md:text-left">
                <div className="text-3xl mb-2">📍</div>
                <h3 className="font-bold text-lg mb-1">Место</h3>
                <p className="text-gray-700">{eventData.location}</p>
              </div>
              <div className="text-center md:text-left">
                <div className="text-3xl mb-2">💎</div>
                <h3 className="font-bold text-lg mb-1">Стоимость</h3>
                <p className="text-2xl font-bold text-brand-orange">{eventData.price}</p>
                <p className="text-sm text-gray-500 mt-1">Все материалы включены</p>
              </div>
            </div>

            {/* Возрастная категория */}
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="text-2xl">🎯</div>
                <div>
                  <p className="font-bold text-gray-800">Для кого:</p>
                  <p className="text-gray-700">{eventData.age}</p>
                </div>
              </div>
            </div>

            {/* Срочное уведомление о регистрации */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-400 p-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="text-2xl">⏳</div>
                <div>
                  <p className="font-bold text-gray-800 mb-1">Регистрация до {eventData.registrationDeadline}!</p>
                  <p className="text-gray-700">
                    Количество мест ограничено! Мастер-класс проходит в мини-группе (до 8 человек) 
                    для обеспечения индивидуального подхода.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Блок с видео */}
          {/* <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
              Что такое плетение из ротанга?
            </h2>
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-6 md:p-8">
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg mb-4">
                <iframe
                  src={eventData.videoUrl}
                  className="w-full h-full"
                  allowFullScreen
                  title="Видео о плетении из ротанга"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
              <p className="text-center text-gray-600">
                Посмотрите, как происходит процесс плетения и какие изделия можно создать
              </p>
            </div>
          </div> */}

          {/* Что вы узнаете и сделаете */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Что вас ждет на мастер-классе?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-b from-white to-orange-50 border-2 border-orange-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl mb-4">{benefit.emoji}</div>
                  <h3 className="font-bold text-lg mb-2 text-gray-800">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Программа мастер-класса */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Программа мастер-класса
            </h2>
            <div className="space-y-4">
              {program.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white border-l-4 border-brand-orange rounded-r-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded-lg font-bold min-w-[140px] text-center">
                      {item.time}
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-bold text-lg text-gray-800 mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Две колонки: что входит и для кого */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Что входит в стоимость */}
            <div>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 h-full">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <span className="text-3xl">🎁</span>
                  Что входит в стоимость?
                </h3>
                <ul className="space-y-3">
                  {includes.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-green-500 text-xl mt-0.5">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-4 bg-white rounded-lg border border-green-200">
                  <p className="text-center font-bold text-green-700">
                    Приносите только творчество и хорошее настроение!
                  </p>
                </div>
              </div>
            </div>

            {/* Для кого подходит */}
            <div>
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 h-full">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <span className="text-3xl">👥</span>
                  Для кого подходит?
                </h3>
                <ul className="space-y-3">
                  {forWhom.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-blue-500 text-xl mt-0.5">★</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-4 bg-white rounded-lg border border-blue-200">
                  <p className="text-center text-gray-700">
                    <span className="font-bold">Не требуется опыт!</span> Начинающим помогаем с самого начала.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Что заберут с собой */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Что вы заберёте с собой?
            </h2>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                {takeHome.map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow"
                  >
                    <div className="text-3xl mb-3">
                      {index === 0 ? "🛍️" : 
                       index === 1 ? "📖" : 
                       index === 2 ? "🎓" : 
                       index === 3 ? "🏪" : "😊"}
                    </div>
                    <p className="text-gray-700 font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* О мастере (можно добавить позже) */}
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 mb-12 border border-gray-200">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
              Ведущая мастер-класса
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-6 max-w-3xl mx-auto">
              <div className="w-32 h-32 bg-gradient-to-br from-orange-200 to-yellow-200 rounded-full flex items-center justify-center text-5xl">
                👩‍🎨
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Опытный мастер по плетению</h3>
                <p className="text-gray-600 mb-3">
                  Наш мастер с многолетним опытом работы с ротангом научит вас всем тонкостям ремесла. 
                  Индивидуальный подход к каждому участнику гарантирован.
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full">5+ лет опыта</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">100+ учеников</span>
                </div>
              </div>
            </div>
          </div>
          {/* Форма записи */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Запись на мастер-класс
            </h2>
            <AdultEventRegistrationForm
              eventTitle={eventData.title}
            />
          </div>
          {/* Срочный призыв к действию */}
          <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-8 md:p-10 mb-8 text-white">
            <div className="text-center">
              <div className="text-5xl mb-4 animate-pulse">🌟</div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Не упустите возможность освоить новую увлекательную технику!
              </h2>
              <p className="text-xl mb-6 opacity-90">
                Весна уже близко — создайте своими руками тёплый и уютный акцент для вашего дома!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#registration"
                  className="bg-white text-orange-600 px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-shadow flex items-center gap-3 text-lg"
                >
                  <span className="text-2xl">🎫</span>
                  Забронировать место
                </a>
                
                <a
                  href="tel:+79199259765"
                  className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition flex items-center gap-3 text-lg"
                >
                  <span className="text-2xl">📞</span>
                  Задать вопрос
                </a>
              </div>
              
              <div className="mt-8 pt-6 border-t border-orange-300">
                <p className="mb-4">
                  Остались вопросы? Пишите нам:
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <a
                    href="https://t.me/VeterokSkaska"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg hover:bg-white/30 transition"
                  >
                    <span className="text-xl">💬</span>
                    Telegram: @VeterokSkaska
                  </a>
                  <a
                    href="tel:+79199259765"
                    className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg hover:bg-white/30 transition"
                  >
                    <span className="text-xl">📱</span>
                    +7 919 925-97-65
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Форма записи */}
          <div id="registration" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Запись на мастер-класс
            </h2>
            <AdultEventRegistrationForm
              eventTitle={eventData.title}
            />
          </div>

          {/* Информация о клубе */}
          <div className="text-center p-8 bg-gradient-to-r from-blue-50/50 to-green-50/50 rounded-2xl">
            <div className="text-5xl mb-4">✨</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Ждем вас в детском клубе «Ветерок»
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              КП «Сказка», ул. Пионовая, 15<br />
              Уютное пространство для творчества и развития
            </p>
            <div className="text-4xl flex justify-center gap-4">
              <span className="animate-pulse-slow">🏠</span>
              <span className="animate-pulse-slow" style={{animationDelay: '0.5s'}}>🎨</span>
              <span className="animate-pulse-slow" style={{animationDelay: '1s'}}>🤝</span>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default EventRattanPage;