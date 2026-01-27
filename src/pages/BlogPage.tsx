import Layout from '../components/layout/Layout';
import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import Container from '../components/layout/Container';
import { Helmet } from 'react-helmet-async';

const BlogPage: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <title>Блог для родителей - Детский клуб «Ветерок»</title>
        <meta name="description" content="Полезные статьи о развитии детей, советы родителям и анонсы мероприятий детского клуба «Ветерок» в Каменке." />
      </Helmet>
      <PageHeader
        title="Блог для родителей"
        subtitle="Советы, статьи, анонсы"
        bgColor="brand-blue"
      />
      <Container className="py-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-5xl mb-6">📝</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Блог в разработке
          </h2>
          <p className="text-gray-600">
            Скоро здесь появятся полезные статьи о развитии детей, 
            советы родителям и анонсы мероприятий.
          </p>
        </div>
      </Container>
    </Layout>
  );
};

export default BlogPage;