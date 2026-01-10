# Паттерны структуры компонентов

## 1. Общая структура компонентов

Все компоненты следуют единой структуре:
```tsx
import React from 'react';

interface ComponentNameProps {
  // Определение пропсов
}

const ComponentName: React.FC<ComponentNameProps> = ({ 
  // Деструктуризация пропсов
}) => {
  return (
    // JSX разметка
  );
};

export default ComponentName;
```

## 2. Структура папок компонентов

```
src/components/
├── layout/          # Компоненты макета
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── Layout.tsx
├── sections/       # Секции страниц
│   ├── Hero.tsx
│   ├── Programs.tsx
│   └── ...
├── ui/             # Базовые UI компоненты
│   ├── Button.tsx
│   ├── Card.tsx
│   └── ...
└── ...             # Другие компоненты
```

## 3. Паттерны компонентов

### 3.1. Компоненты макета (layout)

Компоненты макета отвечают за структуру страницы:
- **Layout.tsx** - основной макет с хедером и футером
- **Header.tsx** - навигационная панель
- **Footer.tsx** - нижний колонтитул

Пример Layout:
```tsx
interface LayoutProps {
  children: React.ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  showHeader = true, 
  showFooter = true 
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      {showHeader && <Header />}
      <main className="flex-grow">
        {children}
      </main>
      {showFooter && <Footer />}
    </div>
  );
};
```

### 3.2. Секции (sections)

Секции представляют собой крупные блоки контента на страницах:
- Используют адаптивные классы Tailwind
- Содержат заголовки с градиентами
- Включают кнопки и карточки
- Имеют отступы и стилизованные фоны

Пример секции:
```tsx
const Section: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Заголовок секции
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Описание секции
          </p>
        </div>
        {/* Содержимое секции */}
      </div>
    </section>
  );
};
```

### 3.3. Базовые UI компоненты (ui)

Базовые UI компоненты имеют варианты стилей и размеров:
- **Button.tsx** - кнопка с вариантами (primary, secondary, outline)
- **Card.tsx** - карточка с кастомизацией
- **Badge.tsx** - бейдж для меток

Пример Button:
```tsx
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: ComponentType<LucideProps>;
  iconPosition?: 'left' | 'right';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  className = '',
  ...props
}) => {
  const baseStyles = 'font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-brand-blue text-white hover:bg-blue-600 focus:ring-blue-500',
    secondary: 'bg-brand-green text-white hover:bg-green-600 focus:ring-green-500',
    outline: 'border-2 border-brand-blue text-brand-blue hover:bg-blue-50 focus:ring-blue-500'
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-7 py-3.5 text-lg'
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-5 h-5" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="w-5 h-5" />}
    </button>
  );
};
```

## 4. Паттерны страниц

Страницы следуют единому паттерну:
```tsx
import React from 'react';
import Layout from '../components/layout/Layout';
// Импорт секций

const PageName: React.FC = () => {
  return (
    <Layout>
      {/* Секции страницы */}
    </Layout>
  );
};

export default PageName;
```

## 5. Паттерны данных

Данные организованы в отдельных файлах:
- **data/** - файлы с данными
- **types/** - TypeScript типы

Пример структуры данных:
```ts
export interface Program {
  id: string;
  title: string;
  ageGroup: string;
  schedule: string;
  price: number;
  mentor: string;
  description: string;
  features: string[];
}

export interface ProgramCategory {
  id: string;
  title: string;
  description: string;
  icon: any;
  color: string;
  programs: Program[];
}
```

## 6. Паттерны маршрутизации

Маршруты определяются в App.tsx:
```tsx
<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/programs" element={<ProgramsPage />} />
  {/* Другие маршруты */}
  <Route path="*" element={<NotFoundPage />} />
</Routes>
```

## 7. Паттерны стилей

### 7.1. Глобальные стили (index.css)
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .btn-primary {
    @apply px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-xl 
           font-semibold hover:shadow-xl hover:-translate-y-0.5 transition-all;
  }
}
```

### 7.2. Цветовая палитра (tailwind.config.js)
```js
theme: {
  extend: {
    colors: {
      'brand-blue': '#33a0d8',
      'brand-green': '#1d9e3e',
      // Другие цвета
    },
    backgroundImage: {
      'gradient-brand': 'linear-gradient(135deg, #33a0d8 0%, #1d9e3e 100%)',
      // Другие градиенты
    }
  }
}
```

## 8. Паттерны анимаций

Анимации определяются в tailwind.config.js и index.css:
```js
// tailwind.config.js
animation: {
  'float': 'float 6s ease-in-out infinite',
  'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
}
```

```css
/* index.css */
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slideDown {
  animation: slideDown 0.3s ease-out;
}