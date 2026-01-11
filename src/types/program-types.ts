// src/types/program-types.ts
// Упрощаем типы - убираем сложные импорты

export interface ProgramPageData {
  heroBgColor: string;
  subtitle: string;
  tagline: string;
  taglineDescription: string;
  conceptTitle: string;
  conceptDescription: string;
  conceptBgColor?: string;
  conceptBgColorSecondary?: string;
  conceptPoints: Array<{ title: string; description: string }>;
  platformsTitle: string;
  platformsDescription: string;
  platforms: Array<{
    id: string;
    title: string;
    borderColor: string;
    items: Array<{ description: string; details?: string }>;
  }>;
  howItWorksTitle: string;
  howItWorks: {
    format: string;
    structure: Array<{ title: string; description: string }>;
    features: Array<{ description: string; details?: string }>;
  };
  whyUsTitle: string;
  whyUsPoints: Array<{ title: string; description: string }>;
  ctaTitle: string;
  ctaDescription: string;
  ctaDemo: {
    title: string;
    items: string[];
    date: string;
    location: string;
    audience: string;
  };
  faqTitle: string;
  faqs: Array<{ question: string; answer: string }>;
  finalTagline: string;
  finalDescription: string;
}

export interface Program {
  id: string;
  title: string;
  ageGroup: string;
  schedule: string;
  price: number;
  mentor: string;
  description: string;
  features: string[];
  detailedDescription?: string;
  outcomes?: string[];
  pageData?: ProgramPageData;
}

export interface ProgramCategory {
  id: string;
  title: string;
  description: string;
  icon: any; // Используем any чтобы избежать проблем с lucide-react
  color: string;
  programs: Program[];
}