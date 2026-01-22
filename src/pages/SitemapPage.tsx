import Layout from '../components/layout/Layout';
import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import Container from '../components/layout/Container';

const SitemapPage: React.FC = () => {
  // Site structure data
  const siteStructure = [
    {
      title: 'Главная',
      url: '/',
      description: 'Основная страница сайта'
    },
    {
      title: 'О клубе',
      url: '/about',
      description: 'Информация о детском клубе «Ветерок»'
    },
    {
      title: 'Активности',
      url: '/programs',
      description: 'Программы и направления деятельности',
      children: [
        {
          title: 'Развивающие направления',
          url: '/programs/development',
          description: 'Встречи, которые помогают детям 3-7 лет адаптироваться к новому ритму через игру и творчество.'
        },
        {
          title: 'Творческие направления',
          url: '/programs/creativity',
          description: 'Мастерские, где дети раскрывают свой творческий потенциал через разные техники и материалы.'
        },
        {
          title: 'Технические направления',
          url: '/programs/technical',
          description: 'Игровая лаборатория технологий и цифрового творчества Кибертоник'
        },
        {
          title: 'Спортивные направления',
          url: '/programs/sports',
          description: 'Движение, ритм и здоровый образ жизни в формате весёлых встреч.'
        }
      ]
    },
    {
      title: 'Расписание',
      url: '/schedule',
      description: 'График занятий и мероприятий'
    },
    {
      title: 'Наставники',
      url: '/teachers',
      description: 'Информация о педагогах клуба'
    },
    {
      title: 'Мероприятия',
      url: '/events',
      description: 'Афиша предстоящих и прошедших мероприятий'
    },
    {
      title: 'Цены',
      url: '/prices',
      description: 'Стоимость программ и абонементов'
    },
    {
      title: 'Контакты',
      url: '/contacts',
      description: 'Адрес, телефон, email и карта проезда'
    },
    {
      title: 'Блог',
      url: '/blog',
      description: 'Полезные статьи и новости клуба'
    },
    {
      title: 'Пробное занятие',
      url: '/try-free',
      description: 'Запись на первое бесплатное занятие'
    }
  ];

  const legalPages = [
    {
      title: 'Политика конфиденциальности',
      url: '/privacy-policy',
      description: 'Условия обработки персональных данных'
    },
    {
      title: 'Договор-оферта',
      url: '/oferta',
      description: 'Публичная оферта и условия оказания услуг'
    }
  ];

  return (
    <Layout>
      <PageHeader
        title="Карта сайта"
        subtitle="Полная структура сайта"
        description="Навигация по всем разделам детского клуба «Ветерок»"
        bgColor="brand-blue"
      />
      
      <Container className="py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Основные разделы</h2>
              
              <div className="space-y-6">
                {siteStructure.map((section, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          <a href={section.url} className="text-brand-blue hover:underline">
                            {section.title}
                          </a>
                        </h3>
                        <p className="text-gray-600 mt-1">{section.description}</p>
                      </div>
                      <a 
                        href={section.url} 
                        className="mt-2 md:mt-0 px-4 py-2 bg-brand-blue text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors whitespace-nowrap"
                      >
                        Перейти
                      </a>
                    </div>
                    
                    {section.children && (
                      <div className="mt-4 pl-4 border-l-2 border-gray-200">
                        <ul className="space-y-3">
                          {section.children.map((child, childIndex) => (
                            <li key={childIndex} className="flex items-start">
                              <span className="text-gray-400 mr-2">→</span>
                              <div className="flex-1">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                  <div>
                                    <h4 className="font-medium text-gray-900">
                                      <a href={child.url} className="text-brand-blue hover:underline">
                                        {child.title}
                                      </a>
                                    </h4>
                                    <p className="text-gray-600 text-sm mt-1">{child.description}</p>
                                  </div>
                                  <a 
                                    href={child.url} 
                                    className="mt-2 md:mt-0 px-3 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium hover:bg-gray-200 transition-colors whitespace-nowrap"
                                  >
                                    Перейти
                                  </a>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Юридическая информация</h2>
              
              <div className="space-y-6">
                {legalPages.map((page, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          <a href={page.url} className="text-brand-blue hover:underline">
                            {page.title}
                          </a>
                        </h3>
                        <p className="text-gray-600 mt-1">{page.description}</p>
                      </div>
                      <a 
                        href={page.url} 
                        className="mt-2 md:mt-0 px-4 py-2 bg-brand-blue text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors whitespace-nowrap"
                      >
                        Перейти
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Контактная информация</h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Адрес:</strong> Каменка, ул. Пионовая, 15 (КП «Сказка»)</p>
                  <p><strong>Телефон:</strong> <a href="tel:+79199259765" className="text-brand-blue hover:underline">+7 (919) 925-97-65</a></p>
                  <p><strong>Email:</strong> <a href="mailto:info@clubveterok.ru" className="text-brand-blue hover:underline">info@clubveterok.ru</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default SitemapPage;