import React from 'react';
import { Award, CheckCircle, Calendar } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { achievements } from '../data/portfolioData';

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 md:py-28 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          label="Milestones"
          title="Achievements"
          subtitle="Notable performance milestones reflecting problem-solving dedication, competitive performance, and academic consistency."
        />

        <div className="max-w-4xl mx-auto space-y-4">
          {achievements.map((item, index) => {
            const isHackathon = index === 0;

            return (
              <div
                key={item.id}
                className={`pro-card p-6 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                  isHackathon ? 'border-l-4 border-l-blue-600' : ''
                }`}
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-md bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 mt-0.5">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="text-xs font-mono text-slate-500 whitespace-nowrap self-start sm:self-center bg-slate-50 px-2.5 py-1 rounded border border-slate-200">
                  {item.date}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
