import React from 'react';
import { Link } from 'react-router-dom';
import { topPrograms } from '../../data/programs-datas';
import type { Program } from '../../types/program-types';

// Функция для преобразования heroBgColor в цветовую схему
const getColorScheme = (heroBgColor: string) => {
  switch (heroBgColor) {
    case 'brand-blue':
      return 'blue';
    case 'brand-green':
      return 'green';
    case 'brand-orange':
      return 'orange';
    case 'brand-lightgreen':
      return 'lightgreen';
    default:
      return 'blue';
  }
};

// Функция для получения эмодзи по ID программы
const getEmojiForProgram = (programId: string) => {
  const emojiMap: Record<string, string> = {
    'scratch': '👨‍💻',
    'hip-hop': '💃',
    'art-workshop': '🎨',
    'vr-ar': '🔬',
    'clean-writing': '✍️',
    'holiday-programs': '🎪',
    'school-prep': '📚',
    'calligraphy': '✍️',
    'functional-reading': '📖',
    'logoped': '🗣️',
    'art-atelier': '🧵',
    'magic-brush': '🖌️',
    'melody-canvas': '🎨',
    'fashion-theater': '👗',
    'cybertonic': '🤖',
    'karate-kids': '🥋'
  };
  return emojiMap[programId] || '🌟';
};

const Programs: React.FC = () => {
  // Преобразуем данные из нового формата в формат, используемый в компоненте
  const programs = topPrograms.map((program: Program) => ({
    icon: getEmojiForProgram(program.id),
    title: program.title,
    age: program.ageGroup,
    description: program.description,
    details: [
      `📅 ${program.schedule}`,
      `👤 ${program.mentor}`,
      `💰 ${program.price} руб/мес`
    ],
    price: `${program.price} руб/мес`,
    color: program.pageData ? getColorScheme(program.pageData.heroBgColor) : 'blue'
  }));

  const colorClasses = {
    blue: 'border-brand-blue/30 hover:border-brand-blue bg-gradient-to-b from-white to-brand-blue/5',
    green: 'border-brand-green/30 hover:border-brand-green bg-gradient-to-b from-white to-brand-green/5',
    lightgreen: 'border-brand-lightgreen/30 hover:border-brand-lightgreen bg-gradient-to-b from-white to-brand-lightgreen/5',
    orange: 'border-brand-orange/30 hover:border-brand-orange bg-gradient-to-b from-white to-brand-orange/5',
  };

  const buttonColorClasses = {
    blue: 'bg-gradient-to-r from-brand-blue to-brand-blue-light hover:from-brand-blue-dark hover:to-brand-blue',
    green: 'bg-gradient-to-r from-brand-green to-brand-lightgreen hover:from-brand-green-dark hover:to-brand-green',
    lightgreen: 'bg-gradient-to-r from-brand-lightgreen to-brand-green hover:from-green-500 hover:to-brand-lightgreen',
    orange: 'bg-gradient-to-r from-brand-orange to-yellow-400 hover:from-amber-500 hover:to-brand-orange',
  };

  return (
    <section id="directions" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Наши{' '}
            <span className="bg-gradient-to-r from-brand-blue via-brand-green to-brand-orange bg-clip-text text-transparent">
              активности
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Выберите то, что увлечёт вашего ребёнка
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index} 
              className={`
                rounded-2xl border-2 p-6 hover:shadow-xl transition-all duration-300
                ${colorClasses[program.color as keyof typeof colorClasses]}
              `}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-3xl">{program.icon}</div>
                <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
                  {program.age}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {program.title}
              </h3>
              
              <p className="text-gray-600 mb-4">
                {program.description}
              </p>
              
              <div className="space-y-2 mb-6">
                {program.details.map((detail, i) => (
                  <div key={i} className="flex items-center text-sm text-gray-700">
                    <div className={`w-1.5 h-1.5 rounded-full mr-2 ${
                      program.color === 'blue' ? 'bg-brand-blue' :
                      program.color === 'green' ? 'bg-brand-green' :
                      program.color === 'lightgreen' ? 'bg-brand-lightgreen' :
                      'bg-brand-orange'
                    }`}></div>
                    {detail}
                  </div>
                ))}
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="text-lg font-bold text-gray-900">
                  {program.price}
                </div>
                <button className={`px-4 py-2 text-white rounded-lg font-medium hover:shadow-md transition-all ${buttonColorClasses[program.color as keyof typeof buttonColorClasses]}`}>
                  Попробовать
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/programs"
            className="inline-flex items-center px-6 py-3 border-2 border-brand-blue text-brand-blue rounded-xl hover:bg-brand-blue/5 font-medium transition-all"
          >
            Все активности клуба →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Programs;