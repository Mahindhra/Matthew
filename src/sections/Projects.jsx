import React from 'react';
import { Smartphone, Trophy, Calendar, Github, ExternalLink, Code2, Sparkles, Layers, Info } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { projects } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 lg:py-28 overflow-hidden bg-slate-900/40 dark:bg-[#070b14]/50">
      
      {/* Background radial accent */}
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          badge="Practical Work"
          title="Projects &"
          highlight="Hackathons"
          subtitle="Real-world engineering challenges, hackathons, and extensible project templates ready for ongoing development."
        />

        {/* Flagship Hackathon Feature Card */}
        {projects.filter(p => p.featured).map((hackathon) => (
          <div
            key={hackathon.id}
            className="mb-12 relative rounded-3xl glass-card p-6 sm:p-10 border-2 border-primary-500/40 shadow-2xl overflow-hidden group"
          >
            {/* Ambient Background Gradient */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary-500/20 via-purple-500/15 to-transparent rounded-tr-3xl rounded-bl-full pointer-events-none"></div>

            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary-500/20 text-primary-300 border border-primary-500/40">
                    <Trophy className="w-3.5 h-3.5 text-amber-400" />
                    {hackathon.badge}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-slate-400 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-primary-400" />
                    {hackathon.date}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  {hackathon.title}
                </h3>

                <blockquote className="p-4 rounded-2xl bg-slate-950/70 border-l-4 border-primary-500 text-sm sm:text-base text-slate-200 leading-relaxed italic">
                  "{hackathon.description}"
                </blockquote>

                <div className="space-y-2 pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                    Challenge Highlights & Applied Skills:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-300">
                    {hackathon.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2 shrink-0"></span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3">
                  <div className="flex flex-wrap gap-1.5">
                    {hackathon.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-xl text-xs font-semibold bg-slate-900 text-primary-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Decorative Graphic / Badge */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-950/80 border border-slate-800 text-center space-y-4">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-primary-600 via-indigo-600 to-purple-600 p-[2px] shadow-xl shadow-primary-500/30">
                  <div className="w-full h-full bg-slate-950 rounded-[22px] flex items-center justify-center">
                    <Smartphone className="w-10 h-10 text-primary-400 animate-pulse" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">Android Live Sprint</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    5-Day Intensive Hackathon (Sep 30 - Oct 04, 2024)
                  </p>
                </div>
                <div className="w-full pt-2 border-t border-slate-800 text-[11px] text-emerald-400 font-semibold flex items-center justify-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Honored for Outstanding Participation</span>
                </div>
              </div>

            </div>
          </div>
        ))}

        {/* Project Placeholders Grid */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
            <Info className="w-4 h-4 text-primary-400" />
            <span>Upcoming Portfolio Modules (Editable Placeholders)</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.filter(p => p.isPlaceholder).map((project) => (
              <div
                key={project.id}
                className="relative rounded-3xl glass-card p-6 sm:p-7 border border-dashed border-slate-700 hover:border-primary-500/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      {project.badge}
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">
                      {project.status}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    {project.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mt-4 space-y-1.5">
                    {project.highlights.map((h, i) => (
                      <div key={i} className="text-xs text-slate-300 flex items-start gap-1.5">
                        <span className="text-primary-400">•</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((t, i) => (
                      <span key={i} className="px-2 py-0.5 rounded-md text-[11px] bg-slate-900 text-slate-400 border border-slate-800 font-mono">
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href="https://github.com/Mahindhra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-400 hover:text-primary-300 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>View GitHub</span>
                  </a>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
