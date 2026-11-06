import React from 'react';

export default function SectionHeader({ label, title, subtitle, align = 'center' }) {
  const isCenter = align === 'center';
  
  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center max-w-2xl mx-auto' : 'text-left max-w-2xl'}`}>
      {label && (
        <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 block mb-2 font-mono">
          {label}
        </span>
      )}
      
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
        {title}
      </h2>
      
      {subtitle && (
        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
          {subtitle}
        </p>
      )}
      
      <div className={`mt-4 w-12 h-1 bg-blue-600 rounded-full ${isCenter ? 'mx-auto' : ''}`}></div>
    </div>
  );
}
