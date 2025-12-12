import Layout from '../components/layout/Layout';
import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import Container from '../components/layout/Container';

const ContactsPage: React.FC = () => {
  return (
    <Layout>
      <PageHeader
        title="Контакты"
        subtitle="Как нас найти и связаться"
        description="Приезжайте в гости, звоните или пишите — мы всегда на связи"
        bgColor="brand-orange"
      />
      <Container className="py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Контакты</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">Адрес</h3>
                    <p className="text-gray-600">
                      село Каменка, ул. Пионовая, д. 15<br />
                      (КП «Сказка»)
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">Телефон</h3>
                    <a 
                      href="tel:+79199259765" 
                      className="text-brand-blue hover:text-blue-600 font-medium text-lg"
                    >
                      +7 (919) 925-97-65
                    </a>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">Telegram</h3>
                    <a 
                      href="https://t.me/VeterokSkaska" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-brand-blue hover:text-blue-600 font-medium"
                    >
                      @VeterokSkaska
                    </a>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">ВКонтакте</h3>
                    <a 
                      href="https://vk.com/clubveterok72" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-brand-blue hover:text-blue-600 font-medium"
                    >
                      vk.com/clubveterok72
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-4">🗺️</div>
                  <p className="text-gray-600">
                    Карта проезда скоро появится здесь
                  </p>
                </div>
              </div>
            </div>         
            <div className="mt-8 p-4 bg-brand-green/10 rounded-lg">
              <p className="text-gray-700">
                <strong>Приходите познакомиться!</strong> Первая встреча — бесплатно. 
                Покажем клуб, расскажем о активностях и поможем выбрать направление для вашего ребёнка.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default ContactsPage;