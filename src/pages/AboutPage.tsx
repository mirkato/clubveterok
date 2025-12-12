import Layout from '../components/layout/Layout';
import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import Container from '../components/layout/Container';

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <PageHeader
        title="О клубе «Ветерок»"
        subtitle="Наша история и миссия"
        description="Место, где дети находят друзей, а родители — спокойствие в вашем посёлке"
        bgColor="brand-green"
      />
      <Container className="py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Детский подростковый клуб в Каменке
                </h2>
                <p className="text-gray-600 mb-4">
                  Мы создали пространство, где дети и подростки могут проводить время с пользой, 
                  находить увлечения и друзей прямо в вашем посёлке.
                </p>
                <p className="text-gray-600 mb-4">
                  Наш клуб — это <strong>не образовательное учреждение</strong>, а досуговый центр, 
                  где развитие происходит через игру, творчество и общение.
                </p>
                <div className="mt-6 p-4 bg-brand-blue/10 rounded-lg">
                  <p className="text-brand-blue font-medium">
                    Адрес: село Каменка, ул. Пионовая, д. 15 (КП «Сказка»)
                  </p>
                </div>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">🎨</div>
                <p className="text-gray-500">
                  Фотографии пространства и наших активностей скоро здесь появятся
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default AboutPage;