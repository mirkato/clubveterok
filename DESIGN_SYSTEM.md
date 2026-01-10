# Система дизайна и стилей

## 1. Цветовая палитра

### Основные брендовые цвета:
- **brand-blue**: #33a0d8 (основной синий)
- **brand-green**: #1d9e3e (основной зеленый)
- **brand-lightgreen**: #abcb4e (светло-зеленый)
- **brand-orange**: #edb314 (оранжевый)

### Оттенки основных цветов:
- **brand-blue-light**: #5cb8e6
- **brand-blue-dark**: #2a8bc5
- **brand-green-light**: #34b856
- **brand-green-dark**: #178532

### Нейтральные цвета:
- **white**: #ffffff
- **gray-50**: #f9fafb
- **gray-100**: #f3f4f6
- **gray-200**: #e5e7eb
- **gray-300**: #d1d5db
- **gray-400**: #9ca3af
- **gray-500**: #6b7280
- **gray-600**: #4b5563
- **gray-700**: #374151
- **gray-800**: #1f2937
- **gray-900**: #111827
- **black**: #000000

## 2. Градиенты

### Основные градиенты:
- **gradient-brand**: линейный градиент от brand-blue к brand-green
  - `linear-gradient(135deg, #33a0d8 0%, #1d9e3e 100%)`
- **gradient-fresh**: линейный градиент от brand-lightgreen через brand-blue к brand-green
  - `linear-gradient(135deg, #abcb4e 0%, #33a0d8 50%, #1d9e3e 100%)`
- **gradient-sun**: линейный градиент от brand-orange к brand-lightgreen
  - `linear-gradient(135deg, #edb314 0%, #abcb4e 100%)`

## 3. Типографика

### Размеры шрифтов:
- **h1**: 3rem (48px) на desktop, 2.25rem (36px) на mobile
- **h2**: 2.25rem (36px) на desktop, 1.875rem (30px) на mobile
- **h3**: 1.875rem (30px) на desktop, 1.5rem (24px) на mobile
- **h4**: 1.5rem (24px) на desktop, 1.25rem (20px) на mobile
- **body**: 1rem (16px)
- **small**: 0.875rem (14px)

### Начертания:
- **Тонкий**: 300
- **Нормальный**: 400
- **Полужирный**: 600
- **Жирный**: 700

### Семейство шрифтов:
- **Основной**: системные шрифты (system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif)

## 4. Отступы и размеры

### Система отступов (rem):
- **xs**: 0.25rem (4px)
- **sm**: 0.5rem (8px)
- **base**: 1rem (16px)
- **md**: 1.5rem (24px)
- **lg**: 2rem (32px)
- **xl**: 3rem (48px)
- **2xl**: 4rem (64px)
- **3xl**: 6rem (96px)

### Border radius:
- **sm**: 0.25rem (4px)
- **base**: 0.5rem (8px)
- **md**: 0.75rem (12px)
- **lg**: 1rem (16px)
- **xl**: 1.5rem (24px)
- **2xl**: 2rem (32px)
- **full**: 9999px

## 5. Тени

### Основные тени:
- **sm**: 0 1px 2px 0 rgb(0 0 0 / 0.05)
- **base**: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)
- **md**: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)
- **lg**: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)
- **xl**: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)
- **2xl**: 0 25px 50px -12px rgb(0 0 0 / 0.25)

## 6. Анимации и переходы

### Основные анимации:
- **float**: плавающая анимация (6s ease-in-out infinite)
- **pulse-slow**: медленный пульс (3s cubic-bezier(0.4, 0, 0.6, 1) infinite)
- **slideDown**: появление сверху (0.3s ease-out)

### Переходы:
- **transition-all**: все переходы 0.3s ease-in-out
- **transition-colors**: переходы цветов 0.2s ease-in-out
- **transition-transform**: переходы трансформаций 0.2s ease-in-out

## 7. Компоненты

### Кнопки

#### Варианты:
- **primary**: основная кнопка с градиентом brand-blue к brand-green
- **secondary**: зеленая кнопка с brand-green
- **outline**: контурная кнопка с brand-blue

#### Размеры:
- **sm**: маленькая (px-3 py-1.5 text-sm)
- **md**: средняя (px-5 py-2.5 text-base)
- **lg**: большая (px-7 py-3.5 text-lg)

### Карточки

#### Стили:
- **card-blue**: синяя карточка с градиентом от white к brand-blue/5
- **card-green**: зеленая карточка с градиентом от white к brand-green/5
- **card-orange**: оранжевая карточка с градиентом от white к brand-orange/5

### Бейджи

#### Стили:
- **primary**: с градиентом от brand-lightgreen к brand-orange
- **secondary**: с градиентом от brand-blue к brand-green

## 8. Сетка и контейнеры

### Контейнеры:
- **container**: центрированный контейнер с максимальной шириной
- **px-4**: отступы по бокам 1rem (16px)

### Сетка:
- **grid-cols-1**: одна колонка на мобильных
- **md:grid-cols-2**: две колонки на планшетах
- **lg:grid-cols-3**: три колонки на десктопах
- **gap-8**: отступы между колонками 2rem (32px)

## 9. Адаптивность

### Точки останова:
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

### Адаптивные классы:
- **text-3xl md:text-4xl**: размер текста меняется на десктопах
- **grid-cols-1 md:grid-cols-2**: количество колонок меняется на планшетах
- **hidden md:flex**: элементы скрыты на мобильных и видны на планшетах

## 10. Иконки

### Используемые библиотеки:
- **Lucide React**: основная библиотека иконок
- **React Icons**: дополнительные иконки

### Размеры иконок:
- **w-4 h-4**: маленькие иконки
- **w-5 h-5**: средние иконки
- **w-6 h-6**: большие иконки

## 11. Формы и интерактивные элементы

### Поля ввода:
- **base**: стандартные стили с border-gray-300
- **focus**: фокус с ring-brand-blue
- **error**: ошибки с border-red-500

### Чекбоксы и радиокнопки:
- **base**: стандартные стили
- **checked**: выбранные с text-brand-blue

## 12. Утилиты

### Полезные классы:
- **flex items-center**: флекс контейнер с выравниванием по центру
- **justify-between**: выравнивание по краям
- **text-center**: выравнивание текста по центру
- **rounded-lg**: скругление углов
- **shadow-lg**: большая тень
- **hover:shadow-xl**: увеличенная тень при наведении
- **transition-all**: плавные переходы