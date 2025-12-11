import React from 'react';

const Audience: React.FC = () => {
  const audiences = [
    {
      icon: '👶',
      title: 'Родитель ребёнка 3-7 лет',
      description: 'Ищете полезный досуг рядом с домом, чтобы развивать усидчивость и готовиться к школе в игровой форме.',
      suggestions: ['Развитие мелкой моторики', 'Творческие мастерские', 'Игровые активности']
    },
    {
      icon: '👦',
      title: 'Родитель ребёнка 7-12 лет',
      description: 'Хотите, чтобы ребёнок проводил время с пользой, развивал таланты и находил единомышленников.',
      suggestions: ['Создание игр на Scratch', 'Графический дизайн', 'Хип-хоп']
    },
    {
      icon: '🧑',
      title: 'Родитель подростка 13-16 лет',
      description: 'Помогаете подростку найти увлечение, которое может перерасти в полезный навык для будущего.',
      suggestions: ['VR/AR мастерская', '3D моделирование', 'Театр моды']
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: 'Недавно переехали в посёлок',
      description: 'Ищете, чем занять детей и помочь им адаптироваться в новом месте, найти друзей.',
      suggestions: ['Разовые мастер-классы', 'Игровые встречи', 'Каникулярные программы']
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Наш клуб подходит, если вы...
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {audiences.map((audience, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="text-4xl mb-4">{audience.icon}</div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {audience.title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {audience.description}
              </p>
              
              <div className="space-y-2">
                <div className="text-sm font-semibold text-gray-700 mb-2">
                  Попробуйте:
                </div>
                {audience.suggestions.map((suggestion, i) => (
                  <div 
                    key={i} 
                    className="text-sm text-blue-600 bg-blue-50 rounded-lg py-1.5 px-3"
                  >
                    {suggestion}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Audience;