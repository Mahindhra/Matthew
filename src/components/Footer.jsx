import React from 'react';
import { Mail, Phone, MapPin, Github, ArrowUp, Heart, FileText, ExternalLink } from 'lucide-react';
import { personalInfo, contactDetails } from '../data/portfolioData';

export default function Footer({ onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-950 dark:bg-[#05080f] text-slate-400 border-t border-slate-800/80 overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand & Summary */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-indigo-600 flex items-center justify-center font-extrabold text-white text-sm shadow-md shadow-primary-500/30">
                DM
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Aspiring Software Developer passionate about writing clean code, solving complex computational problems, and building modern software solutions.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Open for Opportunities
              </span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Explore Sections
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-primary-400 transition-colors">About Me</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-primary-400 transition-colors">Technical Skills</a>
              </li>
              <li>
                <a href="#education" className="hover:text-primary-400 transition-colors">Education & Timeline</a>
              </li>
              <li>
                <a href="#internships" className="hover:text-primary-400 transition-colors">Internship Experience</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary-400 transition-colors">Projects & Hackathons</a>
              </li>
              <li>
                <a href="#certifications" className="hover:text-primary-400 transition-colors">Certifications</a>
              </li>
            </ul>
          </div>

          {/* Direct Contact Details */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-primary-400 shrink-0 mt-0.5" />
                <a href={`mailto:${contactDetails.email}`} className="hover:text-primary-400 transition-colors break-all">
                  {contactDetails.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-primary-400 shrink-0" />
                <a href={`tel:${contactDetails.phone}`} className="hover:text-primary-400 transition-colors">
                  {contactDetails.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-primary-400 shrink-0" />
                <span>{contactDetails.location}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Github className="w-4 h-4 text-primary-400 shrink-0" />
                <a href={contactDetails.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">
                  github.com/{contactDetails.githubHandle}
                </a>
              </li>
            </ul>
          </div>

          {/* Resume & Actions */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Official Resume
            </h4>
            <p className="text-sm text-slate-400">
              Download the official ATS-friendly resume or view the full interactive preview directly.
            </p>
            <div className="flex flex-col gap-2.5">
              <button
                onClick={onOpenResume}
                type="button"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>View Full Resume</span>
              </button>
              
              <a
                href="/resume.pdf"
                download="Doddi_Mahindhra_Resume.pdf"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl text-white bg-gradient-to-r from-primary-600 to-indigo-600 hover:from-primary-500 hover:to-indigo-500 shadow-md transition-all"
              >
                Download PDF
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500 text-center sm:text-left">
            © {new Date().getFullYear()} Doddi Mahindhra. Designed & developed with React, Vite & Tailwind CSS.
          </p>
          
          <button
            onClick={scrollToTop}
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-primary-400" />
          </button>
        </div>
      </div>
    </footer>
  );
}
