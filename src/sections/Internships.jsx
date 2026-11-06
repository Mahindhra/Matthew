import React from 'react';
import { Cloud, Cpu, Building, Calendar, Check } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { internships } from '../data/portfolioData';

const iconMap = {
  Cloud: Cloud,
  Cpu: Cpu
};

export default function Internships() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          label="Professional Training"
          title="Internship Experience"
          subtitle="Direct technical internships providing practical exposure to cloud computing and machine learning foundations."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {internships.map((item, index) => {
            const Icon = index === 0 ? Cloud : Cpu;

            return (
              <div
                key={item.id}
                className="pro-card p-6 sm:p-8 bg-white flex flex-col justify-between"
              >
                <div className="space-y-4">
                  
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-md bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm font-medium text-slate-600 flex items-center gap-1.5 mt-0.5">
                          <Building className="w-3.5 h-3.5 text-slate-400" />
                          <span>{item.organization}</span>
                        </p>
                      </div>
                    </div>

                    <span className="px-2.5 py-1 rounded text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200 shrink-0">
                      {item.duration}
                    </span>
                  </div>

                  {/* Description from resume */}
                  <p className="text-sm text-slate-600 leading-relaxed">
                    "{item.description}"
                  </p>

                  {/* Topics Covered */}
                  <div className="pt-2">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">
                      Key Concepts Covered:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.topics.map((topic, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded text-xs bg-slate-50 text-slate-700 border border-slate-200"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 text-[11px] text-slate-400">
                  Verified Internship Record
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
