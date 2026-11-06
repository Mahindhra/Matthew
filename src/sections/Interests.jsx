import React from 'react';
import { Music, Utensils, Palette, PenTool, Sparkles } from 'lucide-react';
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
    <section id="interests" className="relative py-20 lg:py-28 overflow-hidden bg-slate-900/40 dark:bg-[#070b14]/50">
      
      {/* Background radial accent */}
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          badge="Creative Pursuits"
          title="Personal"
          highlight="Interests"
          subtitle="Creative hobbies that fuel curiosity, structural focus, aesthetic sense, and disciplined practice."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {interests.map((item) => {
            const IconComponent = iconMap[item.icon] || Music;

            return (
              <div
                key={item.id}
                className={`group relative rounded-3xl glass-card p-6 border border-slate-700/60 ${item.border} transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden flex flex-col justify-between`}
              >
                {/* Ambient Card Glow */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${item.color} rounded-bl-full pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity`}></div>

                <div>
                  <div className="w-12 h-12 rounded-2xl bg-slate-900/90 border border-slate-700/80 flex items-center justify-center text-primary-400 group-hover:scale-110 group-hover:text-white transition-all shadow-md mb-5">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-primary-400">
                    {item.category}
                  </span>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center gap-1.5 text-xs text-slate-400">
                  <Sparkles className="w-3.5 h-3.5 text-primary-400" />
                  <span>Creative Discipline</span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
