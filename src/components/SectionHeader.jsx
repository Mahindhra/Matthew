import React from 'react';

export default function SectionHeader({ badge, title, highlight, subtitle, align = 'center' }) {
  const isCenter = align === 'center';
  
  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'text-left'}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 glass-card border border-primary-500/30 text-primary-400 bg-primary-500/10 shadow-sm ${isCenter ? 'mx-auto' : ''}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-primary-400 animate-pulse"></span>
          <span>{badge}</span>
        </div>
      )}
      
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
        {title} {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
