import React, { useState } from 'react';
import { Check, Shield, Send } from 'lucide-react';
import Container from '../layout/Container';
import Card from '../ui/Card';
import Button from '../ui/Button';

const CTASection: React.FC = () => {
  const [selectedProgram, setSelectedProgram] = useState<string>('');

  const programs = [
    'Scratch-программирование (7-14 лет)',
    'Хип-хоп (10-16 лет)',
    'Рисование (5-12 лет)',
    'Подготовка к школе (5-7 лет)',
    'Другое (укажите в комментарии)'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log('Form submitted:', selectedProgram);
  };

  return (
    <section id="contacts" className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Левая часть */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Запишитесь на{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                бесплатное
              </span>{' '}
              пробное занятие
            </h2>
            
            <div className="space-y-4 mb-8">
              {[
                'Ребёнок попробует, понравится ли ему',
                'Познакомится с преподавателем',
                'Увидит, как проходят занятия',
                'Вы получите обратную связь'
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
              <Shield className="w-8 h-8 text-indigo-500 mr-4" />
              <div>
                <div className="font-semibold text-gray-900">Гарантия</div>
                <div className="text-sm text-gray-600">
                  Никакого спама. Только подтверждение записи и напоминание о занятии.
                </div>
              </div>
            </div>
          </div>
          
          {/* Правая часть - форма */}
          <Card>
            <form onSubmit={handleSubmit}>
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Выберите направление
              </h3>
              
              <div className="space-y-3 mb-6">
                {programs.map((program) => (
                  <label
                    key={program}
                    className={`
                      flex items-center p-3 rounded-lg border cursor-pointer
                      transition-all duration-200
                      ${selectedProgram === program 
                        ? 'border-indigo-500 bg-indigo-50' 
                        : 'border-gray-200 hover:border-gray-300'
                      }
                    `}
                  >
                    <input
                      type="radio"
                      name="program"
                      value={program}
                      checked={selectedProgram === program}
                      onChange={(e) => setSelectedProgram(e.target.value)}
                      className="mr-3 h-4 w-4 text-indigo-600"
                    />
                    <span className="text-gray-700">{program}</span>
                  </label>
                ))}
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Имя родителя"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
                  required
                />
                <input
                  type="tel"
                  placeholder="Ваш телефон"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
                  required
                />
              </div>
              
              <input
                type="text"
                placeholder="Имя и возраст ребёнка"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition mb-4"
                required
              />
              
              <textarea
                placeholder="Комментарий или вопрос (необязательно)"
                rows={3}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition mb-6 resize-none"
              />
              
              <div className="text-xs text-gray-500 mb-6">
                Нажимая кнопку, вы соглашаетесь с{' '}
                <a href="/privacy" className="text-indigo-600 hover:underline">
                  политикой конфиденциальности
                </a>
              </div>
              
              <Button 
                type="submit" 
                variant="primary" 
                fullWidth 
                size="lg"
                icon={Send}
                iconPosition="right"
              >
                Записаться на пробное
              </Button>
              
              <div className="text-center mt-4 text-sm text-gray-600">
                Или напишите нам в{' '}
                <a 
                  href="https://t.me/VeterokSkaska" 
                  className="text-indigo-600 font-semibold hover:underline"
                >
                  Telegram →
                </a>
              </div>
            </form>
          </Card>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;