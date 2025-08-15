
import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { CategorySection } from './components/CategorySection';
import { Footer } from './components/Footer';
import { AI_TOOLS_CATEGORIES } from './constants';
import type { Category, Pricing } from './types';

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [pricingFilter, setPricingFilter] = useState<Pricing | 'All'>('All');

  const filteredCategories = useMemo(() => {
    const lowercasedQuery = searchQuery.toLowerCase().trim();

    const categories = AI_TOOLS_CATEGORIES.map(category => {
      let filteredTools = category.tools;

      // 1. Filter by pricing model
      if (pricingFilter !== 'All') {
        filteredTools = filteredTools.filter(tool => tool.pricing === pricingFilter);
      }

      // 2. Filter by search query
      if (lowercasedQuery) {
        filteredTools = filteredTools.filter(
          tool =>
            tool.name.toLowerCase().includes(lowercasedQuery) ||
            tool.purpose.toLowerCase().includes(lowercasedQuery)
        );
      }
      
      return { ...category, tools: filteredTools };
    }).filter(category => category.tools.length > 0); // Remove categories with no matching tools

    return categories;
  }, [searchQuery, pricingFilter]);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans">
      <Header 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery}
        pricingFilter={pricingFilter}
        setPricingFilter={setPricingFilter}
      />
      
      <main className="container mx-auto px-4 py-8">
        {filteredCategories.length > 0 ? (
          <div className="space-y-12">
            {filteredCategories.map(category => (
              <CategorySection key={category.title} category={category} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-2xl font-semibold text-slate-400">No tools found</h2>
            <p className="text-slate-500 mt-2">Try adjusting your search or filter settings.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;
