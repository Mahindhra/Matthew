import React, { useState } from 'react';
import { Code, Globe, Database, Wrench, CheckCircle, Sparkles, Layers, ShieldCheck, Check } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { skillCategories } from '../data/portfolioData';

const iconCategoryMap = {
  Code: Code,
  Globe: Globe,
  Database: Database,
  Wrench: Wrench,
  CheckCircle: CheckCircle
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredCategories = selectedCategory === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === selectedCategory);

  return (
    <section id="skills" className="relative py-20 lg:py-28 overflow-hidden">
      
      {/* Decorative Blur */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          badge="Technical Competencies"
          title="Skills &"
          highlight="Expertise"
          subtitle="Categorized technical capabilities and foundational knowledge based strictly on verified curriculum, projects, and certifications."
        />

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
              selectedCategory === 'all'
                ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/25'
                : 'glass-card text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            All Competencies ({skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)})
          </button>
          
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                selectedCategory === cat.id
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/25'
                  : 'glass-card text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const IconComponent = iconCategoryMap[category.icon] || Code;

            return (
              <div
                key={category.id}
                className="glass-card rounded-3xl p-6 border border-slate-700/60 hover:border-primary-500/40 transition-all duration-300 hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 pb-4 border-b border-slate-800/80 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500/20 to-indigo-500/20 border border-primary-500/30 flex items-center justify-center text-primary-400 shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white">
                        {category.title}
                      </h3>
                      <p className="text-[11px] text-slate-400 leading-tight">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills List within Category */}
                  <div className="space-y-3.5">
                    {category.skills.map((skill, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-2xl bg-slate-900/60 dark:bg-slate-950/60 border border-slate-800 hover:border-slate-700 transition-colors"
                      >
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="font-bold text-sm text-slate-200">
                            {skill.name}
                          </span>
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wide bg-primary-500/10 text-primary-300 border border-primary-500/20">
                            {skill.badge}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer hint */}
                <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    Verified from resume
                  </span>
                  <span className="font-mono">{category.skills.length} items</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note Regarding Skill Competency Display */}
        <div className="mt-12 p-4 rounded-2xl glass-card border border-primary-500/20 text-center max-w-2xl mx-auto text-xs text-slate-400">
          <span className="font-semibold text-primary-300">Curriculum & Exposure Note:</span> Skills are represented using realistic focus indicators and verified coursework rather than arbitrary percentage metrics.
        </div>

      </div>
    </section>
  );
}
