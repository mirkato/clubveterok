// src/components/sections/programs/DetailedDescription.tsx
import React from 'react';

interface DetailedDescriptionProps {
  content: string;
}

interface Section {
  heading: string;
  content: string[];
}

const DetailedDescription: React.FC<DetailedDescriptionProps> = ({ content }) => {
  // Разбиваем текст на строки
  const lines = content.split('\n');
  
  // Функция для определения, является ли строка заголовком
  const isHeading = (text: string) => {
    // Заголовки обычно в верхнем регистре и короче обычных абзацев
    return text.length > 0 && text.length < 100 && text === text.toUpperCase() && !text.includes('.') && !text.includes('!') && !text.includes('?');
  };
  
  // Функция для преобразования текста в формат, подходящий для ID
  const generateId = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9а-яё\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
  };
  
  // Группируем строки в разделы
  const sections: Section[] = [];
  let currentSection: Section | null = null;
  
  for (const line of lines) {
    if (isHeading(line.trim())) {
      // Если это заголовок, создаем новый раздел
      if (currentSection) {
        sections.push(currentSection);
      }
      currentSection = {
        heading: line.trim(),
        content: []
      };
    } else if (currentSection) {
      // Добавляем строку к текущему разделу
      if (line.trim()) {
        currentSection.content.push(line.trim());
      }
    }
  }
  
  // Добавляем последний раздел
  if (currentSection) {
    sections.push(currentSection);
  }
  
  // Если нет заголовков, отображаем весь контент как один раздел
  if (sections.length === 0) {
    return (
      <div className="prose max-w-none text-gray-600">
        {content.split('\n\n').map((paragraph, index) => (
          <p key={index} className="mb-4 last:mb-0">
            {paragraph}
          </p>
        ))}
      </div>
    );
  }
  
  return (
    <div className="space-y-6">
      {sections.map((section, index) => (
        <div key={index} className="space-y-3">
          <h3
            id={generateId(section.heading)}
            className="text-xl md:text-2xl font-bold text-gray-800 border-b-2 border-brand-orange pb-2"
          >
            {section.heading}
          </h3>
          <div className="prose max-w-none text-gray-600">
            {section.content.map((paragraph, pIndex) => (
              <p key={pIndex} className="mb-4 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DetailedDescription;