import React from 'react';
import { Star, Quote } from 'lucide-react';
import Container from '../layout/Container';
import Card from '../ui/Card';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Дочь ждёт каждую субботу — занятия по программированию стали её любимыми. А нам не надо ехать в город, всё рядом!",
      author: "Анна, мама Софии (9 лет)",
      location: "Каменка",
      course: "Scratch-программирование",
      rating: 5
    },
    {
      quote: "Сын за 2 месяца занятий хип-хопом стал увереннее в себе, появились друзья. Теперь сам напоминает, чтобы не опоздать!",
      author: "Михаил, папа Артёма (12 лет)",
      location: "Альпийская долина",
      course: "Хип-хоп для подростков",
      rating: 5
    },
    {
      quote: "Переехали в Каменку из города, переживали, чем занять детей. «Ветерок» стал настоящей находкой — и развитие, и общение!",
      author: "Елена, мама двойняшек (6 лет)",
      location: "Кулига",
      course: "Подготовка к школе",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Что говорят родители наших учеников
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} hover>
              <Quote className="w-8 h-8 text-indigo-200 mb-4" />
              
              <p className="text-gray-700 italic mb-6">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div>
                <div className="font-semibold text-gray-900">
                  {testimonial.author}
                </div>
                <div className="text-sm text-gray-600">
                  {testimonial.location} • {testimonial.course}
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://vk.com/clubveterok72" 
            className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
          >
            Ещё 47 отзывов в нашей группе ВКонтакте →
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;