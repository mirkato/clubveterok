import Layout from '../components/layout/Layout';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/ui/PageHeader';
import Container from '../components/layout/Container';
import { Calendar, Clock, Users, Filter, CheckCircle, Star, AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { scheduleSections, scheduleFilters, scheduleSectionTitles } from '../data/schedule-data';

const SchedulePage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({
    'creativity': true,
    'development': true,
    'technical': true,
    'sports': true,
    'request': true
  });

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  // Фильтрация данных по выбранному фильтру
  const filteredSections = activeFilter === 'all' 
    ? scheduleSections 
    : scheduleSections.filter(section => section.id === activeFilter);

  return (
    <Layout>
      <Helmet>
        <title>Расписание детского клуба Ветерок в Каменке на январь 2026</title>
        <meta name="description" content="Актуальное расписание занятий детского клуба Ветерок в Каменке на январь 2026. Творчество, спорт, технологии для детей 3-16 лет." />
      </Helmet>
      <PageHeader
        title="Расписание активностей на Январь 2026"
        subtitle="Планируйте встречи вашего ребёнка"
        description="Актуальное расписание всех мастерских и встреч в клубе «Ветерок». Свободные места обновляются ежедневно!"
        bgColor="brand-blue"
      />
      
      <Container className="py-8">
        {/* Статус расписания */}
        <div className="mb-10">
          <div className="bg-gradient-to-r from-brand-blue to-brand-green rounded-2xl p-6 text-white shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold mb-2">📅 Актуальное расписание на январь 2026</h2>
                <p className="opacity-90">Расписание обновлено 12 января 2026. Занятия начинаются с 15 января.</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-white/20 px-4 py-2 rounded-lg">
                  <span className="font-bold text-lg">🤪</span>
                </div>
                <div className="text-right">
                  <p className="text-sm opacity-90">Успейте записаться!</p>
                  <p className="font-bold text-lg">Места ограничены</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Фильтры */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <Filter className="w-5 h-5 text-gray-600" />
            <h3 className="text-lg font-semibold text-gray-700">Фильтр по направлениям:</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {scheduleFilters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl transition-all ${activeFilter === filter.id 
                  ? 'bg-gradient-to-r from-brand-blue to-brand-green text-white shadow-md' 
                  : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-brand-blue hover:bg-blue-50'
                }`}
              >
                <span className="text-xl">{filter.emoji}</span>
                <span className="font-medium">{filter.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Легенда */}
        <div className="mb-10 bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Обозначения:</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-gray-600">Занятия идут — можно присоединиться</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <span className="text-gray-600">Идет набор — формируется группа</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-purple-500"></div>
              <span className="text-gray-600">По запросу — организуем под вашу группу</span>
            </div>
          </div>
        </div>

        {/* Расписание */}
        <div className="space-y-8">
          {filteredSections.map(section => {
            const isExpanded = expandedSections[section.id];
            
            return (
              <div key={section.id} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                {/* Заголовок секции */}
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full p-6 bg-gradient-to-r from-gray-50 to-white hover:from-gray-100 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="text-3xl">{section.emoji}</div>
                      <div className="text-left">
                        <h3 className="text-xl font-bold text-gray-800">{section.title}</h3>
                        <p className="text-gray-600 text-sm mt-1">{section.description}</p>
                      </div>
                    </div>
                    <div className="text-gray-500">
                      {isExpanded ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                    </div>
                  </div>
                </button>

                {/* Контент секции */}
                {isExpanded && (
                  <div className="p-6 pt-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                      {section.items.map((item) => (
                        <div 
                          key={item.id} 
                          className={`border-2 rounded-xl p-6 transition-all hover:shadow-md ${
                            item.status === 'Идет набор' 
                              ? 'border-blue-300 bg-blue-50 hover:border-blue-500' 
                              : item.status === 'По запросу'
                                ? 'border-purple-300 bg-purple-50 hover:border-purple-500'
                                : 'border-green-300 bg-green-50 hover:border-green-500'
                          }`}
                        >
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h4 className="text-lg font-bold text-gray-800">{item.title}</h4>
                              <p className="text-gray-600 text-sm mt-1">{item.subtitle}</p>
                            </div>
                            <div className="flex items-center gap-2">
                              {'isNew' in item && item.isNew && (
                                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">
                                  НОВИНКА
                                </span>
                              )}
                              {'isPopular' in item && item.isPopular && (
                                <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-bold rounded-full flex items-center gap-1">
                                  <Star className="w-3 h-3" />
                                  ПОПУЛЯРНО
                                </span>
                              )}
                            </div>
                          </div>

                          <div className="space-y-3">
                            <div className="flex items-center gap-2">
                              <Users className="w-4 h-4 text-gray-500" />
                              <span className="text-gray-700 font-medium">Возраст: {item.age}</span>
                              <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                                item.status === 'Идет набор' 
                                  ? 'bg-blue-100 text-blue-700' 
                                  : item.status === 'По запросу'
                                    ? 'bg-purple-100 text-purple-700'
                                    : 'bg-green-100 text-green-700'
                              }`}>
                                {item.status}
                              </span>
                            </div>

                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4 text-gray-500" />
                              <span className="text-gray-700">{item.days}</span>
                              {item.times && (
                                <>
                                  <span className="text-gray-400">•</span>
                                  <Clock className="w-4 h-4 text-gray-500" />
                                  <span className="text-gray-700">{item.times}</span>
                                </>
                              )}
                            </div>

                            <div className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-gray-500" />
                              <span className="text-gray-700">{item.schedule}</span>
                            </div>

                            {item.spots && (
                              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-200">
                                <AlertCircle className="w-4 h-4 text-gray-500" />
                                <span className="text-gray-700 font-medium">{item.spots}</span>
                              </div>
                            )}

                            <button className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-brand-blue to-brand-green text-white rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-[1.02]">
                              Записаться на пробное занятие
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Примечания */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 border-2 border-blue-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4">📝 Важная информация:</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <span>Все занятия проводятся по адресу: <strong>с. Каменка, ул. Пионовая, д. 15 (КП «Сказка»)</strong></span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <span>Первое пробное занятие — <strong>бесплатно</strong> (по предварительной записи)</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <span>Для записи в группы «Идет набор» — свяжитесь с нами в Telegram или по телефону</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <span>Расписание может корректироваться — актуальную информацию уточняйте у администратора</span>
            </li>
          </ul>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a 
              href="https://t.me/VeterokSkaska" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary px-6 py-4 text-center"
            >
              📲 Написать в Telegram для записи
            </a>
            <a 
              href="tel:+79199259765" 
              className="btn-secondary px-6 py-4 text-center"
            >
              📞 Позвонить: +7 919 925 97 65
            </a>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default SchedulePage;