import React from 'react';
import { Code2, Globe, Database, Wrench, Award } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { skillCategories } from '../data/portfolioData';

const iconMap = {
  Code2: Code2,
  Globe: Globe,
  Database: Database,
  Wrench: Wrench,
  Award: Award
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          label="Competencies"
          title="Technical Skills"
          subtitle="Categorized technical proficiencies and tooling based strictly on verified academic curriculum and practical exposure."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => {
            const Icon = iconMap[cat.icon] || Code2;

            return (
              <div
                key={cat.id}
                className="pro-card p-6 bg-white flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 pb-4 mb-4 border-b border-slate-100">
                    <div className="w-9 h-9 rounded-md bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      {cat.title}
                    </h3>
                  </div>

                  {/* Skill Items */}
                  <div className="space-y-2.5">
                    {cat.skills.map((skill, index) => (
                      <div
                        key={index}
                        className="p-2.5 rounded-md bg-slate-50 border border-slate-200/80 flex items-center justify-between gap-2"
                      >
                        <span className="text-xs sm:text-sm font-semibold text-slate-800">
                          {skill.name}
                        </span>
                        <span className="text-[11px] text-slate-500 font-medium">
                          {skill.detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-400">
                  {cat.skills.length} competencies listed
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
