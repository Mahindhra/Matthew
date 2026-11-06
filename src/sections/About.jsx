import React from 'react';
import { Brain, Sparkles, Users, Rocket, CheckCircle2, MapPin, GraduationCap, Code2, HeartHandshake } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { personalInfo, highlights } from '../data/portfolioData';

// Map string icon names to Lucide icons
const iconMap = {
  Brain: Brain,
  Sparkles: Sparkles,
  Users: Users,
  Rocket: Rocket
};

export default function About() {
  return (
    <section id="about" className="relative py-20 lg:py-28 overflow-hidden bg-slate-900/40 dark:bg-[#070b14]/50">
      
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          badge="Profile Overview"
          title="About"
          highlight="Me"
          subtitle="A passionate student of software engineering with strong computing fundamentals and an eagerness to create impact in modern technology environments."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Narrative & Values */}
          <div className="lg:col-span-6 space-y-6">
            <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-5 border border-slate-700/60 shadow-xl">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-primary-500/10 border border-primary-500/30 flex items-center justify-center text-primary-400">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Professional Background & Aspirations
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Software Development • Problem Solving • Teamwork
                  </p>
                </div>
              </div>

              {personalInfo.aboutBio.map((paragraph, index) => (
                <p key={index} className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <div className="pt-4 border-t border-slate-800/80">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Core Foundations
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
                  <div className="flex items-center gap-2 text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Object-Oriented Programming</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Algorithmic Thinking (C/Java)</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Relational Database Architecture</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Cloud & Machine Learning Exposure</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Fact Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-2xl glass-card border border-slate-700/60 text-center">
                <div className="text-2xl font-extrabold gradient-text">7.5</div>
                <div className="text-xs text-slate-400 mt-1 font-medium">Undergraduate CGPA</div>
              </div>
              <div className="p-4 rounded-2xl glass-card border border-slate-700/60 text-center">
                <div className="text-2xl font-extrabold gradient-text-emerald">97%</div>
                <div className="text-xs text-slate-400 mt-1 font-medium">SSC Distinction</div>
              </div>
              <div className="p-4 rounded-2xl glass-card border border-slate-700/60 text-center col-span-2 sm:col-span-1">
                <div className="text-2xl font-extrabold gradient-text-gold">2+</div>
                <div className="text-xs text-slate-400 mt-1 font-medium">Internships Completed</div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Highlight Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item) => {
              const IconComponent = iconMap[item.icon] || Sparkles;
              return (
                <div
                  key={item.id}
                  className="group relative p-6 rounded-3xl glass-card border border-slate-700/60 hover:border-primary-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-500/20 via-indigo-500/20 to-purple-500/20 border border-primary-500/30 flex items-center justify-center text-primary-400 group-hover:scale-110 group-hover:text-primary-300 transition-all">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <div>
                      <span className="text-[10px] font-bold tracking-wider uppercase text-primary-400 font-mono">
                        {item.tagline}
                      </span>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">
                        {item.title}
                      </h4>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-2 border-t border-slate-800/60 flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-400"></span>
                    <span>Core Trait</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
