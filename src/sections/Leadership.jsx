import React from 'react';
import { Users, CalendarCheck, TrendingUp } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { leadershipActivities } from '../data/portfolioData';

const iconMap = {
  'Team Leadership': Users,
  'Event Organization': CalendarCheck,
  'Financial Literacy': TrendingUp
};

export default function Leadership() {
  return (
    <section id="leadership" className="py-20 md:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          label="Extracurricular"
          title="Leadership & Activities"
          subtitle="Collaborative student initiatives, event coordination, and analytical activities beyond core academics."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {leadershipActivities.map((act) => {
            const Icon = iconMap[act.title] || Users;

            return (
              <div
                key={act.id}
                className="pro-card p-6 bg-white flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-md bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    {act.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                    {act.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 text-[11px] text-slate-400">
                  Campus & Professional Activity
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
