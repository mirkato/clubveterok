import Layout from '../components/layout/Layout';
import React, { useState } from 'react';
import PageHeader from '../components/ui/PageHeader';
import Container from '../components/layout/Container';
import { CalendarDays, Users, MapPin, Sparkles, Gamepad2, Palette, Brain, Heart } from 'lucide-react';

const AboutPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Array of image sources for the carousel
  const carouselImages = [
    { src: "/images/about/caniculs/smena1.jpg", alt: "Каникулярная смена 1" },
    { src: "/images/about/caniculs/smena2.jpg", alt: "Каникулярная смена 2" },
    { src: "/images/about/caniculs/smena3.jpg", alt: "Каникулярная смена 3" },
    { src: "/images/about/caniculs/smena4.jpg", alt: "Каникулярная смена 4" },
    { src: "/images/about/caniculs/smena5.jpg", alt: "Каникулярная смена 5" },
    { src: "/images/about/caniculs/smena6.jpg", alt: "Каникулярная смена 6" },
    { src: "/images/about/caniculs/smena7.jpg", alt: "Каникулярная смена 7" },
    { src: "/images/about/caniculs/smena8.jpg", alt: "Каникулярная смена 8" },
    { src: "/images/about/caniculs/smena9.jpg", alt: "Каникулярная смена 9" },
    { src: "/images/about/caniculs/smena10.jpg", alt: "Каникулярная смена 10" },
    { src: "/images/about/caniculs/smena11.jpg", alt: "Каникулярная смена 11" },
    { src: "/images/about/caniculs/smena12.jpg", alt: "Каникулярная смена 12" },
    { src: "/images/about/caniculs/smena13.jpg", alt: "Каникулярная смена 13" }
  ];

  // Function to go to next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
  };

  // Function to go to previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  };

  // Function to go to specific slide
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <Layout>
      <PageHeader
        title="«Ветерок» — это больше, чем клуб"
        subtitle="Место, где растут мечты, дружба и новые таланты"
        description="Мы создали пространство, в котором детям хочется творить, родителям — быть рядом, а семьям — чувствовать себя частью большого сообщества прямо в вашем посёлке."
        bgColor="brand-blue"
      />

      {/* История и миссия */}
      <Container className="py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Как всё начиналось</h2>
            <div className="space-y-4 text-gray-600">
              <p className="text-lg">
                «Ветерок» родился из простой идеи: детям и родителям в Каменке и соседних поселках нужно свое место — уютное, современное и живое. Место, куда не нужно ехать за тридевять земель в город, чтобы найти хороший кружок, веселый праздник или просто компанию для игр.
              </p>
              <p className="text-lg">
                Мы верим, что настоящее развитие рождается там, где есть радость, свобода и поддержка. Поэтому мы не просто «оказываем услуги» — мы создаем среду, в которой каждый ребенок может попробовать себя в самом разном: от акварели до программирования, от карате до дизайна костюмов.
              </p>
            </div>
            
            <div className="mt-8 p-6 bg-gradient-brand rounded-xl text-white">
              <div className="flex items-center gap-3 mb-2">
                <Sparkles className="w-6 h-6" />
                <h3 className="text-xl font-bold">Наша миссия</h3>
              </div>
              <p className="text-lg">
                Быть вашим семейным пространством, где дети раскрывают таланты, а родители находят единомышленников и поддержку.
              </p>
            </div>
          </div>
        </div>
      </Container>

      {/* Мероприятия */}
      <Container className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            Наша жизнь — это праздники, на которых мы все вместе
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
            Каждый сезон в «Ветерке» — это новые впечатления и традиции, которые объединяют целые семьи.
          </p>

          <div className="space-y-12">
            {/* Масленица */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="card-orange rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/images/about/events/maslenitsa.jpg"
                  alt="Масленица в Клубе 'Ветерок'"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-4">
                  <CalendarDays className="w-4 h-4" />
                  Февраль-март
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Широкая Масленица</h3>
                <p className="text-gray-600">
                  Гуляем всей округой! Горячие блины, народные игры, сжигание чучела и море смеха — так мы провожаем зиму и встречаем весну вместе с соседями.
                </p>
              </div>
            </div>

            {/* День защиты детей */}
            <div className="grid md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
              <div className="md:order-2">
                <div className="card-blue rounded-2xl overflow-hidden shadow-lg">
                  <div className="h-64 bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center">
                    <img
                      src="/images/about/events/defencekid.jpg"
                      alt="День защиты детей в Клубе 'Ветерок'"
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="md:order-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                  <CalendarDays className="w-4 h-4" />
                  1 июня
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">День защиты детей</h3>
                <p className="text-gray-600">
                  Наш самый яркий летний праздник: конкурсы, мастер-классы под открытым небом, мыльные пузыри, рисунки на асфальте и сладкая вата. Потому что детство должно быть счастливым — прямо здесь, у вас во дворе.
                </p>
              </div>
            </div>

            {/* Сабантуй */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="card-green rounded-2xl overflow-hidden shadow-lg">
                <div className="h-64 bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center">
                    <img
                      src="/images/about/events/sabantui.jpg"
                      alt="Осенний сабантуй в Клубе 'Ветерок'"
                      className="w-full h-64 object-cover"
                    />
                </div>
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
                  <CalendarDays className="w-4 h-4" />
                  Сентябрь
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Осенний Сабантуй</h3>
                <p className="text-gray-600">
                  Праздник урожая и силы духа! Семейные эстафеты, перетягивание каната, конкурсы на ловкость и ароматный чай из самовара. Это день, когда знакомятся, общаются и радуются вместе жители всего Каменского округа.
                </p>
              </div>
            </div>

            {/* Новый год */}
            <div className="grid md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
              <div className="md:order-2">
                <div className="card-orange rounded-2xl overflow-hidden shadow-lg">
                  <div className="h-64 bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center">
                    <img
                      src="/images/about/events/newyear.jpg"
                      alt="Новогодние утренники в Клубе 'Ветерок'"
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="md:order-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
                  <CalendarDays className="w-4 h-4" />
                  Декабрь
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Новогодние чудеса</h3>
                <p className="text-gray-600">
                  Волшебство приходит в Каменку! Уютные утренники у елки, handmade-игрушки, встреча с Дедом Морозом и Снегурочкой, и тот самый блеск в глазах, ради которого мы всё затевали.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Каникулярные программы */}
      <Container className="py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Каникулы в «Ветерке» — самые весёлые и полезные</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Каждый родитель, бабушка или дедушка знает: длинные каникулы — это радость для ребёнка, но головная боль для взрослых. <strong>Мы решили эту задачу.</strong>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-sun rounded-2xl p-8 text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-4xl">☀️</div>
                <h3 className="text-2xl font-bold">Летние смены</h3>
              </div>
              <p className="text-lg mb-2"><strong>Июнь – август</strong></p>
              <p>Целых три месяца увлекательных программ! Каждая неделя — новая тема, новые открытия и новые друзья.</p>
            </div>

            <div className="bg-gradient-fresh rounded-2xl p-8 text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-4xl">🍁❄️🌱</div>
                <h3 className="text-2xl font-bold">Осень, зима, весна</h3>
              </div>
              <p className="text-lg mb-2"><strong>Неделя в каждые каникулы</strong></p>
              <p>Короткие, но насыщенные смены, чтобы отдохнуть от школы и зарядиться впечатлениями.</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
              Что ждёт детей на каникулах в «Ветерке»:
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { icon: <Gamepad2 className="w-6 h-6" />, text: 'Компьютерные и настольные игры' },
                { icon: '🏃', text: 'Подвижные игры и прогулки' },
                { icon: <Palette className="w-6 h-6" />, text: 'Творческие мастер-классы' },
                { icon: <Brain className="w-6 h-6" />, text: 'Познавательные квизы и квесты' },
                { icon: <Users className="w-6 h-6" />, text: 'Общение и новые друзья' },
                { icon: <Sparkles className="w-6 h-6" />, text: 'Открытие новых увлечений' },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <p className="text-center text-gray-700 font-medium">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
{/* Галерея каникулярных смен */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
              Фотогалерея наших каникул
            </h3>
            
            {/* Carousel container */}
            <div className="relative w-full overflow-hidden rounded-2xl shadow-lg mb-12">
              {/* Carousel wrapper */}
              <div className="relative h-64 md:h-80 lg:h-96">
                {/* Slides */}
                {carouselImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    {image.src.includes('placeholder') ? (
                      // Placeholder for missing images
                      <div className="w-full h-full flex items-center justify-center bg-gray-200 border-2 border-dashed rounded-xl">
                        <div className="text-center p-4">
                          <div className="text-5xl mb-4">📸</div>
                          <p className="text-gray-600 text-lg font-medium">
                            Фото {index + 1}
                          </p>
                          <p className="text-gray-500 mt-2">
                            Скоро здесь появится яркая фотография с нашей смены!
                          </p>
                        </div>
                      </div>
                    ) : (
                      // Actual image
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                ))}
              </div>
               
              {/* Navigation buttons */}
              <button
                type="button"
                className="absolute top-1/2 left-4 z-10 flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white"
                style={{ transform: 'translateY(-50%)' }}
                onClick={prevSlide}
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              <button
                type="button"
                className="absolute top-1/2 right-4 z-10 flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white"
                style={{ transform: 'translateY(-50%)' }}
                onClick={nextSlide}
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
              
              {/* Indicators */}
              <div className="absolute bottom-4 left-1/2 z-10 flex space-x-2 -translate-x-1/2">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`w-3 h-3 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-white ${
                      index === currentSlide
                        ? 'bg-white'
                        : 'bg-white/50'
                    }`}
                    onClick={() => goToSlide(index)}
                  ></button>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 border-2 border-blue-200">
            <div className="flex items-start gap-4">
              <Heart className="w-8 h-8 text-brand-blue flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg text-gray-700 italic mb-2">
                  «Наши каникулярные смены — это не просто присмотр. Это настоящее приключение, где дети чувствуют себя свободно, пробуют разное и возвращаются домой с горящими глазами и историями наперевес.»
                </p>
                <p className="text-gray-600 font-medium">— Команда «Ветерка»</p>
              </div>
            </div>
            
            
          </div>
        </div>
      </Container>

      {/* Почему мы — точка притяжения */}
      <Container className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            «Ветерок» — это место, где встречаются люди
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
            Мы стали тем самым «третьим местом» — не домом и не работой, а пространством, куда хочется возвращаться.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-5xl mb-4 text-center">👨‍👩‍👧‍👦</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Для семей</h3>
              <p className="text-gray-600 text-center">
                Здесь родители могут отдохнуть, пока дети на занятии, пообщаться за чашкой чая или прийти на семейный мастер-класс всей семьёй.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-5xl mb-4 text-center">🎨🤖🥋</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Для увлечений</h3>
              <p className="text-gray-600 text-center">
                От карате до цифровой лаборатории, от театра моды до чистописания — у нас каждый найдет дело по душе, без долгих поездок в город.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center justify-center gap-2 text-5xl mb-4">
                <MapPin className="w-10 h-10 text-brand-green" />
                <Heart className="w-10 h-10 text-brand-orange" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Для нашей округи</h3>
              <p className="text-gray-600 text-center">
                Мы создаем среду, где дети из Каменки, Кулаково, Насекиной, Коняшиной и всех окрестных поселков и КП растут, дружат и чувствуют себя как дома.
              </p>
            </div>
          </div>
        </div>
      </Container>

      {/* Призыв к действию */}
      <Container className="py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-50 via-white to-green-50 rounded-2xl shadow-xl p-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Приходите просто так — как к друзьям
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Посмотрите расписание, запишитесь на пробное занятие или просто загляните на чай, чтобы почувствовать атмосферу «Ветерка».
            </p>
            
            <div className="mb-8 p-6 bg-white rounded-xl shadow-sm inline-block">
              <p className="text-gray-700">
                <span className="font-bold">Адрес:</span> село Каменка, ул. Пионовая, д. 15 (КП «Сказка»)
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/schedule" 
                className="btn-primary px-8 py-4 text-lg rounded-xl"
              >
                Посмотреть расписание
              </a>
              <a 
                href="https://t.me/VeterokSkaska" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary px-8 py-4 text-lg rounded-xl"
              >
                Написать в Telegram
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default AboutPage;