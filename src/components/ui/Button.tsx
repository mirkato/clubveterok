import React from 'react';
import type { LucideIcon } from 'lucide-react'; // Правильный импорт типа

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: LucideIcon; // Используем правильный тип
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon: Icon, // Переименовываем в Icon с большой буквы
  iconPosition = 'left',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-gradient-to-r from-brand-blue to-brand-green text-white hover:from-brand-blue-dark hover:to-brand-green-dark shadow-lg hover:shadow-xl active:scale-95',
    secondary: 'bg-white text-gray-800 border border-gray-300 hover:bg-gray-50 hover:border-gray-400 shadow-sm hover:shadow-md',
    outline: 'bg-transparent text-brand-blue border border-brand-blue hover:bg-brand-blue/10',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100'
  };
  
  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg'
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="mr-2 h-5 w-5" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="ml-2 h-5 w-5" />}
    </button>
  );
};

export default Button;