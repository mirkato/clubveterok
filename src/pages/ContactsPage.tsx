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
                      Тюменская обл., Тюменский р-н <br />
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
                <div style={{position: 'relative', overflow: 'hidden'}} className="w-full h-80">
                  <a href="https://yandex.ru/maps/org/detskiy_klub_veterok/110338595840/?utm_medium=mapframe&utm_source=maps" style={{color: '#eee', fontSize: '12px', position: 'absolute', top: '0px'}}>Детский клуб Ветерок</a>
                  <a href="https://yandex.ru/maps/11176/tyumen-oblast/category/further_education/184106162/?utm_medium=mapframe&utm_source=maps" style={{color: '#eee', fontSize: '12px', position: 'absolute', top: '14px'}}>Дополнительное образование в Тюменской области</a>
                  <iframe src="https://yandex.ru/map-widget/v1/?ll=65.077263%2C57.256385&mode=search&oid=110338595840&ol=biz&sctx=ZAAAAAgBEAAaKAoSCQYrTrUWRVBAEQkyAiocn0xAEhIJebEwRE5frz8R1CzQ7pBioD8iBgABAgMEBSgKOABAk40GSAFqAnJ1nQHNzMw9oAEAqAEAvQGvqnmGggJJ0LrQsNC6INCy0YHRgtCw0LLQuNGC0Ywg0LrQsNGA0YLRgyDQv9GA0L7QtdC30LTQsCDQuNC3IDJnaXMg0L3QsCDRgdCw0LnRgooCAJICAJoCDGRlc2t0b3AtbWFwcw%3D%3D&sll=65.077263%2C57.256385&source=serp_navig&sspn=0.013562%2C0.004688&text=%D0%BA%D0%B0%D0%BA%20%D0%B2%D1%81%D1%82%D0%B0%D0%B2%D0%B8%D1%82%D1%8C%20%D0%BA%D0%B0%D1%80%D1%82%D1%83%20%D0%BF%D1%80%D0%BE%D0%B5%D0%B7%D0%B4%D0%B0%20%D0%B8%D0%B7%202gis%20%D0%BD%D0%B0%20%D1%81%D0%B0%D0%B9%D1%82&z=16.6" width="100%" height="300" frameBorder="1" allowFullScreen={true} style={{position: 'relative'}} title="Карта проезда до Детского клуба Ветерок"></iframe>
                </div>
              </div>
            </div>         
            <div className="mt-8 p-4 bg-brand-green/10 rounded-lg">
              <p className="text-gray-700">
                <strong>Приходите познакомиться!</strong> Покажем клуб, расскажем о активностях и поможем выбрать направление для вашего ребёнка.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default ContactsPage;