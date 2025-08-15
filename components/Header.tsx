
import React from 'react';
import type { Pricing } from '../types';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  pricingFilter: Pricing | 'All';
  setPricingFilter: (filter: Pricing | 'All') => void;
}

const pricingOptions: Array<{key: Pricing | 'All', label: string}> = [
    { key: 'All', label: 'All Tools' },
    { key: 'Free', label: '🆓 Free' },
    { key: 'Freemium', label: '⚖️ Freemium' },
    { key: 'Paid', label: '💰 Paid' },
];

export const Header: React.FC<HeaderProps> = ({ searchQuery, setSearchQuery, pricingFilter, setPricingFilter }) => {
  return (
    <header className="sticky top-0 z-10 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
      <div className="container mx-auto px-4 py-5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-sky-400 to-emerald-400 text-transparent bg-clip-text">
              AI Tool Directory
            </h1>
            <p className="text-slate-400 mt-1">Your guide to the world of AI tools</p>
          </div>
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search for tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full bg-slate-800 text-slate-200 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-colors"
              aria-label="Search for AI tools"
            />
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 mt-5 flex-wrap">
            {pricingOptions.map(({ key, label }) => (
                <button
                    key={key}
                    onClick={() => setPricingFilter(key)}
                    className={`px-4 py-1.5 text-sm font-semibold rounded-full transition-all duration-200 border-2 ${
                        pricingFilter === key
                            ? 'bg-sky-500 border-sky-500 text-white'
                            : 'bg-slate-800/50 border-slate-700 text-slate-300 hover:bg-slate-700/70 hover:border-slate-600'
                    }`}
                    aria-pressed={pricingFilter === key}
                >
                    {label}
                </button>
            ))}
        </div>
      </div>
    </header>
  );
};
