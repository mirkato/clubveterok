// src/components/sections/programs/CategoryCard.tsx
import React from 'react';
import type { ProgramCategory } from '../../../types/program-types';
import Button from '../../ui/Button';

interface CategoryCardProps {
  category: ProgramCategory;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const { id, title, description, icon: Icon, color } = category;
  
  // Определяем цвета для карточки
  const colorClasses = {
    'brand-blue': 'border-blue-200 hover:border-blue-300 bg-blue-50',
    'brand-green': 'border-green-200 hover:border-green-300 bg-green-50',
    'brand-orange': 'border-orange-200 hover:border-orange-300 bg-orange-50',
    'brand-lightgreen': 'border-lime-200 hover:border-lime-300 bg-lime-50'
  };
  
  const iconColorClasses = {
    'brand-blue': 'text-blue-600',
    'brand-green': 'text-green-600',
    'brand-orange': 'text-orange-600',
    'brand-lightgreen': 'text-lime-600'
  };

  return (
    <div className={`rounded-xl border-2 ${colorClasses[color as keyof typeof colorClasses] || 'border-gray-200'} p-6 transition-all hover:shadow-md`}>
      <div className="flex items-start mb-4">
        {Icon && (
          <div className={`mr-4 mt-1 ${iconColorClasses[color as keyof typeof iconColorClasses] || 'text-gray-600'}`}>
            <Icon className="w-8 h-8" />
          </div>
        )}
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
      
      <div className="mt-4">
        <Button 
          variant="primary" 
          className="w-full justify-center"
          onClick={() => window.location.href = `/programs/${id}`}
        >
          Подробнее
        </Button>
      </div>
    </div>
  );
};

export default CategoryCard;