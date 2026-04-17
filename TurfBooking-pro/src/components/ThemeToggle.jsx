import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 left-6 z-[100] w-14 h-14 rounded-full glass-card border border-outline-variant/30 flex items-center justify-center hover:border-primary hover:shadow-[0_0_20px_rgba(162,255,191,0.3)] transition-all duration-300 group bg-surface/60 backdrop-blur-xl overflow-hidden"
      aria-label="Toggle Theme"
    >
      <div className={`absolute inset-0 opacity-20 blur-xl rounded-full transition-colors duration-500 ${theme === 'dark' ? 'bg-primary' : 'bg-orange-400'}`}></div>
      <span 
        className={`material-symbols-outlined text-3xl transition-all duration-500 transform group-hover:scale-110 ${theme === 'dark' ? '-rotate-12 text-primary' : 'rotate-12 text-orange-500'}`}
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        {theme === 'dark' ? 'dark_mode' : 'light_mode'}
      </span>
    </button>
  );
};

export default ThemeToggle;
