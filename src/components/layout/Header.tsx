import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Активности', href: '#directions' },
    { label: 'Расписание', href: '#schedule' },
    { label: 'Стоимость', href: '#prices' },
    { label: 'Мероприятия', href: '#events' },
    { label: 'Наставники', href: '#mentors' },
    { label: 'О клубе', href: '#about' },
  ];

  return (
    <header className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
        <a href="/">
          <img 
            src="/logoveterok.png" 
            alt="Логотип компании" 
            width={180} 
            height={120}
          />
        </a>

          {/* Десктопная навигация */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-brand-blue font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-brand-blue after:transition-all"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Контакты и CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+79199259765"
              className="flex items-center text-gray-700 hover:text-brand-blue"
            >
              <span className="mr-2">📞</span>
              +7 (919) 925-97-65
            </a>
            <button className="px-6 py-2 bg-gradient-to-r from-brand-blue to-brand-green text-white rounded-lg font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all">
              Записаться
            </button>
          </div>

          {/* Бургер-меню */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <span className="text-2xl">✕</span>
            ) : (
              <span className="text-2xl">☰</span>
            )}
          </button>
        </div>

        {/* Мобильное меню */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-slideDown">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-brand-blue py-2 text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <a
                  href="tel:+79199259765"
                  className="flex items-center text-brand-blue font-semibold mb-4"
                >
                  <span className="mr-2">📞</span>
                  +7 (919) 925-97-65
                </a>
                <button className="w-full py-3 bg-gradient-to-r from-brand-blue to-brand-green text-white rounded-lg font-semibold">
                  Записаться
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;