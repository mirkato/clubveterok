// src/components/sections/programs/ProgramCard.tsx
import React from 'react';
import { Calendar, Users, CreditCard, User } from 'lucide-react';
import Button from '../../ui/Button';
import { programCategories } from '../../../data/programs-datas';

interface ProgramCardProps {
  title: string;
  ageGroup: string;
  schedule: string;
  price?: number; // Делаем необязательным
  mentor: string;
  description: string;
  features: string[];
  color?: string;
  showDetailsButton?: boolean; // Новый пропс для управления отображением кнопки
}

const ProgramCard: React.FC<ProgramCardProps> = ({
  title,
  ageGroup,
  schedule,
  price = 0, // Значение по умолчанию
  mentor,
  description,
  features = [], // По умолчанию пустой массив
  color = 'brand-blue',
  showDetailsButton = true // По умолчанию показываем кнопку
}) => {
  const colorClasses = {
    'brand-blue': 'border-blue-200 hover:border-blue-300',
    'brand-green': 'border-green-200 hover:border-green-300',
    'brand-orange': 'border-orange-200 hover:border-orange-300',
    'brand-lightgreen': 'border-lime-200 hover:border-lime-300'
  };

  return (
    <div className={`bg-white rounded-xl border-2 ${colorClasses[color as keyof typeof colorClasses]} p-6 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col`}>
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
      </div>
      
      <div className="space-y-3 mb-6 flex-grow">
        <div className="flex items-center text-gray-700">
          <Users className="w-4 h-4 mr-3 text-gray-400" />
          <span>Возраст: <strong>{ageGroup}</strong></span>
        </div>
        <div className="flex items-center text-gray-700">
          <Calendar className="w-4 h-4 mr-3 text-gray-400" />
          <span>Расписание: <strong>{schedule}</strong></span>
        </div>
        <div className="flex items-center text-gray-700">
          <User className="w-4 h-4 mr-3 text-gray-400" />
          <span>Наставник: <strong>{mentor}</strong></span>
        </div>
        <div className="flex items-center text-gray-700">
          <CreditCard className="w-4 h-4 mr-3 text-gray-400" />
          <span>Стоимость: <strong className="text-lg">
            {price > 0 ? `${price.toLocaleString('ru-RU')} ₽/мес` : 'Бесплатно'}
          </strong></span>
        </div>
      </div>
      
      <div className="mb-6">
        <h4 className="font-semibold text-gray-800 mb-2">Что будет на встречах:</h4>
        <ul className="space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-brand-green mr-2">✓</span>
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mt-auto space-y-3">
        {/* Убираем fullWidth, используем w-full в className */}
        {showDetailsButton && (
          <Button
            variant="primary"
            className="w-full justify-center"
            onClick={() => {
              // Find the program category and ID
              const categories = programCategories;
              let categoryId = '';
              let programId = '';
              
              for (const category of categories) {
                const program = category.programs.find((p: any) => p.title === title);
                if (program) {
                  categoryId = category.id;
                  programId = program.id;
                  break;
                }
              }
              
              if (categoryId && programId) {
                window.location.href = `/programs/${categoryId}/${programId}`;
              }
            }}
          >
            Узнать подробнее
          </Button>
        )}
        <Button
          variant="outline"
          className="w-full justify-center"
          onClick={() => window.location.href = `/try-free?program=${title}`}
        >
          Записаться на пробное занятие
        </Button>
      </div>
    </div>
  );
};

export default ProgramCard;