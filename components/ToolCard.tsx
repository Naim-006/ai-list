import React from 'react';
import type { Tool } from '../types';
import { LinkIcon } from './icons';

interface ToolCardProps {
  tool: Tool;
}

const pricingStyles = {
    Free: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
    Freemium: 'bg-sky-500/10 text-sky-400 border border-sky-500/20',
    Paid: 'bg-purple-500/10 text-purple-400 border border-purple-500/20',
};

export const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  const domain = new URL(tool.link).hostname;
  const iconUrl = `https://www.google.com/s2/favicons?sz=64&domain_url=${domain}`;

  return (
    <a
      href={tool.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col justify-between bg-slate-800/50 hover:bg-slate-800 rounded-lg p-5 border border-slate-700/50 hover:border-sky-600/70 hover:shadow-2xl hover:shadow-slate-900/50 transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="flex items-start gap-4">
        <img
          src={iconUrl}
          alt={`${tool.name} logo`}
          className="w-12 h-12 rounded-md bg-slate-700/50 object-cover flex-shrink-0"
          loading="lazy"
          onError={(e) => {
            // Fallback for failed icons
            (e.target as HTMLImageElement).style.visibility = 'hidden';
            (e.target as HTMLImageElement).parentElement?.classList.add('items-center');
          }}
        />
        <div className="flex-1">
          <h3 className="font-bold text-lg text-slate-100 group-hover:text-sky-400 transition-colors">
            {tool.name}
          </h3>
          <p className="text-slate-400 text-sm mt-1">
            {tool.purpose}
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4 pt-4 border-t border-slate-700/50">
        <span className={`px-2 py-0.5 text-xs font-semibold rounded-full whitespace-nowrap ${pricingStyles[tool.pricing]}`}>
          {tool.pricing}
        </span>
        <div className="flex items-center gap-2">
            <LinkIcon className="w-4 h-4 text-slate-500 group-hover:text-sky-400 transition-colors" />
            <span className="text-xs text-sky-500/80 truncate block">{domain}</span>
        </div>
      </div>
    </a>
  );
};