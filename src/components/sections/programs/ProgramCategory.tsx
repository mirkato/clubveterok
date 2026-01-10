// src/components/sections/programs/ProgramCategory.tsx
import React from 'react';
import ProgramCard from './ProgramCard';
import type { Program } from '../../../types/program-types';
import { BookOpen, Palette, Code, Music } from 'lucide-react';

interface ProgramCategoryProps {
  title: string;
  description: string;
  programs: Program[];
  color?: string;
  icon?: React.ComponentType<any>;
}

const ProgramCategory: React.FC<ProgramCategoryProps> = ({
  title,
  description,
  programs,
  color = 'brand-blue',
  icon: Icon
}) => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        {Icon && (
          <div className="flex justify-center mb-4">
            <Icon className="w-12 h-12 text-brand-orange" />
          </div>
        )}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          {title}
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          {description}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.map((program) => (
          <ProgramCard
            key={program.id}
            title={program.title}
            ageGroup={program.ageGroup}
            schedule={program.schedule}
            price={program.price}
            mentor={program.mentor}
            description={program.description}
            features={program.features}
            color={color}
            showDetailsButton={true}
          />
        ))}
      </div>
    </div>
  );
};

export default ProgramCategory;