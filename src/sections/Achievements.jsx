import React from 'react';
import { Trophy, Medal, GraduationCap, Sparkles, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { achievements } from '../data/portfolioData';

const iconMap = {
  Trophy: Trophy,
  Medal: Medal,
  GraduationCap: GraduationCap
};

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-20 lg:py-28 overflow-hidden bg-slate-900/40 dark:bg-[#070b14]/50">
      
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          badge="Honors & Recognition"
          title="Key"
          highlight="Achievements"
          subtitle="Milestones reflecting competitive problem-solving dedication, academic consistency, and drive."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Trophy;
            const isFeatured = idx === 0;

            return (
              <div
                key={item.id}
                className={`relative rounded-3xl glass-card p-6 sm:p-8 border transition-all duration-300 hover:shadow-2xl flex flex-col justify-between group ${
                  isFeatured
                    ? 'border-amber-500/50 bg-gradient-to-b from-amber-500/10 via-slate-900/60 to-slate-950/80 shadow-lg shadow-amber-500/10'
                    : 'border-slate-700/60 hover:border-primary-500/40'
                }`}
              >
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 text-[10px] font-extrabold uppercase tracking-wider shadow-md">
                    Featured Recognition
                  </div>
                )}

                <div>
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform ${
                      isFeatured
                        ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                        : 'bg-primary-500/20 text-primary-400 border border-primary-500/30'
                    }`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-slate-400">
                      {item.date}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs font-semibold text-slate-400 mt-1">
                    {item.organization}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 mt-4 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-medium text-emerald-400">
                  <Sparkles className="w-4 h-4 shrink-0" />
                  <span>{item.impact}</span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
