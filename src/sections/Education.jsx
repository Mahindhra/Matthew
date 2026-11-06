import React from 'react';
import { GraduationCap, MapPin, Award } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { educationList } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          label="Academic Background"
          title="Education"
          subtitle="Formal university degree and secondary schooling foundations in mathematics, physical sciences, and computing."
        />

        <div className="max-w-3xl mx-auto space-y-6">
          {educationList.map((edu) => (
            <div
              key={edu.id}
              className="pro-card p-6 sm:p-8 bg-white relative flex flex-col sm:flex-row sm:items-start justify-between gap-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 mt-0.5">
                  <GraduationCap className="w-5 h-5" />
                </div>
                
                <div className="space-y-1">
                  <span className="text-xs font-semibold text-blue-600 font-mono uppercase tracking-wider">
                    {edu.field}
                  </span>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                    {edu.degree}
                  </h3>
                  
                  <p className="text-sm font-medium text-slate-700">
                    {edu.institution}
                  </p>
                  
                  <p className="text-xs text-slate-500 flex items-center gap-1 pt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{edu.location}</span>
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 pt-2 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>

              {/* Highlight Academic Performance */}
              <div className="sm:self-start shrink-0">
                <div className="inline-flex sm:flex flex-col items-center sm:items-end justify-center px-3 py-2 rounded-md bg-slate-50 border border-slate-200">
                  <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                    {edu.gradeLabel}
                  </span>
                  <span className="text-lg font-bold text-slate-900 font-mono">
                    {edu.gradeValue}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
