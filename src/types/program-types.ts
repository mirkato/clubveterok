// src/types/program-types.ts
// Упрощаем типы - убираем сложные импорты

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
  icon: any; // Используем any чтобы избежать проблем с lucide-react
  color: string;
  programs: Program[];
}