import React from 'react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: '📍',
      title: 'Рядом с домом',
      description: 'Больше не нужно ехать в город за интересным досугом. Мы находимся прямо в Каменке, в 5 минутах ходьбы.',
      additional: 'Удобно для жителей: Каменка, Кулига, Альпийская долина, Насекина, Коняшина, Речкина',
      color: 'blue' // 50% голубой
    },
    {
      icon: '🚀',
      title: 'Современные активности',
      description: 'Создание игр на Scratch, погружение в VR/AR, графический дизайн. То, что увлекает современных детей.',
      color: 'green' // 20% зеленый
    },
    {
      icon: '🌟',
      title: 'Опытные наставники',
      description: 'Каждый ведущий — практик в своей области с опытом работы с детьми от 3 лет.',
      color: 'lightgreen' // 20% светлозеленый
    },
    {
      icon: '💝',
      title: 'Доступные цены',
      description: 'Месяц встреч от 2500 рублей. Есть семейные скидки и программа лояльности.',
      additional: 'Первая встреча — бесплатно!',
      color: 'orange' // 10% оранжевый
    }
  ];

  const colorClasses = {
    blue: 'border-brand-blue/20 hover:border-brand-blue bg-gradient-to-b from-white to-brand-blue/5',
    green: 'border-brand-green/20 hover:border-brand-green bg-gradient-to-b from-white to-brand-green/5',
    lightgreen: 'border-brand-lightgreen/20 hover:border-brand-lightgreen bg-gradient-to-b from-white to-brand-lightgreen/5',
    orange: 'border-brand-orange/20 hover:border-brand-orange bg-gradient-to-b from-white to-brand-orange/5',
  };

  const iconBgClasses = {
    blue: 'bg-gradient-to-br from-brand-blue to-brand-blue-light',
    green: 'bg-gradient-to-br from-brand-green to-brand-green-light',
    lightgreen: 'bg-gradient-to-br from-brand-lightgreen to-brand-green',
    orange: 'bg-gradient-to-br from-brand-orange to-yellow-400',
  };

  const textColorClasses = {
    blue: 'text-brand-blue',
    green: 'text-brand-green',
    lightgreen: 'text-brand-lightgreen',
    orange: 'text-brand-orange',
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Почему выбирают{' '}
            <span className="bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">
              «Ветерок»?
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Пространство для творчества, самовыражения и интересного досуга
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={`
                rounded-2xl border-2 p-6 hover:shadow-xl transition-all duration-300
                ${colorClasses[benefit.color as keyof typeof colorClasses]}
              `}
            >
              <div className={`w-14 h-14 ${iconBgClasses[benefit.color as keyof typeof iconBgClasses]} rounded-xl flex items-center justify-center text-2xl text-white mb-4 mx-auto`}>
                {benefit.icon}
              </div>
              
              <h3 className={`text-xl font-bold mb-3 text-center ${textColorClasses[benefit.color as keyof typeof textColorClasses]}`}>
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 mb-4 text-center">
                {benefit.description}
              </p>
              
              {benefit.additional && (
                <p className={`text-sm font-medium text-center ${textColorClasses[benefit.color as keyof typeof textColorClasses]}`}>
                  {benefit.additional}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;