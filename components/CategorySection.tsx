
import React from 'react';
import type { Category } from '../types';
import { ToolCard } from './ToolCard';

interface CategorySectionProps {
  category: Category;
}

export const CategorySection: React.FC<CategorySectionProps> = ({ category }) => {
  return (
    <section>
      <h2 className="text-2xl md:text-3xl font-bold text-slate-200 mb-6 pb-2 border-b-2 border-slate-700">
        {category.title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.tools.map(tool => (
          <ToolCard key={tool.name} tool={tool} />
        ))}
      </div>
    </section>
  );
};
