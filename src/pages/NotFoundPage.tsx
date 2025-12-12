import Layout from '../components/layout/Layout';
import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/layout/Container';

const NotFoundPage: React.FC = () => {
  return (
    <Layout>
      <Container>
        <div className="max-w-2xl mx-auto text-center py-16">
          <div className="text-9xl font-bold text-brand-blue/20 mb-8">404</div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Страница не найдена
          </h1>
          <p className="text-gray-600 mb-8">
            Возможно, вы перешли по устаревшей ссылке или страница была перемещена.
          </p>
          <div className="space-x-4">
            <Link 
              to="/" 
              className="inline-block px-6 py-3 bg-brand-blue text-white rounded-lg hover:bg-blue-600 font-medium"
            >
              На главную
            </Link>
            <Link 
              to="/programs" 
              className="inline-block px-6 py-3 border border-brand-blue text-brand-blue rounded-lg hover:bg-blue-50 font-medium"
            >
              Посмотреть активности
            </Link>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default NotFoundPage;