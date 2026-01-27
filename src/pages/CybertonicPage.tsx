import Layout from '../components/layout/Layout';
// src/pages/CybertonicPage.tsx
import React from 'react';
import Container from '../components/layout/Container';
import PageHeader from '../components/ui/PageHeader';
import { Helmet } from 'react-helmet-async';

const CybertonicPage: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <title>Кибертоник - Цифровая творческая лаборатория для детей в Каменке</title>
        <meta name="description" content="Игровая лаборатория технологий и цифрового творчества для детей 8-14 лет в детском клубе «Ветерок» в Каменке. Программирование, 3D-моделирование, робототехника." />
      </Helmet>
      <PageHeader
        title="Кибертоник"
        subtitle="Цифровая творческая лаборатория для детей"
        bgColor="brand-orange"
      />
      
      <Container className="py-12">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Создай свой цифровой мир!
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Игровая лаборатория технологий и цифрового творчества для детей 8-14 лет
          </p>
        </div>
        
        <div className="prose max-w-none mb-16">
          <p className="text-lg mb-6">
            Ваш ребенок проводит время за гаджетами? Превратим это увлечение в суперсилу! В «Кибертонике» мы не играем в готовые игры — мы создаём свои. Мы не смотрим видео — мы делаем мультфильмы. Мы не просто пользуемся технологиями — мы понимаем, как они устроены, и становимся их творцами.
          </p>
          
          <p className="text-lg mb-6">
            Это не уроки. Это — приключение в мире цифровых технологий.
          </p>
        </div>
        
        <div className="bg-gradient-to-r from-brand-orange to-yellow-500 rounded-2xl p-8 md:p-12 text-white mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            КОНЦЕПЦИЯ ЛАБОРАТОРИИ
          </h3>
          <p className="text-orange-100 mb-6 max-w-3xl">
            «Кибертоник» — это уникальное игровое пространство, где каждый ребенок становится главным инженером своего проекта. Мы объединили самые современные и увлекательные направления в один динамичный формат:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/10 p-6 rounded-xl">
              <h4 className="text-xl font-bold mb-3">СВОБОДА ВЫБОРА</h4>
              <p>Нет строгой программы «для всех». Ребёнок сам решает, чем заняться сегодня: программировать робота, создавать 3D-мир или разрабатывать свою игру.</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-xl">
              <h4 className="text-xl font-bold mb-3">РЕАЛЬНЫЙ ПРОЕКТ</h4>
              <p>С первого дня каждый работает над своей идеей — от замысла до воплощения. В итоге — готовый продукт, который можно показать друзьям: игра, анимация, напечатанная модель, «умное» устройство.</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-xl">
              <h4 className="text-xl font-bold mb-3">ИГРОВАЯ ГЕЙМИФИКАЦИЯ</h4>
              <p>Занятия — это квесты и миссии. Освоение нового навыка — это «апгрейд» для себя и своего проекта. Скучно не будет!</p>
            </div>
          </div>
          
          <p className="mt-6 text-orange-100">
            Мы создаем среду, где любопытство и эксперимент приветствуются, а ошибка — всего лишь шаг к новому открытию.
          </p>
        </div>
        
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            ЧЕМ МЫ ЗАНИМАЕМСЯ? 4 ЦИФРОВЫЕ ПЛАТФОРМЫ
          </h3>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Дети пробуют всё и находят то, что зажигает их больше всего!
          </p>
          
          <div className="space-y-12">
            <div className="border-l-4 border-brand-orange pl-6 py-2">
              <h4 className="text-2xl font-bold text-gray-800 mb-4">1. ПЛАТФОРМА «КОД»: Язык будущего</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-brand-orange mr-2">•</span>
                  <span><strong>Программирование в Scratch:</strong> Создаём первые мультфильмы и игры визуальными блоками — просто, весело, мощно!</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-orange mr-2">•</span>
                  <span><strong>Python в Minecraft:</strong> Пишем настоящий код, чтобы автоматизировать строительство и создавать магию в любимой вселенной.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-orange mr-2">•</span>
                  <span><strong>Робототехника и «умный дом»:</strong> Программируем роботов (таких как Cody Rocky) и устройства на Arduino, чтобы они слушались наших команд.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-orange mr-2">•</span>
                  <span><strong>Интернет вещей (IoT):</strong> Учимся связывать виртуальный и реальный мир.</span>
                </li>
              </ul>
            </div>
            
            <div className="border-l-4 border-brand-green pl-6 py-2">
              <h4 className="text-2xl font-bold text-gray-800 mb-4">2. ПЛАТФОРМА «3D-ВСЕЛЕННАЯ»: От идеи к воплощению</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-brand-green mr-2">•</span>
                  <span><strong>3D-моделирование в Blender/Tinkercad:</strong> Рисуем не на бумаге, а в пространстве! Создаём персонажей, технику, архитектурные объекты.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-green mr-2">•</span>
                  <span><strong>3D-печать:</strong> Волшебный момент, когда твоя цифровая модель становится реальным предметом в руках.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-green mr-2">•</span>
                  <span><strong>Графический дизайн и анимация:</strong> Учимся создавать стильную графику, оживлять персонажей и монтировать свои первые ролики.</span>
                </li>
              </ul>
            </div>
            
            <div className="border-l-4 border-brand-blue pl-6 py-2">
              <h4 className="text-2xl font-bold text-gray-800 mb-4">3. ПЛАТФОРМА «КИБЕРГРАМОТА»: Навыки цифрового гражданина</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-brand-blue mr-2">•</span>
                  <span><strong>Слепая печать:</strong> Осваиваем клавиатуру быстро и правильно.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-blue mr-2">•</span>
                  <span><strong>Офисное мастерство:</strong> Учимся создавать впечатляющие презентации, инфографику и работать с данными не потому что «надо», а для своего проекта.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-blue mr-2">•</span>
                  <span><strong>Основы кибербезопасности:</strong> Узнаём, как создавать надёжные пароли, защищать свои данные и безопасно общаться в сети.</span>
                </li>
              </ul>
            </div>
            
            <div className="border-l-4 border-brand-lightgreen pl-6 py-2">
              <h4 className="text-2xl font-bold text-gray-800 mb-4">4. ПЛАТФОРМА «ИГРОТЕКА»: Творчество и команда</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-brand-lightgreen mr-2">•</span>
                  <span><strong>Создание игр:</strong> От концепции до прототипа в средах разработки.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-lightgreen mr-2">•</span>
                  <span><strong>Сетевые турниры:</strong> Командные игры по локальной сети в позитивной атмосфере — развиваем командный дух и стратегическое мышление.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-lightgreen mr-2">•</span>
                  <span><strong>Тест-драйв проектов:</strong> Самое весёлое — играть в то, что создали сами и друзья!</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            КАК ПРОХОДЯТ ЗАНЯТИЯ?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">ФОРМАТ</h4>
              <p className="text-gray-600 mb-4">
                1,5 часа динамичного творчества один раз в неделю.
              </p>
              
              <h4 className="text-xl font-bold text-gray-800 mb-4">СТРУКТУРА</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-brand-orange mr-2">•</span>
                  <span><strong>СТАРТ-АП (10 мин):</strong> Планирование, объявление «миссий дня», вдохновляющие демо.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-orange mr-2">•</span>
                  <span><strong>ВРЕМЯ БОЛЬШИХ ПРОЕКТОВ (60 мин):</strong> Каждый работает над своей идеей, а наш ведущий-инженер помогает преодолеть трудности и освоить новый инструмент.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-orange mr-2">•</span>
                  <span><strong>ИГРОТЕКА / ТЕСТ-ДРАЙВ (15 мин):</strong> Играем в созданные игры, тестируем роботов, делимся успехами.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-orange mr-2">•</span>
                  <span><strong>АПДЕЙТ-ЛОГ (5 мин):</strong> Делимся одним новым умением, которое получили сегодня.</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">ОСОБЕННОСТИ</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-brand-green mr-2">•</span>
                  <span><strong>ГИБКИЙ СТАРТ:</strong> Присоединиться можно с любого занятия и с любым уровнем подготовки. Мы поможем новичку быстро влиться в процесс с помощью «Стартовых квестов».</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            ПОЧЕМУ «КИБЕРТОНИК» В «ВЕТЕРКЕ»?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-xl p-6">
              <h4 className="text-xl font-bold text-gray-800 mb-3">Уникальный синтез технологий</h4>
              <p className="text-gray-600">
                Никакой скучной теории, только практика и интеграция навыков. Ребёнок видит связь между программированием, дизайном и «железом».
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-xl p-6">
              <h4 className="text-xl font-bold text-gray-800 mb-3">Фокус на soft skills</h4>
              <p className="text-gray-600">
                Мы развиваем проектное мышление, креативность, умение решать задачи и работать как в команде, так и самостоятельно.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-xl p-6">
              <h4 className="text-xl font-bold text-gray-800 mb-3">Безопасная цифровая среда</h4>
              <p className="text-gray-600">
                Все занятия офлайн, в дружеском кругу, под руководством опытного наставника.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-xl p-6">
              <h4 className="text-xl font-bold text-gray-800 mb-3">Профориентация в действии</h4>
              <p className="text-gray-600">
                Ребёнок на практике пробует 10+ цифровых профессий и понимает, что ему действительно интересно.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-brand-blue to-brand-green rounded-2xl p-8 md:p-12 text-white text-center mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            ЗАПИСАТЬСЯ НА БЕСПЛАТНЫЙ ПРОБНЫЙ ДЕНЬ В ЛАБОРАТОРИИ!
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Хотите, чтобы ребёнок увидел всё своими глазами и сделал первый цифровой артефакт своими руками?
            Приводите его на открытое демо-занятие «Путешествие в цифровое будущее»!
          </p>
          
          <div className="bg-white/10 p-6 rounded-xl mb-6 text-left max-w-2xl mx-auto">
            <h4 className="text-xl font-bold mb-4">На пробном занятии ваш ребенок:</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-brand-orange mr-2">✓</span>
                <span>Запрограммирует своего первого робота голосом.</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-orange mr-2">✓</span>
                <span>Изменит код компьютерной игры.</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-orange mr-2">✓</span>
                <span>Создаст 3D-объект для виртуального мира.</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-orange mr-2">✓</span>
                <span>Получит сертификат «Цифрового инженера-испытателя».</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white/10 p-6 rounded-xl mb-6 text-left max-w-2xl mx-auto">
            <p className="font-bold mb-2">Дата следующего демо-дня: [УКАЗАТЬ ДАТУ]</p>
            <p className="mb-2">Место: Детский клуб «Ветерок», Каменка, ул. Пионовая, 15 (КП «Сказка»)</p>
            <p className="mb-2">Для кого: Дети 8-14 лет (группы до 12 человек).</p>
          </div>
          
          <a 
            href="/try-free" 
            className="inline-flex items-center bg-white text-brand-blue hover:bg-gray-100 font-bold px-8 py-3 rounded-lg text-lg transition-colors"
          >
            Записаться на пробное занятие
          </a>
        </div>
        
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ (FAQ)
          </h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">
                Q: Это образовательная программа? Нужна ли лицензия?
              </h4>
              <p className="text-gray-600">
                A: Нет, «Кибертоник» — это клуб цифрового творчества и досуга. Мы не выдаём образовательные сертификаты, не проводим аттестации. Наша цель — создать увлекательную среду для игрового освоения технологий и развития цифровой грамотности.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">
                Q: Мой ребёнок никогда не программировал. Ему будет сложно?
              </h4>
              <p className="text-gray-600">
                A: Нисколько! Именно для таких ребят наш формат и создан. Мы начинаем с интуитивно понятных визуальных сред (Scratch, блочное программирование). Наши педагоги умеют объяснять сложное простыми словами. Каждый работает в своём темпе.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">
                Q: Что нужно иметь с собой на занятие?
              </h4>
              <p className="text-gray-600">
                A: Только хорошее настроение! Мы предоставляем всю технику: компьютеры, роботов, 3D-принтер, VR-очки и необходимые материалы.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">
                Q: Можно ли посещать разово или только по абонементу?
              </h4>
              <p className="text-gray-600">
                A: Оптимальный формат — это еженедельные занятия по абонементу, так как ребёнок ведёт свой проект постепенно. Однако мы предлагаем гибкие условия и возможность присоединиться в любой момент. Уточняйте актуальные тарифы у администратора.
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Создаём будущее. Играючи.
          </h3>
          <p className="text-gray-600">
            Детский клуб «Ветерок». Лаборатория «Кибертоник».
          </p>
        </div>
      </Container>
    </Layout>
  );
};

export default CybertonicPage;