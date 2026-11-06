import React from 'react';
import { Award, FileText, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { certifications } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          label="Verification"
          title="Certifications"
          subtitle="Formally assessed and certified qualifications across technical programming, workplace communication, and documentation."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="pro-card p-6 bg-white flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-md bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-4">
                  <Award className="w-5 h-5" />
                </div>

                <span className="text-[11px] font-mono uppercase text-blue-600 tracking-wider font-semibold block mb-1">
                  {cert.category}
                </span>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  {cert.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Issued by: <span className="text-slate-700 font-medium">{cert.organization}</span>
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5 text-emerald-600 font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  Verified Certification
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
