import React from 'react';
import { Award, FileCheck, MessageSquare, CheckCircle, ShieldCheck } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { certifications } from '../data/portfolioData';

const iconMap = {
  FileCheck: FileCheck,
  Award: Award,
  MessageSquare: MessageSquare
};

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-20 lg:py-28 overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          badge="Credentials & Validation"
          title="Professional"
          highlight="Certifications"
          subtitle="Formally recognized credentials spanning systems programming, corporate communication, and productivity tooling."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert) => {
            const IconComponent = iconMap[cert.icon] || Award;

            return (
              <div
                key={cert.id}
                className="glass-card rounded-3xl p-6 sm:p-7 border border-slate-700/60 hover:border-primary-500/50 transition-all duration-300 hover:shadow-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-500/20 to-indigo-500/20 border border-primary-500/30 flex items-center justify-center text-primary-400 group-hover:scale-105 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-primary-500/10 text-primary-300 border border-primary-500/20">
                      {cert.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                    {cert.title}
                  </h3>

                  <p className="text-xs font-semibold text-slate-400 mt-1">
                    {cert.issuer}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 mt-3.5 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Key Topics Covered:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsCovered.map((skill, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        <CheckCircle className="w-3 h-3 text-emerald-400" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
