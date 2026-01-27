// src/pages/ProgramDetailPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from '../components/layout/Layout';
import Container from '../components/layout/Container';
import PageHeader from '../components/ui/PageHeader';
import { programCategories } from '../data/programs-datas';
import Button from '../components/ui/Button';
import ExtendedProgramView from '../components/sections/programs/ExtendedProgramView';

const ProgramDetailPage: React.FC = () => {
  const { categoryId, programId } = useParams<{ categoryId: string; programId: string }>();
  
  // Find the category and program by ID
  const category = programCategories.find(cat => cat.id === categoryId);
  const program = category?.programs.find(prog => prog.id === programId);
  
  if (!category || !program) {
    return (
      <Layout>
        <Helmet>
          <title>Программа не найдена - Детский клуб Ветерок</title>
          <meta name="description" content="Запрашиваемая программа не существует." />
        </Helmet>
        <Container className="py-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Программа не найдена</h1>
            <p className="text-gray-600">Запрашиваемая программа не существует.</p>
          </div>
        </Container>
      </Layout>
    );
  }

  // Проверяем, есть ли расширенные данные для страницы
  const extendedProgram = program;
  const pageData = extendedProgram.pageData;

  // Если есть расширенные данные, используем их
  if (pageData) {
    return (
      <Layout>
        <Helmet>
          <title>{program.title} - Детский клуб Ветерок</title>
          <meta name="description" content={program.description} />
        </Helmet>
        <PageHeader
          title={program.title}
          subtitle={pageData.subtitle}
          bgColor={pageData.heroBgColor}
        />
        
        <Container className="py-12">
          <ExtendedProgramView program={program} pageData={pageData} />
        </Container>
      </Layout>
    );
  }

  // Если нет расширенных данных, используем старый формат
  return (
    <Layout>
      <Helmet>
        <title>{program.title} - {category.title} - Детский клуб Ветерок</title>
        <meta name="description" content={program.description} />
      </Helmet>
      <PageHeader
        title={program.title}
        subtitle={category.title}
        bgColor={category.color}
      />
      
      <Container className="py-12">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Создай свой цифровой мир!
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Игровая лаборатория технологий и цифрового творчества для детей {program.ageGroup}
          </p>
        </div>
        
        <div className="prose max-w-none mb-16">
          <p className="text-lg mb-6">
            {program.description}
          </p>
        </div>
        
        {/* Основная информация о программе */}
        <div className="bg-gradient-to-r from-brand-blue to-brand-green rounded-2xl p-8 md:p-12 text-white mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            ОСНОВНАЯ ИНФОРМАЦИЯ
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white/10 p-6 rounded-xl">
              <h4 className="text-xl font-bold mb-3">ВОЗРАСТ</h4>
              <p>{program.ageGroup}</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-xl">
              <h4 className="text-xl font-bold mb-3">РАСПИСАНИЕ</h4>
              <p>{program.schedule}</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-xl">
              <h4 className="text-xl font-bold mb-3">НАСТАВНИК</h4>
              <p>{program.mentor}</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-xl">
              <h4 className="text-xl font-bold mb-3">СТОИМОСТЬ</h4>
              <p>{program.price?.toLocaleString('ru-RU')} ₽/мес</p>
            </div>
          </div>
        </div>
        
        {/* Что будет на встречах */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            ЧТО БУДЕТ НА ВСТРЕЧАХ?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {program.features.map((feature, index) => (
              <div key={index} className="border-l-4 border-brand-blue pl-6 py-2">
                <p className="text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Результаты программы */}
        {program.outcomes && program.outcomes.length > 0 && (
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              ЧТО ПОЛУЧИТ РЕБЕНОК
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {program.outcomes.map((outcome, index) => (
                <div key={index} className="border border-gray-200 rounded-xl p-6">
                  <div className="flex items-start">
                    <span className="text-brand-green mr-2 mt-1">✓</span>
                    <p className="text-gray-700">{outcome}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Как проходят занятия */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            КАК ПРОХОДЯТ ЗАНЯТИЯ?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">ФОРМАТ</h4>
              <p className="text-gray-600 mb-4">
                Занятия проходят в игровой форме с элементами проектной деятельности.
              </p>
              
              <h4 className="text-xl font-bold text-gray-800 mb-4">СТРУКТУРА</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-brand-blue mr-2">•</span>
                  <span><strong>ВВЕДЕНИЕ (10 мин):</strong> Разминка, объявление темы дня, вдохновляющие примеры.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-blue mr-2">•</span>
                  <span><strong>ОСНОВНАЯ ЧАСТЬ (50 мин):</strong> Практическая работа над проектом, освоение новых навыков.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-blue mr-2">•</span>
                  <span><strong>ПРЕЗЕНТАЦИЯ (10 мин):</strong> Демонстрация результатов, обмен опытом.</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">ОСОБЕННОСТИ</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-brand-green mr-2">•</span>
                  <span><strong>ГИБКИЙ ПОДХОД:</strong> Присоединиться можно в любое время, индивидуальный темп обучения.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-green mr-2">•</span>
                  <span><strong>КОМАНДНАЯ РАБОТА:</strong> Совместные проекты, развитие коммуникативных навыков.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-green mr-2">•</span>
                  <span><strong>ПРАКТИЧЕСКАЯ НАПРАВЛЕННОСТЬ:</strong> Реальные проекты, которые можно показать друзьям и родителям.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Почему у нас */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
            ПОЧЕМУ ВЫБИРАЮТ НАС?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-xl p-6">
              <h4 className="text-xl font-bold text-gray-800 mb-3">Безопасная среда</h4>
              <p className="text-gray-600">
                Все занятия проходят офлайн в дружеской атмосфере под руководством опытных наставников.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-xl p-6">
              <h4 className="text-xl font-bold text-gray-800 mb-3">Развитие soft skills</h4>
              <p className="text-gray-600">
                Развиваем креативность, критическое мышление, коммуникацию и командную работу.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-xl p-6">
              <h4 className="text-xl font-bold text-gray-800 mb-3">Профориентация</h4>
              <p className="text-gray-600">
                Ребенок пробует разные цифровые профессии и понимает, что ему интересно.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-xl p-6">
              <h4 className="text-xl font-bold text-gray-800 mb-3">Реальные проекты</h4>
              <p className="text-gray-600">
                Каждый ребенок создает собственные проекты, которыми может гордиться.
              </p>
            </div>
          </div>
        </div>
        
        {/* Записаться на пробное занятие */}
        <div className="bg-gradient-to-r from-brand-blue to-brand-green rounded-2xl p-8 md:p-12 text-white text-center mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            ЗАПИСАТЬСЯ НА БЕСПЛАТНОЕ ПРОБНОЕ ЗАНЯТИЕ!
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Приходите познакомиться с наставником и пространством, чтобы понять, подходит ли программа вашему ребенку.
          </p>
          
          <div className="bg-white/10 p-6 rounded-xl mb-6 text-left max-w-2xl mx-auto">
            <h4 className="text-xl font-bold mb-4">На пробном занятии ваш ребенок:</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-brand-orange mr-2">✓</span>
                <span>Познакомится с наставником и другими участниками</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-orange mr-2">✓</span>
                <span>Попробует основные активности программы</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-orange mr-2">✓</span>
                <span>Создаст свой первый небольшой проект</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-orange mr-2">✓</span>
                <span>Получит обратную связь от наставника</span>
              </li>
            </ul>
          </div>
          
          <a
            href={`/try-free?program=${program.id}`}
            className="inline-flex items-center bg-white text-brand-blue hover:bg-gray-100 font-bold px-8 py-3 rounded-lg text-lg transition-colors"
          >
            Записаться на пробное занятие
          </a>
        </div>
        
        {/* Часто задаваемые вопросы */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ
          </h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">
                Q: Нужно ли ребенку иметь опыт в этой области?
              </h4>
              <p className="text-gray-600">
                A: Нет, наши программы рассчитаны на детей без предварительного опыта. Мы начинаем с основ и постепенно переходим к более сложным темам.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">
                Q: Что нужно иметь с собой на занятие?
              </h4>
              <p className="text-gray-600">
                A: Только хорошее настроение! Всю необходимую технику и материалы мы предоставляем. Рекомендуем иметь сменную обувь.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">
                Q: Можно ли посещать разово или только по абонементу?
              </h4>
              <p className="text-gray-600">
                A: Мы предлагаем гибкие условия посещения. Можно посещать разово, а можно оформить абонемент на месяц или семестр.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">
                Q: Как проходит оплата?
              </h4>
              <p className="text-gray-600">
                A: Оплата возможна ежемесячно или за семестр вперед. Для новых участников действуют скидки на первое посещение.
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Создаем будущее уже сегодня
          </h3>
          <p className="text-gray-600">
            Детский клуб «Ветерок»
          </p>
        </div>
      </Container>
    </Layout>
  );
};

export default ProgramDetailPage;