import React from 'react';
import { Mail, Github, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-200 text-slate-600 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Identity */}
          <div className="text-center md:text-left space-y-1">
            <h4 className="text-base font-bold text-slate-900 tracking-tight">
              {personalInfo.fullName}
            </h4>
            <p className="text-xs text-slate-500">
              {personalInfo.title}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-xs sm:text-sm">
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-600 hover:text-blue-600 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <span className="text-slate-300">•</span>

            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-1.5 text-slate-600 hover:text-blue-600 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>

            <span className="text-slate-300">•</span>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Tagline & Copyright */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} {personalInfo.fullName}. All rights reserved.
          </p>
          <p className="italic">
            "Designed with simplicity and passion for technology."
          </p>
        </div>
      </div>
    </footer>
  );
}
