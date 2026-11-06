import React from 'react';
import { Music, Utensils, Palette, PenTool } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { interests } from '../data/portfolioData';

const iconMap = {
  Music: Music,
  Utensils: Utensils,
  Palette: Palette,
  PenTool: PenTool
};

export default function Interests() {
  return (
    <section id="interests" className="py-16 md:py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 font-mono block mb-1">
            Personal Pursuits
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Personal Interests
          </h2>
          <div className="mt-3 w-10 h-0.5 bg-blue-600 rounded-full mx-auto"></div>
        </div>

        {/* Clean Minimal Horizontal Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {interests.map((item, index) => {
            const Icon = iconMap[item.icon] || Music;

            return (
              <div
                key={index}
                className="pro-card p-5 bg-white flex flex-col items-center justify-center text-center space-y-2.5"
              >
                <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700">
                  <Icon className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-sm font-semibold text-slate-800">
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
