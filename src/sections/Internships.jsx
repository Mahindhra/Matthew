import React from 'react';
import { Cloud, Cpu, Building2, Calendar, CheckCircle2, ArrowUpRight, ShieldCheck } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { internships } from '../data/portfolioData';

const iconMap = {
  Cloud: Cloud,
  Cpu: Cpu
};

export default function Internships() {
  return (
    <section id="internships" className="relative py-20 lg:py-28 overflow-hidden">
      
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          badge="Work Experience"
          title="Internship"
          highlight="Experience"
          subtitle="Practical industry training and foundational technology exposure across Cloud Infrastructure and Artificial Intelligence."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {internships.map((internship) => {
            const IconComponent = iconMap[internship.icon] || Cloud;

            return (
              <div
                key={internship.id}
                className={`relative rounded-3xl glass-card p-6 sm:p-8 border ${internship.borderAccent} hover:border-primary-500/50 transition-all duration-300 hover:shadow-2xl flex flex-col justify-between group`}
              >
                {/* Top Corner Glow */}
                <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl ${internship.gradient} rounded-tr-3xl rounded-bl-full pointer-events-none`}></div>

                <div>
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-4 pb-6 border-b border-slate-800 relative">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 flex items-center justify-center text-primary-400 group-hover:scale-105 transition-transform shadow-md">
                        <IconComponent className="w-6 h-6 text-primary-400" />
                      </div>
                      <div>
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary-400">
                          {internship.badge}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-0.5">
                          {internship.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-1 text-sm font-semibold text-slate-300">
                          <Building2 className="w-4 h-4 text-slate-400" />
                          <span>{internship.organization}</span>
                        </div>
                      </div>
                    </div>

                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700 whitespace-nowrap">
                      {internship.type}
                    </span>
                  </div>

                  {/* Description from resume */}
                  <div className="py-5 space-y-4">
                    <blockquote className="p-4 rounded-2xl bg-slate-900/60 dark:bg-slate-950/60 border-l-4 border-primary-500 text-sm text-slate-200 italic leading-relaxed">
                      "{internship.description}"
                    </blockquote>

                    {/* Detailed Highlights */}
                    <div className="space-y-2.5">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                        Core Competencies & Hands-on Exposure:
                      </span>
                      {internship.highlights.map((point, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Technologies Pills */}
                <div className="pt-5 border-t border-slate-800/80">
                  <span className="text-[11px] font-mono uppercase text-slate-400 block mb-2">
                    Technologies & Concepts:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {internship.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
