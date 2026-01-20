import React from 'react';
import { Link } from 'react-router-dom';
import { programCategories } from '../../data/programs-datas';

const Audience: React.FC = () => {
  // Фильтруем программы по возрастным группам
  const programs3to7 = programCategories.flatMap(cat =>
    cat.programs.filter(program =>
      program.ageGroup.includes('3-7') ||
      program.ageGroup.includes('5-7') ||
      program.ageGroup.includes('4-7')
    )
  ).slice(0, 3);

  const programs7to12 = programCategories.flatMap(cat =>
    cat.programs.filter(program =>
      program.ageGroup.includes('7-12') ||
      program.ageGroup.includes('8-14') ||
      program.ageGroup.includes('5-12') ||
      program.ageGroup.includes('10-14')
    )
  ).slice(0, 3);

  const programs13to16 = programCategories.flatMap(cat =>
    cat.programs.filter(program =>
      program.ageGroup.includes('13-16') ||
      program.ageGroup.includes('10-16') ||
      program.ageGroup.includes('8-14')
    )
  ).slice(0, 3);

  // Для недавно переехавших выбираем разнообразные программы из разных категорий
  const programsNewcomers = [
    programCategories[0].programs[0], // Первая программа из первой категории
    programCategories[1].programs[0], // Первая программа из второй категории
    programCategories[2].programs[0]  // Первая программа из третьей категории
  ];

  const audiences = [
    {
      icon: '👶',
      title: 'Родитель ребёнка 3-7 лет',
      description: 'Ищете полезный досуг рядом с домом, чтобы развивать усидчивость и готовиться к школе в игровой форме.',
      suggestions: programs3to7
    },
    {
      icon: '👦',
      title: 'Родитель ребёнка 7-12 лет',
      description: 'Хотите, чтобы ребёнок проводил время с пользой, развивал таланты и находил единомышленников.',
      suggestions: programs7to12
    },
    {
      icon: '🧑',
      title: 'Родитель подростка 13-16 лет',
      description: 'Помогаете подростку найти увлечение, которое может перерасти в полезный навык для будущего.',
      suggestions: programs13to16
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: 'Недавно переехали в посёлок',
      description: 'Ищете, чем занять детей и помочь им адаптироваться в новом месте, найти друзей.',
      suggestions: programsNewcomers
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
                {audience.suggestions.map((program, i) => (
                  <Link
                    key={i}
                    to={`/programs/${programCategories.find(cat => cat.programs.includes(program))?.id || 'default'}/${program.id}`}
                    className="text-sm text-blue-600 bg-blue-50 rounded-lg py-1.5 px-3 block hover:bg-blue-100 transition-colors duration-200"
                  >
                    {program.title}
                  </Link>
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