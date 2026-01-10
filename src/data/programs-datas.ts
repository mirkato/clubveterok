// src/data/programs-data.ts
import { 
  BookOpen, 
  Palette, 
  Code, 
  Music
} from 'lucide-react';
import type { ProgramCategory, ProgramDetailPage } from '../types/program-types';

// Расширяем тип программы для полной страницы
export interface ExtendedProgram {
  id: string;
  title: string;
  ageGroup: string;
  schedule: string;
  price: number;
  mentor: string;
  description: string;
  features: string[];
  // Поля для страницы лендинга
  pageData?: {
    heroBgColor: string; // цвет фона для PageHeader
    subtitle: string; // подзаголовок
    tagline: string; // слоган
    taglineDescription: string; // описание слогана
    conceptTitle: string; // заголовок концепции
    conceptDescription: string; // описание концепции
    conceptPoints: Array<{ title: string; description: string }>; // блоки концепции
    platformsTitle: string; // заголовок платформ
    platformsDescription: string; // описание платформ
    platforms: Array<{ // платформы/разделы
      id: string;
      title: string;
      borderColor: string; // цвет бордера
      items: Array<{ description: string; details?: string }>;
    }>;
    howItWorksTitle: string; // как проходят занятия
    howItWorks: {
      format: string;
      structure: Array<{ title: string; description: string }>;
      features: Array<{ description: string; details?: string }>;
    };
    whyUsTitle: string; // почему мы
    whyUsPoints: Array<{ title: string; description: string }>;
    ctaTitle: string; // призыв к действию
    ctaDescription: string;
    ctaDemo: {
      title: string;
      items: string[];
      date: string;
      location: string;
      audience: string;
    };
    faqTitle: string; // FAQ
    faqs: Array<{ question: string; answer: string }>;
    finalTagline: string; // заключительный слоган
    finalDescription: string;
  };
}

