import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning';
}

const Badge: React.FC<BadgeProps> = ({ 
  children, 
  variant = 'primary' 
}) => {
  const variants = {
    primary: 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white',
    secondary: 'bg-gray-100 text-gray-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800'
  };
  
  return (
    <span className={`
      inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
      ${variants[variant]}
    `}>
      {children}
    </span>
  );
};

export default Badge;