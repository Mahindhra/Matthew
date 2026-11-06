import React from 'react';
import { Smartphone, Calendar, Award, Code, PlusCircle, ArrowUpRight } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { projectActivities } from '../data/portfolioData';

export default function Projects() {
  const highlightItem = projectActivities.find(p => p.isHighlight);
  const futureItems = projectActivities.filter(p => !p.isHighlight);

  return (
    <section id="projects" className="py-20 md:py-28 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          label="Practical Work"
          title="Projects & Technical Activities"
          subtitle="Real-world engineering challenges, live hackathons, and extensible workspace for future project releases."
        />

        {/* Featured Android Hackathon Card */}
        {highlightItem && (
          <div className="pro-card p-6 sm:p-8 bg-white mb-8 border-l-4 border-l-blue-600">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-slate-100">
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-md bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                  <Smartphone className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                      <Award className="w-3 h-3 text-blue-600" />
                      {highlightItem.achievement}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">
                    {highlightItem.title}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 bg-slate-50 px-2.5 py-1 rounded border border-slate-200 self-start">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>{highlightItem.date}</span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed">
              "{highlightItem.description}"
            </p>

            <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap gap-2">
              {highlightItem.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Future Projects Placeholder Area */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            <PlusCircle className="w-4 h-4 text-slate-400" />
            <span>Future Software Projects (Editable Workspace)</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {futureItems.map((project) => (
              <div
                key={project.id}
                className="pro-card p-6 bg-white border-dashed border-slate-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      {project.achievement}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {project.date}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-800">
                    {project.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((t, idx) => (
                      <span key={idx} className="text-[11px] px-2 py-0.5 rounded bg-slate-50 text-slate-600 border border-slate-200">
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href="https://github.com/Mahindhra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-blue-600 hover:text-blue-800 flex items-center gap-1"
                  >
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
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
