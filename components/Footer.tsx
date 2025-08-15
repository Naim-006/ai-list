import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-12 border-t border-slate-800">
      <div className="container mx-auto px-4 py-6 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} AI Tool Directory. All rights reserved.</p>
        <div className="mt-2 flex justify-center items-center gap-2 flex-wrap">
           <span className="font-semibold bg-gradient-to-r from-sky-400 to-emerald-400 text-transparent bg-clip-text">
            Powered by{' '}
            <a
              href="https://nextbyte-it.netlify.app/about#team"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              NextByte IT
            </a>
          </span>
          <span className="text-slate-600 hidden sm:inline">|</span>
          
        </div>
      </div>
    </footer>
  );
};