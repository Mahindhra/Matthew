import React from 'react';
import { Download, Mail, Github, Linkedin, ArrowRight, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 bg-white border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <div className="space-y-2">
              <span className="text-xs sm:text-sm font-semibold tracking-widest text-slate-500 uppercase block font-mono">
                {personalInfo.introSmall}
              </span>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {personalInfo.fullName}
              </h1>
              
              <p className="text-xl sm:text-2xl font-semibold text-blue-600">
                {personalInfo.title}
              </p>
            </div>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              {personalInfo.heroDescription}
            </p>

            {/* Location Pill */}
            <div className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-500 font-medium">
              <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
              <span>{personalInfo.location}</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="/resume.pdf"
                download="Doddi_Mahindhra_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-medium text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-xs transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-medium text-sm text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 hover:border-slate-400 transition-colors"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-4 border-t border-slate-100 flex items-center gap-4">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Connect:
              </span>

              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors border border-slate-200"
                title="GitHub: Mahindhra"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md text-slate-600 hover:text-blue-600 hover:bg-slate-100 transition-colors border border-slate-200 relative group"
                title="LinkedIn Profile (Editable Placeholder)"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
                <span className="absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-0.5 rounded text-[10px] bg-slate-800 text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  LinkedIn (Placeholder)
                </span>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-md text-slate-600 hover:text-blue-600 hover:bg-slate-100 transition-colors border border-slate-200"
                title={`Email: ${personalInfo.email}`}
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Clean Professional Photograph */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-64 sm:w-72 lg:w-80">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-white p-2">
                <img
                  src={personalInfo.photoUrl}
                  alt={personalInfo.fullName}
                  className="w-full h-auto aspect-[4/4.5] object-cover rounded-xl"
                />
              </div>
              <div className="mt-3 text-center">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium text-slate-600 bg-slate-100 border border-slate-200">
                  {personalInfo.title}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
