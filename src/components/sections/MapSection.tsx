import React from 'react';

const MapSection: React.FC = () => {
  // Список посёлков с расстоянием и временем
  const locations = [
    { 
      name: 'Каменка', 
      distance: '0.5 км', 
      time: '5 мин пешком', 
      highlight: true,
      description: 'Мы находимся здесь!'
    },
    { 
      name: 'Кулига', 
      distance: '3 км', 
      time: '10 мин на машине',
      icon: '🚗'
    },
    { 
      name: 'Альпийская долина', 
      distance: '5 км', 
      time: '15 мин на машине',
      icon: '🚗'
    },
    { 
      name: 'Насекина', 
      distance: '2 км', 
      time: '8 мин на машине',
      icon: '🚗'
    },
    { 
      name: 'Коняшина', 
      distance: '4 км', 
      time: '12 мин на машине',
      icon: '🚗'
    },
    { 
      name: 'Речкина', 
      distance: '3 км', 
      time: '10 мин на машине',
      icon: '🚗'
    }
  ];

  // Посёлки для схематичной карты
  const mapPoints = [
    { top: '35%', left: '45%', name: 'Каменка', isCenter: true },
    { top: '25%', left: '60%', name: 'Кулига' },
    { top: '15%', left: '70%', name: 'Альпийская долина' },
    { top: '50%', left: '70%', name: 'Насекина' },
    { top: '65%', left: '55%', name: 'Коняшина' },
    { top: '55%', left: '30%', name: 'Речкина' },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Удобное расположение в{' '}
            <span className="bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">
              центре Каменского округа
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            До нас легко добраться из всех ближайших посёлков
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Левая часть - список посёлков */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-brand-blue/20">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="mr-2">📍</span> Мы находимся в Каменке
              </h3>
              <p className="text-gray-600 mb-6">
                Клуб "Ветерок" расположен в самом центре Каменского муниципального округа, 
                что делает нас доступными для жителей всех ближайших посёлков.
              </p>
              
              <div className="space-y-4">
                {locations.map((location, index) => (
                  <div 
                    key={index}
                    className={`
                      flex items-center justify-between p-4 rounded-xl border-2 transition-all
                      ${location.highlight 
                        ? 'bg-gradient-to-r from-brand-blue/10 to-brand-green/10 border-brand-blue' 
                        : 'bg-white border-gray-200 hover:border-brand-blue/50 hover:shadow-md'
                      }
                    `}
                  >
                    <div className="flex items-center">
                      <div className={`
                        w-10 h-10 rounded-full flex items-center justify-center mr-4
                        ${location.highlight 
                          ? 'bg-gradient-to-br from-brand-blue to-brand-green text-white' 
                          : 'bg-gray-100 text-gray-700'
                        }
                      `}>
                        {location.icon || (location.highlight ? '🏠' : '📍')}
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">{location.name}</div>
                        {location.description && (
                          <div className="text-sm text-brand-blue font-medium">
                            {location.description}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">{location.distance}</div>
                      <div className="font-medium text-gray-900">{location.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Дополнительная информация */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-brand-blue/10 to-brand-green/10 rounded-xl p-4">
                <div className="text-2xl mb-2">🅿️</div>
                <h4 className="font-bold text-gray-900 mb-2">Бесплатная парковка</h4>
                <p className="text-sm text-gray-600">Для родителей, кто привозит детей на машине</p>
              </div>
              <div className="bg-gradient-to-br from-brand-lightgreen/10 to-brand-orange/10 rounded-xl p-4">
                <div className="text-2xl mb-2">🚶</div>
                <h4 className="font-bold text-gray-900 mb-2">Пешком из Каменки</h4>
                <p className="text-sm text-gray-600">Всего 5-7 минут от любой точки посёлка</p>
              </div>
            </div>
          </div>

          {/* Правая часть - схематичная карта */}
          <div className="relative">
            <div className="bg-gradient-to-br from-brand-blue/5 to-brand-green/5 rounded-2xl p-8 border-2 border-brand-blue/20">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                Схема расположения
              </h3>
              
              <div className="relative h-96 bg-gradient-to-br from-blue-50 to-green-50 rounded-xl overflow-hidden">
                {/* Фон карты с декоративными элементами */}
                <div className="absolute inset-0">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-brand-blue/20 to-brand-green/20 rounded-full"></div>
                  
                  {/* Дороги */}
                  <div className="absolute top-1/2 left-1/4 right-1/4 h-1 bg-gray-300/50"></div>
                  <div className="absolute top-1/4 bottom-1/4 left-1/2 w-1 bg-gray-300/50"></div>
                  
                  {/* Точки на карте */}
                  {mapPoints.map((point, index) => (
                    <div
                      key={index}
                      className="absolute"
                      style={{ top: point.top, left: point.left }}
                    >
                      <div className={`
                        relative flex items-center justify-center w-12 h-12 rounded-full
                        ${point.isCenter 
                          ? 'bg-gradient-to-br from-brand-blue to-brand-green animate-pulse-slow' 
                          : 'bg-white border-2 border-brand-blue/50'
                        }
                        shadow-lg
                      `}>
                        <span className={`font-bold ${point.isCenter ? 'text-white' : 'text-brand-blue'}`}>
                          {point.isCenter ? 'В' : point.name.charAt(0)}
                        </span>
                        
                        {/* Линии к центру для периферийных точек */}
                        {!point.isCenter && (
                          <div className="absolute w-20 h-0.5 bg-brand-blue/30 -left-20 top-1/2 transform -translate-y-1/2"></div>
                        )}
                        
                        {/* Подпись */}
                        <div className={`
                          absolute whitespace-nowrap text-sm font-medium px-2 py-1 rounded
                          ${point.isCenter 
                            ? 'bottom-full mb-2 bg-gradient-to-r from-brand-blue to-brand-green text-white' 
                            : 'top-full mt-2 bg-white text-gray-900 border border-gray-200'
                          }
                          shadow-sm
                        `}>
                          {point.name}
                          {point.isCenter && ' • Клуб "Ветерок"'}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Легенда карты */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gradient-to-br from-brand-blue to-brand-green rounded-full mr-2"></div>
                  <span className="text-sm text-gray-700">Клуб "Ветерок"</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-white border-2 border-brand-blue/50 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-700">Ближайшие посёлки</span>
                </div>
              </div>
            </div>

            {/* Адрес */}
            <div className="mt-6 bg-white rounded-xl p-6 border-2 border-brand-orange/20 shadow-sm">
              <div className="flex items-start">
                <div className="text-2xl mr-4">🏠</div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Точный адрес</h4>
                  <p className="text-gray-700">
                    село Каменка, ул. Пионовая, д. 15<br/>
                    (Коттеджный посёлок «Сказка»)
                  </p>
                  <div className="mt-3 flex items-center text-sm text-gray-600">
                    <span className="mr-4">📞 +7 (919) 925-97-65</span>
                    <span>✉️ club@veterok.ru</span>
                  </div>
                </div>
              </div>
              
              <button className="mt-4 w-full py-3 bg-gradient-to-r from-brand-blue to-brand-green text-white rounded-lg font-semibold hover:shadow-lg transition-all">
                Построить маршрут на Яндекс.Картах →
              </button>
            </div>
          </div>
        </div>

        {/* Дополнительная информация */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-brand-blue/10 to-brand-green/10 rounded-xl">
            <span className="text-2xl mr-3">🚌</span>
            <div className="text-left">
              <div className="font-semibold text-gray-900">Транспортная доступность</div>
              <div className="text-sm text-gray-600">
                Из всех посёлков есть регулярное автобусное сообщение до Каменки
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;