export const programCategories: ProgramCategory[] = [
  {
    id: 'development',
    title: 'Развивающие направления',
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
      // ... другие программы
    ]
  },
  {
    id: 'creativity',
    title: 'Творческие направления',
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
      // ... другие программы
    ]
  },
  {
    id: 'technical',
    title: 'Технические направления',
    description: 'Игровая лаборатория технологий и цифрового творчества Кибертоник',
    icon: Code,
    color: 'brand-orange',
    programs: [
      {
        id: 'cybertonic',
        title: 'Кибертоник',
        ageGroup: '8-14 лет',
        schedule: 'Вт/Чт 16:00-17:30, Сб 10:00-11:30',
        price: 3500,
        mentor: 'Дмитрий Ш.',
        description: 'Создание первых игр и анимаций в визуальной среде программирования.',
        features: [
          'Создание собственной игры',
          'Основы алгоритмов',
          'Работа в команде'
        ],
        // Полные данные для страницы лендинга
        pageData: {
          heroBgColor: 'brand-orange',
          subtitle: 'Цифровая творческая лаборатория для детей',
          tagline: 'Создай свой цифровой мир!',
          taglineDescription: 'Игровая лаборатория технологий и цифрового творчества для детей 8-14 лет',
          conceptTitle: 'КОНЦЕПЦИЯ ЛАБОРАТОРИИ',
          conceptDescription: '«Кибертоник» — это уникальное игровое пространство, где каждый ребенок становится главным инженером своего проекта.',
          conceptPoints: [
            {
              title: 'СВОБОДА ВЫБОРА',
              description: 'Нет строгой программы «для всех». Ребёнок сам решает, чем заняться сегодня.'
            },
            {
              title: 'РЕАЛЬНЫЙ ПРОЕКТ',
              description: 'С первого дня каждый работает над своей идеей — от замысла до воплощения.'
            },
            {
              title: 'ИГРОВАЯ ГЕЙМИФИКАЦИЯ',
              description: 'Занятия — это квесты и миссии. Скучно не будет!'
            }
          ],
          platformsTitle: 'ЧЕМ МЫ ЗАНИМАЕМСЯ? 4 ЦИФРОВЫЕ ПЛАТФОРМЫ',
          platformsDescription: 'Дети пробуют всё и находят то, что зажигает их больше всего!',
          platforms: [
            {
              id: 'code',
              title: '1. ПЛАТФОРМА «КОД»: Язык будущего',
              borderColor: 'brand-orange',
              items: [
                { description: 'Программирование в Scratch: Создаём первые мультфильмы и игры визуальными блоками.' },
                { description: 'Python в Minecraft: Пишем настоящий код для автоматизации строительства.' },
                { description: 'Робототехника и «умный дом»: Программируем роботов и устройства на Arduino.' }
              ]
            },
            {
              id: '3d-universe',
              title: '2. ПЛАТФОРМА «3D-ВСЕЛЕННАЯ»: От идеи к воплощению',
              borderColor: 'brand-green',
              items: [
                { description: '3D-моделирование в Blender/Tinkercad: Создаём персонажей и объекты.' },
                { description: '3D-печать: Твоя цифровая модель становится реальным предметом.' },
                { description: 'Графический дизайн и анимация: Создаём стильную графику и анимацию.' }
              ]
            },
            {
            id: 'Cybergramota',
              title: '3. ПЛАТФОРМА «КИБЕРГРАМОТА»: Навыки цифрового гражданина',
              borderColor: 'brand-blue',
              items: [
                { description: 'Слепая печать: Осваиваем клавиатуру быстро и правильно.' },
                { description: 'Офисное мастерство: Учимся создавать впечатляющие презентации, инфографику и работать с данными не потому что «надо», а для своего проекта.' },
                { description: 'Основы кибербезопасности: Узнаём, как создавать надёжные пароли, защищать свои данные и безопасно общаться в сети.' }
              ]
            },
            {
            id: 'Igroteka',
              title: '4. ПЛАТФОРМА «ИГРОТЕКА»: Творчество и команда',
              borderColor: 'brand-lightgreen',
              items: [
                { description: 'Создание игр: От концепции до прототипа в средах разработки.' },
                { description: 'Сетевые турниры: Командные игры по локальной сети в позитивной атмосфере — развиваем командный дух и стратегическое мышление.' },
                { description: 'Тест-драйв проектов: Самое весёлое — играть в то, что создали сами и друзья!' }
              ]
            },
            // ... другие платформы
          ],
          howItWorksTitle: 'КАК ПРОХОДЯТ ЗАНЯТИЯ?',
          howItWorks: {
            format: '1,5 часа динамичного творчества один раз в неделю.',
            structure: [
              {
                title: 'СТАРТ-АП (10 мин):',
                description: 'Планирование, объявление «миссий дня», вдохновляющие демо.'
              },
              {
                title: 'ВРЕМЯ БОЛЬШИХ ПРОЕКТОВ (60 мин):',
                description: 'Каждый работает над своей идеей с помощью ведущего-инженера.'
              },
              {
                title: 'ИГРОТЕКА / ТЕСТ-ДРАЙВ (15 мин):',
                description: 'Играем в созданные игры, тестируем роботов, делимся успехами.'
              }
            ],
            features: [
              {
                description: 'ГИБКИЙ СТАРТ:',
                details: 'Присоединиться можно с любого занятия и с любым уровнем подготовки.'
              }
            ]
          },
          whyUsTitle: 'ПОЧЕМУ «КИБЕРТОНИК» В «ВЕТЕРКЕ»?',
          whyUsPoints: [
            {
              title: 'Уникальный синтез технологий',
              description: 'Никакой скучной теории, только практика и интеграция навыков.'
            },
            {
              title: 'Фокус на soft skills',
              description: 'Развиваем проектное мышление, креативность, умение решать задачи.'
            },
            {
              title: 'Безопасная цифровая среда',
              description: 'Все занятия офлайн, в дружеском кругу, под руководством наставника.'
            }
          ],
          ctaTitle: 'ЗАПИСАТЬСЯ НА БЕСПЛАТНЫЙ ПРОБНЫЙ ДЕНЬ В ЛАБОРАТОРИИ!',
          ctaDescription: 'Хотите, чтобы ребёнок увидел всё своими глазами и сделал первый цифровой артефакт своими руками?',
          ctaDemo: {
            title: 'На пробном занятии ваш ребенок:',
            items: [
              'Запрограммирует своего первого робота голосом.',
              'Изменит код компьютерной игры.',
              'Создаст 3D-объект для виртуального мира.',
              'Получит сертификат «Цифрового инженера-испытателя».'
            ],
            date: '[УКАЗАТЬ ДАТУ]',
            location: 'Детский клуб «Ветерок», Каменка, ул. Пионовая, 15 (КП «Сказка»)',
            audience: 'Дети 8-14 лет (группы до 12 человек).'
          },
          faqTitle: 'ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ (FAQ)',
          faqs: [
            {
              question: 'Q: Это образовательная программа? Нужна ли лицензия?',
              answer: 'A: Нет, «Кибертоник» — это клуб цифрового творчества и досуга.'
            },
            {
              question: 'Q: Мой ребёнок никогда не программировал. Ему будет сложно?',
              answer: 'A: Нисколько! Мы начинаем с интуитивно понятных визуальных сред.'
            },
            {
              question: 'Q: Что нужно иметь с собой на занятие?',
              answer: 'A: Только хорошее настроение! Мы предоставляем всю технику.'
            }
          ],
          finalTagline: 'Создаём будущее. Играючи.',
          finalDescription: 'Детский клуб «Ветерок». Лаборатория «Кибертоник».'
        }
      }
    ]
  },
  {
    id: 'sports',
    title: 'Спортивные направления',
    description: 'Движение, ритм и здоровый образ жизни в формате весёлых встреч.',
    icon: Music,
    color: 'brand-lightgreen',
    programs: [
      {
        id: 'karate',
        title: 'Секция Каратэ Кёкусинкай',
        ageGroup: '6-16 лет',
        schedule: 'Пн/Ср/Пт 17:00-18:30',
        price: 3200,
        mentor: 'Артём Л.',
        description: 'Изучение каратэ Кёкусинкай - японского стиля каратэ.',
        features: ['Основы каратэ', 'Развитие силы и гибкости', 'Воспитание дисциплины']
      },
      {
        id: 'hip-hop',
        title: 'Хип-хоп для подростков',
        ageGroup: '10-16 лет',
        schedule: 'Вт/Чт 17:00-18:30',
        price: 3200,
        mentor: 'Артём Л.',
        description: 'Изучение современных танцевальных направлений и участие в флешмобах.',
        features: ['Основы хип-хопа', 'Работа в команде', 'Участие в локальных мероприятиях'],
        pageData: {
          // Структура для страницы Хип-Хоп
          heroBgColor: 'brand-lightgreen',
          subtitle: 'Танцевальная студия для подростков',
          tagline: 'Танцуй в стиле хип-хоп!',
          taglineDescription: 'Современные танцы для детей 10-16 лет',
          // ... остальные данные по аналогии
        }
      }
    ]
  }
];

// Хелперы для работы с данными
export const getAllPrograms = (): ExtendedProgram[] => {
  return programCategories.flatMap(cat => cat.programs as ExtendedProgram[]);
};

export const getProgramById = (id: string): ExtendedProgram | undefined => {
  return getAllPrograms().find(program => program.id === id);
};

export const getProgramsByCategory = (categoryId: string): ExtendedProgram[] => {
  const category = programCategories.find(cat => cat.id === categoryId);
  return category ? (category.programs as ExtendedProgram[]) : [];
};

// Для главной страницы - ТОП активностей
export const topPrograms = programCategories
  .flatMap(cat => cat.programs)
  .filter(program => ['scratch', 'hip-hop', 'school-prep', 'clean-writing', 'drawing', 'fashion-theater']
    .includes(program.id))
  .slice(0, 6);