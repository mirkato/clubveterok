// src/pages/ProgramTemplate.tsx
import Layout from '../components/layout/Layout';
import Container from '../components/layout/Container';
import PageHeader from '../components/ui/PageHeader';
import React from 'react';
import type { Program } from '../data/programs-datas';
import { Helmet } from 'react-helmet-async';

interface ProgramTemplateProps {
  program: Program;
}

const ProgramTemplate: React.FC<ProgramTemplateProps> = ({ program }) => {
  if (!program.pageData) {
    return <div>Программа не найдена</div>;
  }

  const pageData = program.pageData;

  return (
    <Layout>
      <Helmet>
        <title>{program.title} - Детский клуб Ветерок</title>
        <meta name="description" content={program.description} />
      </Helmet>
      <PageHeader
        title={program.title}
        subtitle={pageData.subtitle}
        bgColor={pageData.heroBgColor}
      />
      
      <Container className="py-12">
        {/* Тэглайн */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {pageData.tagline}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            {pageData.taglineDescription}
          </p>
        </div>
        
        {/* Основной текст */}
        <div className="prose max-w-none mb-16">
          <p className="text-lg mb-6">
            {program.description}
          </p>
        </div>
        
        {/* Концепция */}
        {pageData.conceptTitle && (
          <div className={`bg-gradient-to-r from-${pageData.heroBgColor} to-yellow-500 rounded-2xl p-8 md:p-12 text-white mb-16`}>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {pageData.conceptTitle}
            </h3>
            <p className="text-orange-100 mb-6 max-w-3xl">
              {pageData.conceptDescription}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {pageData.conceptPoints.map((point: { title: string; description: string }, index: number) => (
                <div key={index} className="bg-white/10 p-6 rounded-xl">
                  <h4 className="text-xl font-bold mb-3">{point.title}</h4>
                  <p>{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Платформы/разделы */}
        {pageData.platforms && (
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              {pageData.platformsTitle}
            </h3>
            <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              {pageData.platformsDescription}
            </p>
            
            <div className="space-y-12">
              {pageData.platforms.map((platform: { id: string; title: string; borderColor: string; items: Array<{ description: string }> }, index: number) => (
                <div
                  key={platform.id}
                  className={`border-l-4 border-${platform.borderColor} pl-6 py-2`}
                >
                  <h4 className="text-2xl font-bold text-gray-800 mb-4">
                    {platform.title}
                  </h4>
                  <ul className="space-y-3">
                    {platform.items.map((item: { description: string }, itemIndex: number) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className={`text-${platform.borderColor} mr-2`}>•</span>
                        <span>{item.description}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Как проходят занятия */}
        {pageData.howItWorksTitle && (
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              {pageData.howItWorksTitle}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">ФОРМАТ</h4>
                <p className="text-gray-600 mb-4">
                  {pageData.howItWorks.format}
                </p>
                
                <h4 className="text-xl font-bold text-gray-800 mb-4">СТРУКТУРА</h4>
                <ul className="space-y-2">
                  {pageData.howItWorks.structure.map((item: { title: string; description: string }, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className={`text-${pageData.heroBgColor} mr-2`}>•</span>
                      <span><strong>{item.title}</strong> {item.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">ОСОБЕННОСТИ</h4>
                <ul className="space-y-2">
                  {pageData.howItWorks.features.map((item: { description: string; details?: string }, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="text-brand-green mr-2">•</span>
                      <span><strong>{item.description}</strong> {item.details}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
        
        {/* Почему мы */}
        {pageData.whyUsTitle && (
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              {pageData.whyUsTitle}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pageData.whyUsPoints.map((point: { title: string; description: string }, index: number) => (
                <div key={index} className="border border-gray-200 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-3">
                    {point.title}
                  </h4>
                  <p className="text-gray-600">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* CTA секция */}
        {pageData.ctaTitle && (
          <div className={`bg-gradient-to-r from-brand-blue to-brand-green rounded-2xl p-8 md:p-12 text-white text-center mb-16`}>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {pageData.ctaTitle}
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              {pageData.ctaDescription}
            </p>
            
            <div className="bg-white/10 p-6 rounded-xl mb-6 text-left max-w-2xl mx-auto">
              <h4 className="text-xl font-bold mb-4">{pageData.ctaDemo.title}</h4>
              <ul className="space-y-2">
                {pageData.ctaDemo.items.map((item: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-brand-orange mr-2">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white/10 p-6 rounded-xl mb-6 text-left max-w-2xl mx-auto">
              <p className="font-bold mb-2">Дата следующего демо-дня: {pageData.ctaDemo.date}</p>
              <p className="mb-2">Место: {pageData.ctaDemo.location}</p>
              <p className="mb-2">Для кого: {pageData.ctaDemo.audience}</p>
            </div>
            
            <a 
              href="/try-free" 
              className="inline-flex items-center bg-white text-brand-blue hover:bg-gray-100 font-bold px-8 py-3 rounded-lg text-lg transition-colors"
            >
              Записаться на пробное занятие
            </a>
          </div>
        )}
        
        {/* FAQ */}
        {pageData.faqTitle && (
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              {pageData.faqTitle}
            </h3>
            
            <div className="space-y-6">
              {pageData.faqs.map((faq: { question: string; answer: string }, index: number) => (
                <div key={index}>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">
                    {faq.question}
                  </h4>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Финальный слоган */}
        {pageData.finalTagline && (
          <div className="text-center mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              {pageData.finalTagline}
            </h3>
            <p className="text-gray-600">
              {pageData.finalDescription}
            </p>
          </div>
        )}
      </Container>
    </Layout>
  );
};

export default ProgramTemplate;