import Layout from '../components/layout/Layout';
import React, { useState, useEffect } from 'react';
import PageHeader from '../components/ui/PageHeader';
import Container from '../components/layout/Container';
import { useLocation } from 'react-router-dom';
import { sendToTelegram } from '../services/telegram-service';
import { getProgramById, programCategories } from '../data/programs-datas';
import type { Program } from '../types/program-types';
import { Check, Send, Loader2 } from 'lucide-react';

const TryFreePage: React.FC = () => {
  const location = useLocation();
  const [program, setProgram] = useState<Program | null>(null);
  const [selectedPrograms, setSelectedPrograms] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    parent_name: '',
    parent_phone: '',
    child_name_age: '',
    comment: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  // Flatten all programs from categories and format them
  const programs = programCategories
    .flatMap(category => category.programs)
    .map(program => `${program.title} (${program.ageGroup})`);
  
  // Add "Другое" option at the end
  const programsWithOther = [...programs, 'Другое (укажите в комментарии)'];

  // Parse URL parameters to get program ID or title
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const programParam = searchParams.get('program');
    
    if (programParam) {
      // First try to find by ID
      const foundProgram = getProgramById(programParam);
      if (foundProgram) {
        setProgram(foundProgram);
      } else {
        // If not found by ID, try to find by title (for backward compatibility)
        const allPrograms = programCategories.flatMap(cat => cat.programs);
        const programByTitle = allPrograms.find(prog => prog.title === decodeURIComponent(programParam));
        if (programByTitle) {
          setProgram(programByTitle);
        }
      }
    }
  }, [location.search]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleProgramChange = (program: string) => {
    setSelectedPrograms(prev => {
      if (prev.includes(program)) {
        return prev.filter(p => p !== program);
      } else {
        return [...prev, program];
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Базовая валидация на клиенте
    if (!formData.parent_name || !formData.parent_phone || !formData.child_name_age) {
      setSubmitResult({
        success: false,
        message: 'Пожалуйста, заполните все обязательные поля'
      });
      return;
    }
    
    // If we have a specific program from URL, use it
    // Otherwise, check that at least one program is selected
    if (!program && selectedPrograms.length === 0) {
      setSubmitResult({
        success: false,
        message: 'Пожалуйста, выберите хотя бы одно направление'
      });
      return;
    }
    
    setIsSubmitting(true);
    setSubmitResult(null);
    
    try {
      // Формируем данные для отправки
      const payload = {
        parent_name: formData.parent_name.trim(),
        parent_phone: formData.parent_phone.trim(),
        child_name_age: formData.child_name_age.trim(),
        program: program ? `${program.title} (${program.ageGroup})` : selectedPrograms.join(', '),
        comment: formData.comment.trim(),
        page_url: window.location.href
      };
      
      // Отправляем данные в Telegram
      const success = await sendToTelegram(payload);
      
      setSubmitResult({
        success: success,
        message: success
          ? 'Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.'
          : 'Произошла ошибка при отправке. Пожалуйста, попробуйте позже или свяжитесь с нами напрямую.'
      });
      
      // Очищаем форму при успешной отправке
      if (success) {
        setFormData({
          parent_name: '',
          parent_phone: '',
          child_name_age: '',
          comment: '',
        });
        setSelectedPrograms([]);
      }
      
    } catch (error) {
      console.error('Ошибка отправки формы:', error);
      setSubmitResult({
        success: false,
        message: 'Произошла ошибка при отправке. Пожалуйста, попробуйте позже или свяжитесь с нами напрямую.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <PageHeader
        title={program ? `Запись на пробное занятие по "${program.title}"` : "Пробное занятие"}
        subtitle="Бесплатно и без обязательств"
        description={program ? `Запишитесь на первую встречу по программе "${program.title}"` : "Запишитесь на первую встречу, чтобы познакомиться с клубом и выбрать активность"}
        bgColor="brand-blue"
      />
      <Container className="py-12">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-8">
            {submitResult && (
              <div className={`p-4 rounded-lg mb-6 ${
                submitResult.success 
                  ? 'bg-green-50 text-green-800 border border-green-200' 
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}>
                <div className="flex items-center">
                  {submitResult.success ? (
                    <Check className="w-5 h-5 mr-2 flex-shrink-0" />
                  ) : (
                    <span className="text-red-500 mr-2">✕</span>
                  )}
                  <span>{submitResult.message}</span>
                </div>
              </div>
            )}
            
            {program ? (
              <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="font-bold text-lg text-gray-800 mb-2">Выбранная программа:</h3>
                <p className="text-gray-700">
                  <span className="font-semibold">{program.title}</span> ({program.ageGroup})
                </p>
              </div>
            ) : (
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Выберите направление
                </h3>
                <div className="space-y-3">
                  {programsWithOther.map((program) => (
                    <label
                      key={program}
                      className={`
                        flex items-center p-3 rounded-lg border cursor-pointer
                        transition-all duration-200
                        ${selectedPrograms.includes(program)
                          ? 'border-indigo-500 bg-indigo-50'
                          : 'border-gray-200 hover:border-gray-300'
                        }
                      `}
                    >
                      <input
                        type="checkbox"
                        name="program"
                        value={program}
                        checked={selectedPrograms.includes(program)}
                        onChange={(e) => handleProgramChange(e.target.value)}
                        className="mr-3 h-4 w-4 text-indigo-600"
                      />
                      <span className="text-gray-700">{program}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="parent_name" className="block text-sm font-medium text-gray-700 mb-1">
                    Имя родителя *
                  </label>
                  <input
                    type="text"
                    id="parent_name"
                    name="parent_name"
                    value={formData.parent_name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="parent_phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Телефон для связи *
                  </label>
                  <input
                    type="tel"
                    id="parent_phone"
                    name="parent_phone"
                    value={formData.parent_phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="child_name_age" className="block text-sm font-medium text-gray-700 mb-1">
                    Имя и возраст ребёнка *
                  </label>
                  <input
                    type="text"
                    id="child_name_age"
                    name="child_name_age"
                    value={formData.child_name_age}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue"
                    placeholder="Например: Анна, 7 лет"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
                    Комментарий (необязательно)
                  </label>
                  <textarea
                    id="comment"
                    name="comment"
                    value={formData.comment}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue"
                  />
                </div>
              </div>
              
              <div className="text-xs text-gray-500 my-4">
                Нажимая кнопку, вы соглашаетесь с{' '}
                <a href="/privacy-policy" className="text-brand-blue hover:underline">
                  политикой конфиденциальности
                </a>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting || (!program && selectedPrograms.length === 0)}
                className={`w-full flex items-center justify-center px-4 py-3 rounded-lg font-semibold text-white transition-colors ${
                  isSubmitting || (!program && selectedPrograms.length === 0)
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-brand-blue to-brand-green hover:from-blue-600 hover:to-green-600'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Отправка...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Записаться на пробное занятие
                  </>
                )}
              </button>
            </form>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="space-y-4">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <p className="font-medium text-gray-800">Вы также можете оставить заявку по телефону или в Telegram</p>
                </div>
                <a 
                  href="tel:+79199259765" 
                  className="block p-4 border border-brand-blue rounded-lg text-center hover:bg-blue-50 transition-colors"
                >
                  <div className="font-bold text-lg text-brand-blue mb-1">Позвонить</div>
                  <div className="text-gray-600">+7 (919) 925-97-65</div>
                </a>
                
                <a 
                  href="https://t.me/VeterokSkaska" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-4 border border-green-500 rounded-lg text-center hover:bg-green-50 transition-colors"
                >
                  <div className="font-bold text-lg text-green-600 mb-1">Написать в Telegram</div>
                  <div className="text-gray-600">@VeterokSkaska</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default TryFreePage;