import React from 'react';
import { GraduationCap, Award, MapPin, Calendar, BookOpen, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { educationList } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="relative py-20 lg:py-28 overflow-hidden bg-slate-900/40 dark:bg-[#070b14]/50">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          badge="Academic Background"
          title="Education &"
          highlight="Qualifications"
          subtitle="A structured academic foundation in computer science, mathematics, electronics, and analytical thinking."
        />

        {/* Education Timeline */}
        <div className="relative border-l-2 border-slate-700/60 ml-4 sm:ml-8 md:ml-32 space-y-12">
          {educationList.map((edu, idx) => (
            <div key={edu.id} className="relative pl-6 sm:pl-10">
              
              {/* Timeline Indicator Dot / Icon */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-slate-950 border-2 border-primary-500 flex items-center justify-center text-primary-400 shadow-md shadow-primary-500/30">
                <GraduationCap className="w-4 h-4" />
              </div>

              {/* Education Card */}
              <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-700/60 hover:border-primary-500/40 transition-all duration-300 hover:shadow-xl">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800">
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-primary-400">
                      {edu.duration}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-0.5">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-semibold text-slate-300 mt-0.5">
                      {edu.institution}
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-gradient-to-r from-primary-500/20 to-indigo-500/20 text-primary-300 border border-primary-500/30 text-sm font-bold font-mono">
                      <Award className="w-4 h-4 text-amber-400" />
                      <span>{edu.grade}</span>
                    </div>
                    <span className="text-xs text-slate-400 flex items-center gap-1 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-primary-400" />
                      {edu.location}
                    </span>
                  </div>
                </div>

                {/* Highlight Description */}
                <p className="text-sm text-slate-300 mt-4 leading-relaxed">
                  {edu.highlight}
                </p>

                {/* Coursework Tags */}
                <div className="mt-5 pt-4 border-t border-slate-800/60">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Key Academic Areas:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs bg-slate-900/80 text-slate-300 border border-slate-800"
                      >
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        <span>{course}</span>
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
