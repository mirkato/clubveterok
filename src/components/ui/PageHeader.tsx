// src/components/ui/PageHeader.tsx
import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  bgColor?: 'brand-blue' | 'brand-green' | 'brand-orange' | 'brand-lightgreen' | 'gray' | 'white' | string;
  align?: 'left' | 'center';
  className?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  description,
  bgColor = 'brand-blue',
  align = 'center',
  className = ''
}) => {
  // Определяем классы для фона
  const bgColorClasses: Record<string, string> = {
    'brand-blue': 'bg-gradient-to-r from-brand-blue/90 to-brand-blue',
    'brand-green': 'bg-gradient-to-r from-brand-green/90 to-brand-green',
    'brand-orange': 'bg-gradient-to-r from-brand-orange/90 to-brand-orange',
    'brand-lightgreen': 'bg-gradient-to-r from-brand-lightgreen/90 to-brand-lightgreen',
    'gradient-fresh': 'gradient-fresh',
    'gradient-brand': 'gradient-brand',
    'gradient-sun': 'gradient-sun',
    'gray': 'bg-gradient-to-r from-gray-100 to-gray-200',
    'white': 'bg-white'
  };

  // Функция для получения класса фона
  const getBgClass = () => {
    return bgColorClasses[bgColor] || `bg-gradient-to-r from-${bgColor}/90 to-${bgColor}`;
  };

  // Определяем выравнивание текста
  const alignClasses = {
    'left': 'text-left',
    'center': 'text-center'
  };

  return (
    <div className={`${getBgClass()} py-12 md:py-16 lg:py-20 ${className}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className={`max-w-4xl mx-auto ${alignClasses[align]}`}>
          {subtitle && (
            <div className="mb-3 md:mb-4">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-sm md:text-base font-medium">
                {subtitle}
              </span>
            </div>
          )}
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
            {title}
          </h1>
          
          {description && (
            <p className={`text-lg md:text-xl ${bgColor === 'white' ? 'text-gray-700' : 'text-white/90'} max-w-3xl ${align === 'center' ? 'mx-auto' : ''}`}>
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;