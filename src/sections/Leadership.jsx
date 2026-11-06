import React from 'react';
import { Users, CalendarCheck, TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { leadershipActivities } from '../data/portfolioData';

const iconMap = {
  Users: Users,
  CalendarCheck: CalendarCheck,
  TrendingUp: TrendingUp
};

export default function Leadership() {
  return (
    <section id="leadership" className="relative py-20 lg:py-28 overflow-hidden">
      
      {/* Background radial accent */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-primary-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          badge="Collaboration & Initiative"
          title="Leadership &"
          highlight="Extracurriculars"
          subtitle="Demonstrating active campus leadership, community event organization, and quantitative analytical habits beyond the classroom."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {leadershipActivities.map((act) => {
            const IconComponent = iconMap[act.icon] || Users;

            return (
              <div
                key={act.id}
                className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-700/60 hover:border-primary-500/40 transition-all duration-300 hover:shadow-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-500/20 to-indigo-500/20 border border-primary-500/30 flex items-center justify-center text-primary-400 group-hover:scale-105 transition-transform mb-5">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-primary-400">
                    {act.subtitle}
                  </span>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                    {act.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 mt-3.5 leading-relaxed">
                    {act.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-start gap-2 text-xs text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{act.keyTakeaway}</span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
