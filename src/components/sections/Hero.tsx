import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-blue/10 via-white to-brand-green/10 pt-8 pb-20 md:pt-16">
      {/* Декоративные элементы */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-brand-blue/20 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-brand-green/20 rounded-full mix-blend-multiply filter blur-3xl animate-float animation-delay-2000"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-brand-lightgreen to-brand-orange text-white font-semibold mb-6">
            <span className="mr-2">🎯</span> Новое пространство в Каменке!
          </span>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Место, где дети<br/>
              <span className="bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">
                находят друзей
              </span>{' '}
              и увлечения
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Клуб для детей 3-16 лет прямо в Каменке.<br/>
            Здесь знакомятся, творят и развиваются в компании единомышленников.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="/programs" className="px-8 py-3 bg-gradient-to-r from-brand-blue to-brand-green text-white rounded-xl font-semibold hover:shadow-xl hover:-translate-y-1 transition-all">
              Выбрать активность →
            </a>
            <a href="/schedule" className="px-8 py-3 bg-white text-gray-800 border-2 border-brand-blue/30 rounded-xl font-semibold hover:border-brand-blue hover:bg-brand-blue/5 transition-all">
              Посмотреть расписание
            </a>
          </div>
          
          {/* Статистика */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center p-4 rounded-xl bg-gradient-to-b from-white to-brand-blue/5">
              <div className="text-3xl font-bold text-brand-blue mb-2">12+</div>
              <div className="text-gray-600">активностей</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-gradient-to-b from-white to-brand-green/5">
              <div className="text-3xl font-bold text-brand-green mb-2">250+</div>
              <div className="text-gray-600">детей в клубе</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-gradient-to-b from-white to-brand-orange/5">
              <div className="text-3xl font-bold text-brand-orange mb-2">5 мин</div>
              <div className="text-gray-600">от дома</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;