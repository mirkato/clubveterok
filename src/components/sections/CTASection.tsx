// CTASection.tsx - упрощенная версия
import React, { useState } from 'react';
import { Check, Shield, Send, Loader2 } from 'lucide-react';
import Container from '../layout/Container';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { programCategories } from '../../data/programs-datas';
import { sendToTelegram } from '../../services/telegram-service';

const CTASection: React.FC = () => {
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
    if (selectedPrograms.length === 0 || !formData.parent_name || !formData.parent_phone || !formData.child_name_age) {
      setSubmitResult({
        success: false,
        message: 'Пожалуйста, заполните все обязательные поля'
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
        program: selectedPrograms.join(', '),
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
    <section id="contacts" className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Левая часть */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Запишитесь на{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                пробное
              </span>{' '}
              занятие
            </h2>
            
            <div className="space-y-4 mb-8">
              {[
                'Ребёнок попробует, понравится ли ему',
                'Познакомится с преподавателем',
                'Увидит, как проходят занятия',
                'Вы получите обратную связь'
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
              <Shield className="w-8 h-8 text-indigo-500 mr-4" />
              <div>
                <div className="font-semibold text-gray-900">Гарантия</div>
                <div className="text-sm text-gray-600">
                  Никакого спама. Только подтверждение записи и напоминание о занятии.
                </div>
              </div>
            </div>
          </div>
          
          {/* Правая часть - форма */}
          <Card>
            <form onSubmit={handleSubmit}>
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
              
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Выберите направление
              </h3>
              
              <div className="space-y-3 mb-6">
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
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="parent_name"
                  placeholder="Имя родителя"
                  value={formData.parent_name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
                  required
                />
                
                <input
                  type="tel"
                  name="parent_phone"
                  placeholder="Ваш телефон"
                  value={formData.parent_phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
                  required
                />
              </div>
              
              <input
                type="text"
                name="child_name_age"
                placeholder="Имя и возраст ребёнка"
                value={formData.child_name_age}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition mb-4"
                required
              />
              
              <textarea
                name="comment"
                placeholder="Комментарий или вопрос (необязательно)"
                value={formData.comment}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition mb-6 resize-none"
              />
              
              <div className="text-xs text-gray-500 mb-6">
                Нажимая кнопку, вы соглашаетесь с{' '}
                <a href="/privacy" className="text-indigo-600 hover:underline">
                  политикой конфиденциальности
                </a>
              </div>
              
              <Button
                type="submit"
                variant="primary"
                size="lg"
                icon={isSubmitting ? Loader2 : Send}
                iconPosition="right"
                className="w-full"
                disabled={isSubmitting || selectedPrograms.length === 0}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Отправка...
                  </>
                ) : (
                  'Записаться на пробное'
                )}
              </Button>
              
              <div className="text-center mt-4 text-sm text-gray-600">
                Или напишите нам в{' '}
                <a 
                  href="https://t.me/VeterokSkaska" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 font-semibold hover:underline"
                >
                  Telegram →
                </a>
              </div>
            </form>
          </Card>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;