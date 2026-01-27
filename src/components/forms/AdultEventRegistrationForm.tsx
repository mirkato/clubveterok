// Файл: src/components/forms/AdultEventRegistrationForm.tsx
import React, { useState } from 'react';
import { sendEventRegistrationToTelegram } from '../../services/telegram-service';

interface FormData {
  name: string;
  phone: string;
  comments: string;
}

interface AdultEventRegistrationFormProps {
  eventTitle: string;
}

const AdultEventRegistrationForm: React.FC<AdultEventRegistrationFormProps> = ({ eventTitle }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    comments: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Send data to Telegram
    const success = await sendEventRegistrationToTelegram({
      ...formData,
      eventTitle,
      isAdult: true
    });

    if (success) {
      console.log('Данные успешно отправлены в Telegram');
    } else {
      console.error('Ошибка при отправке данных в Telegram');
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Сброс формы через 5 секунд
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        comments: ''
      });
    }, 5000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (isSubmitted) {
    return (
      <div className="bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200 rounded-xl p-8 text-center">
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Заявка отправлена!</h3>
        <p className="text-gray-600 mb-2">
          Спасибо, {formData.name}! Мы получили вашу заявку на участие.
        </p>
        <p className="text-gray-600">
          В ближайшее время с вами свяжется наш администратор для подтверждения записи.
        </p>
        <div className="mt-6 p-4 bg-white rounded-lg inline-block">
          <p className="text-sm text-gray-500">Номер заявки:</p>
          <p className="font-mono font-bold text-brand-blue">
            ВТР-{Date.now().toString().slice(-6)}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="gradient-brand text-white p-6 text-center">
        <h3 className="text-2xl font-bold mb-2">Запись на мастер-класс</h3>
        <p className="opacity-90">Оставьте контакты для записи</p>
      </div>
      
      <form onSubmit={handleSubmit} className="p-6 md:p-8">
        {/* Информация об участнике */}
        <div className="mb-6">
          <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="text-2xl">👤</span>
            Ваши контактные данные
          </h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Ваше имя и фамилия *
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent transition"
                placeholder="Иван Иванов"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Телефон *
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent transition"
                placeholder="+7 (999) 123-45-67"
              />
            </div>
          </div>
        </div>

        {/* Дополнительные комментарии */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Дополнительные пожелания или комментарии
          </label>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleInputChange}
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent transition"
            placeholder="Например: опыт в рукоделии, особенности..."
          />
        </div>

        {/* Согласие на обработку данных */}
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <label className="flex items-start">
            <input
              type="checkbox"
              required
              className="mt-1 mr-3 h-5 w-5 text-brand-blue rounded focus:ring-brand-blue"
            />
            <span className="text-sm text-gray-600">
              Я даю согласие на обработку персональных данных в соответствии с 
              <a href="/privacy" className="text-brand-blue hover:underline mx-1">
                политикой конфиденциальности
              </a>
              и согласен получать информацию о мероприятии
            </span>
          </label>
        </div>

        {/* Кнопка отправки */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all ${
            isSubmitting
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'gradient-brand text-white hover:shadow-xl hover:-translate-y-0.5'
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Отправляем заявку...
            </span>
          ) : (
            "Записаться на мастер-класс"
          )}
        </button>

        {/* Контакты для связи */}
        <div className="mt-6 pt-6 border-t border-gray-200 text-center">
          <p className="text-gray-600 mb-2">
            Или свяжитесь с нами другим способом:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://t.me/VeterokSkaska" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition"
            >
              <span className="text-xl">📲</span>
              Telegram
            </a>
            <a 
              href="tel:+79199259765" 
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition"
            >
              <span className="text-xl">📞</span>
              +7 919 925-97-65
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdultEventRegistrationForm;