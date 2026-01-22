import React, { useState } from 'react';

const MapSection: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  
  // Список посёлков с расстоянием и временем
  const locations = [
    { 
      name: 'КП "Сказка', 
      distance: '0.5 км', 
      time: '5 мин пешком', 
      highlight: true,
      description: 'Мы находимся здесь!'
    },
    { 
      name: 'Каменка', 
      distance: '3,1 км', 
      time: '6 мин на машине',
      icon: '🚗'
    },
    { 
      name: 'Кулига', 
      distance: '4,3 км', 
      time: '8 мин на машине',
      icon: '🚗'
    },
    { 
      name: 'Альпийская долина', 
      distance: '1 км', 
      time: '15 мин пешком',
    },
    { 
      name: 'Насекина', 
      distance: '3,7 км', 
      time: '7 мин на машине',
      icon: '🚗'
    },
    { 
      name: 'Коняшина', 
      distance: '7,4 км', 
      time: '11 мин на машине',
      icon: '🚗'
    },
    { 
      name: 'Речкина', 
      distance: '18.9 км', 
      time: '21 мин на машине',
      icon: '🚗'
    },
    { 
      name: 'КП "Онегин"', 
      distance: '8 км', 
      time: '10 мин на машине',
      icon: '🚗'
    },
    { 
      name: 'КП "Новокаменский"', 
      distance: '9,2 км', 
      time: '13 мин на машине',
      icon: '🚗'
    },
    { 
      name: 'Кулаково', 
      distance: '14 км', 
      time: '16 мин на машине',
      icon: '🚗'
    }
  ];

  // Функция для построения маршрута
  const handleBuildRoute = () => {
    setIsLoading(true);
    
    // Проверяем поддержку геолокации
    if (!navigator.geolocation) {
      alert('Геолокация не поддерживается вашим браузером');
      setIsLoading(false);
      return;
    }

    // Получаем текущее местоположение пользователя
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        
        // Адрес клуба (село Каменка, ул. Пионовая, д. 15)
        const destination = 'село Каменка, ул. Пионовая, д. 15';
        
        // Создаем URL для Яндекс.Карт с маршрутом
        const yandexMapsUrl = `https://yandex.ru/maps/?rtext=${latitude},${longitude}~${encodeURIComponent(destination)}&rtt=auto`;
        
        // Открываем Яндекс.Карты в новой вкладке
        window.open(yandexMapsUrl, '_blank');
        
        setIsLoading(false);
      },
      (error) => {
        console.error('Ошибка получения местоположения:', error);
        alert('Не удалось получить ваше местоположение. Пожалуйста, введите адрес вручную в Яндекс.Картах.');
        
        // Открываем Яндекс.Карты без маршрута, чтобы пользователь мог ввести адрес вручную
        const destination = 'село Каменка, ул. Пионовая, д. 15';
        const yandexMapsUrl = `https://yandex.ru/maps/?text=${encodeURIComponent(destination)}`;
        window.open(yandexMapsUrl, '_blank');
        
        setIsLoading(false);
      }
    );
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Удобное расположение в{' '}
            <span className="bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">
              на Ирбитском тракте
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
                <h4 className="font-bold text-gray-900 mb-2">Детская площадка</h4>
                <p className="text-sm text-gray-600">Всего 100 м. от клуба</p>
              </div>
            </div>
          </div>

          {/* Правая часть - Яндекс карта */}
          <div className="relative">
            <div className="bg-gradient-to-br from-brand-blue/5 to-brand-green/5 rounded-2xl p-8 border-2 border-brand-blue/20">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                Схема расположения
              </h3>
              
              <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-center">
                <div style={{position: 'relative', overflow: 'hidden'}} className="w-full h-80">
                  <a href="https://yandex.ru/maps/org/detskiy_klub_veterok/110338595840/?utm_medium=mapframe&utm_source=maps" style={{color: '#eee', fontSize: '12px', position: 'absolute', top: '0px'}}>Детский клуб Ветерок</a>
                  <a href="https://yandex.ru/maps/11176/tyumen-oblast/category/further_education/184106162/?utm_medium=mapframe&utm_source=maps" style={{color: '#eee', fontSize: '12px', position: 'absolute', top: '14px'}}>Дополнительное образование в Тюменской области</a>
                  <iframe src="https://yandex.ru/map-widget/v1/?ll=65.077263%2C57.256385&mode=search&oid=110338595840&ol=biz&sctx=ZAAAAAgBEAAaKAoSCQYrTrUWRVBAEQkyAiocn0xAEhIJebEwRE5frz8R1CzQ7pBioD8iBgABAgMEBSgKOABAk40GSAFqAnJ1nQHNzMw9oAEAqAEAvQGvqnmGggJJ0LrQsNC6INCy0YHRgtCw0LLQuNGC0Ywg0LrQsNGA0YLRgyDQv9GA0L7QtdC30LTQsCDQuNC3IDJnaXMg0L3QsCDRgdCw0LnRgooCAJICAJoCDGRlc2t0b3AtbWFwcw%3D%3D&sll=65.077263%2C57.256385&source=serp_navig&sspn=0.013562%2C0.004688&text=%D0%BA%D0%B0%D0%BA%20%D0%B2%D1%81%D1%82%D0%B0%D0%B2%D0%B8%D1%82%D1%8C%20%D0%BA%D0%B0%D1%80%D1%82%D1%83%20%D0%BF%D1%80%D0%BE%D0%B5%D0%B7%D0%B4%D0%B0%20%D0%B8%D0%B7%202gis%20%D0%BD%D0%B0%20%D1%81%D0%B0%D0%B9%D1%82&z=16.6" width="100%" height="300" frameBorder="1" allowFullScreen={true} style={{position: 'relative'}} title="Карта проезда до Детского клуба Ветерок"></iframe>
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
                    <span>✉️ info@clubveterok.ru</span>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={handleBuildRoute}
                disabled={isLoading}
                className="mt-4 w-full py-3 bg-gradient-to-r from-brand-blue to-brand-green text-white rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-70"
              >
                {isLoading ? 'Определение местоположения...' : 'Построить маршрут на Яндекс.Картах →'}
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
      </div>
    </section>
  );
};

export default MapSection;