// src/data/programs-data.ts
import { 
  BookOpen, 
  Palette, 
  Code, 
  Music
} from 'lucide-react';
// Используем относительный путь и правильный импорт
import type { ProgramCategory } from '../types/program-types';

// Создаем данные с простой структурой
export const programCategories: ProgramCategory[] = [
  {
    id: 'school-prep',
    title: 'Подготовка к школе и развитие',
    description: 'Встречи, которые помогают детям 3-7 лет адаптироваться к новому ритму через игру и творчество.',
    icon: BookOpen,
    color: 'brand-blue',
    programs: [
      {
        id: 'clean-writing',
        title: 'Чистописание и развитие руки',
        ageGroup: '5-7 лет',
        schedule: 'Вт/Чт 17:00-18:00',
        price: 2800,
        mentor: 'Анна С.',
        description: 'Игровые упражнения для развития мелкой моторики и аккуратного письма.',
        features: ['Игровые прописи', 'Пальчиковая гимнастика', 'Творческие задания']
      },
      {
        id: 'school-prep',
        title: 'Подготовка к школе',
        ageGroup: '5-7 лет',
        schedule: 'Пн/Ср/Пт 10:00-11:30',
        price: 3200,
        mentor: 'Мария К.',
        description: 'Комплексная встреча для будущих первоклассников: чтение, счёт, логика.',
        features: ['Знакомство с буквами и цифрами', 'Развитие логики', 'Учимся работать в группе']
      }
    ]
  },
  {
    id: 'creativity',
    title: 'Творчество и самовыражение',
    description: 'Мастерские, где дети раскрывают свой творческий потенциал через разные техники и материалы.',
    icon: Palette,
    color: 'brand-green',
    programs: [
      {
        id: 'drawing',
        title: 'Рисование и живопись',
        ageGroup: '4-12 лет',
        schedule: 'Пн/Ср 16:00-17:30, Сб 11:00-12:30',
        price: 3000,
        mentor: 'Ольга Т.',
        description: 'Знакомство с различными художественными техниками и материалами.',
        features: ['Акварель и гуашь', 'Пастель и карандаши', 'Нетрадиционные техники']
      },
      {
        id: 'fashion-theater',
        title: 'Театр моды "Силуэты звёзд"',
        ageGroup: '8-16 лет',
        schedule: 'Вт/Чт 18:00-19:30',
        price: 3500,
        mentor: 'Елена П.',
        description: 'Создание костюмов, дефиле и фотосессии для подростков.',
        features: ['Основы дизайна одежды', 'Создание костюмов', 'Фотосессии и показы']
      }
    ]
  },
  {
    id: 'it-tech',
    title: 'IT и технологии',
    description: 'Воркшопы для знакомства с миром технологий в игровой и доступной форме.',
    icon: Code,
    color: 'brand-orange',
    programs: [
      {
        id: 'scratch',
        title: 'Программирование в Scratch',
        ageGroup: '7-12 лет',
        schedule: 'Вт/Чт 16:00-17:30, Сб 10:00-11:30',
        price: 3500,
        mentor: 'Дмитрий Ш.',
        description: 'Создание первых игр и анимаций в визуальной среде программирования.',
        features: ['Создание собственной игры', 'Основы алгоритмов', 'Работа в команде']
      }
    ]
  },
  {
    id: 'dance-sport',
    title: 'Танцы и активность',
    description: 'Движение, ритм и здоровый образ жизни в формате весёлых встреч.',
    icon: Music,
    color: 'brand-lightgreen',
    programs: [
      {
        id: 'hip-hop',
        title: 'Хип-хоп для подростков',
        ageGroup: '10-16 лет',
        schedule: 'Пн/Ср/Пт 17:00-18:30',
        price: 3200,
        mentor: 'Артём Л.',
        description: 'Изучение современных танцевальных направлений и участие в флешмобах.',
        features: ['Основы хип-хопа', 'Работа в команде', 'Участие в локальных мероприятиях']
      }
    ]
  }
];

// Для главной страницы - ТОП активностей
export const topPrograms = programCategories
  .flatMap(cat => cat.programs)
  .filter(program => ['scratch', 'hip-hop', 'school-prep', 'clean-writing', 'drawing', 'fashion-theater']
    .includes(program.id))
  .slice(0, 6);