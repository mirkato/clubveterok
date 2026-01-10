// src/pages/ProgramCategoryPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Container from '../components/layout/Container';
import PageHeader from '../components/ui/PageHeader';
import ProgramCategory from '../components/sections/programs/ProgramCategory';
import { programCategories } from '../data/programs-data';

const ProgramCategoryPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  
  // Find the category by ID
  const category = programCategories.find(cat => cat.id === categoryId);
  
  if (!category) {
    return (
      <Layout>
        <Container className="py-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Категория не найдена</h1>
            <p className="text-gray-600">Запрашиваемая категория программ не существует.</p>
          </div>
        </Container>
      </Layout>
    );
  }

  return (
    <Layout>
      <PageHeader
        title={category.title}
        subtitle={category.description}
        bgColor={category.color}
      />
      
      <Container className="py-12">
        <ProgramCategory
          title={category.title}
          description={category.description}
          programs={category.programs}
          color={category.color}
          icon={category.icon}
        />
      </Container>
    </Layout>
  );
};

export default ProgramCategoryPage;