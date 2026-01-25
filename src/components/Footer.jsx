import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-900/80 backdrop-blur-sm py-8 px-4 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">
            &copy; 2026 Maaz Ahmad Khan. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="https://github.com/maaz81" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/maaz-ahmad-khan-b052062b6/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
              LinkedIn
            </a>
            <a href="mailto:khanmaazahmad7@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors">
              Email
            </a>
          </div>
        </div>
        <div className="text-center mt-4 text-sm text-gray-500">
          Built with React.js, Tailwind CSS & Framer Motion
        </div>
      </div>
    </footer>
  );
}