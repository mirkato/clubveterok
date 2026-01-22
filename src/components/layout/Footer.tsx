import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import Container from './Container';
import Button from '../ui/Button';
import { topPrograms, programCategories } from '../../data/programs-datas';
import type { Program } from '../../types/program-types';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Колонка 1: О клубе */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <a href="/">
                 <img 
                  src="/logoveterok.png" 
                  alt="Логотип компании" 
                  width={180} 
                  height={120}
                  />
              </a>
            </div>
            
            <div className="space-y-3">
              <a 
                href="https://vk.com/clubveterok72" 
                className="flex items-center text-gray-300 hover:text-white"
              >
                <Send className="w-4 h-4 mr-2" />
                ВКонтакте
              </a>
              <a 
                href="https://t.me/+E4OwQ9wH7tdkZTIy" 
                className="flex items-center text-gray-300 hover:text-white"
              >
                <Send className="w-4 h-4 mr-2" />
                Telegram-канал
              </a>
              <a 
                href="https://t.me/VeterokSkaska" 
                className="flex items-center text-gray-300 hover:text-white"
              >
                <Send className="w-4 h-4 mr-2" />
                Telegram-чат
              </a>
            </div>
          </div>
          
          {/* Колонка 2: Направления */}
          <div>
            <h3 className="text-lg font-bold mb-6">Направления</h3>
            <ul className="space-y-3">
              {topPrograms.slice(0, 5).map((program: Program) => (
                <li key={program.id}>
                  <a
                    href={`/programs/${programCategories.find(cat => cat.programs.includes(program))?.id || 'default'}/${program.id}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {program.title}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/programs"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Все направления →
                </a>
              </li>
            </ul>
          </div>
          
          {/* Колонка 3: Родителям */}
          <div>
            <h3 className="text-lg font-bold mb-6">Родителям</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  О клубе
                </a>
              </li>
              <li>
                <a
                  href="/schedule"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Расписание
                </a>
              </li>
              <li>
                <a
                  href="/teachers"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Наставники
                </a>
              </li>
              <li>
                <a
                  href="/events"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Мероприятия
                </a>
              </li>
            </ul>
          </div>
          
          {/* Колонка 4: Контакты */}
          <div>
            <h3 className="text-lg font-bold mb-6">Контакты</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-indigo-400 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  Каменка, ул. Пионовая, 15 (КП «Сказка»)
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-indigo-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">+7 (919) 925-97-65</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-indigo-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">info@clubveterok.ru</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-indigo-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">
                  Пн-Пт: 10:00-20:00<br/>
                  Сб-Вс: 9:00-18:00
                </span>
              </div>
            </div>
            
            <Button 
              variant="primary" 
              className="mt-6 w-full"
              onClick={() => window.location.href = 'tel:+79199259765'}
            >
              Позвонить нам
            </Button>
          </div>
        </div>
        
        {/* Нижняя часть */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2024 Детский клуб «Ветерок». ИП Шелихов Д.А.
          </div>
          <div className="flex space-x-6">
            <a
              href="/privacy-policy"
              className="text-gray-500 hover:text-gray-300 text-sm"
            >
              Политика конфиденциальности
            </a>
            <a 
              href="/oferta" 
              className="text-gray-500 hover:text-gray-300 text-sm"
            >
              Договор-оферта
            </a>
            <a 
              href="/sitemap" 
              className="text-gray-500 hover:text-gray-300 text-sm"
            >
              Карта сайта
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;