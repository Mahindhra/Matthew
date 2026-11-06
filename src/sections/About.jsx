import React from 'react';
import { BookOpen, CheckCircle, Users, RefreshCw } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { personalInfo, aboutHighlights } from '../data/portfolioData';

const iconMap = {
  BookOpen: BookOpen,
  CheckCircle: CheckCircle,
  Users: Users,
  RefreshCw: RefreshCw
};

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          label="Profile"
          title="About Me"
          subtitle="A dedicated software engineering candidate with strong computer science principles and an eagerness to contribute to real-world applications."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Narrative Content */}
          <div className="lg:col-span-6 space-y-4">
            <div className="pro-card p-6 sm:p-8 space-y-4 bg-white">
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
                Career Objective & Background
              </h3>
              
              {personalInfo.aboutParagraphs.map((paragraph, index) => (
                <p key={index} className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <div className="pt-2 text-xs text-slate-500 font-mono">
                Primary Stack: Java • C • Python • SQL • Web Tech
              </div>
            </div>
          </div>

          {/* Four Professional Highlights */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aboutHighlights.map((highlight) => {
              const Icon = iconMap[highlight.icon] || CheckCircle;

              return (
                <div
                  key={highlight.id}
                  className="pro-card p-5 bg-white flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h4 className="text-base font-semibold text-slate-900">
                      {highlight.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {highlight.description}
                    </p>
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
