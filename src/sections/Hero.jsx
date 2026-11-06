import React, { useState, useEffect } from 'react';
import { ArrowDown, Download, Github, Mail, Linkedin, Phone, MapPin, Terminal, Sparkles, CheckCircle2, FileText, Code2, Cpu } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  // Animated title rotating effect
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(90);

  useEffect(() => {
    const currentFullText = personalInfo.subtitles[titleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentFullText.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % personalInfo.subtitles.length);
        }
      }
    }, isDeleting ? 45 : typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Glows & Grids */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none"></div>
      
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-primary-600/20 via-indigo-600/15 to-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-[90px] pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bio & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card border border-emerald-500/30 text-xs sm:text-sm font-medium text-emerald-400 bg-emerald-500/5 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Available for Software Developer Roles & Placements</span>
            </div>

            {/* Main Greeting */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Hi, I'm <span className="gradient-text">{personalInfo.preferredName}</span>
              </h1>
              
              {/* Animated Subtitle */}
              <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start">
                <p className="text-lg sm:text-2xl font-bold text-slate-700 dark:text-slate-300 font-mono flex items-center">
                  <span className="text-primary-500 mr-2">{'>'}</span>
                  <span>{displayText}</span>
                  <span className="w-2.5 h-6 bg-primary-500 ml-1 animate-pulse inline-block"></span>
                </p>
              </div>
            </div>

            {/* Introduction Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {personalInfo.heroBio}
            </p>

            {/* Quick Metadata: Location & College */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 pt-1">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-primary-400" />
                <span>{personalInfo.location}</span>
              </div>
              <span className="hidden sm:inline text-slate-600">•</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>B.Sc. MECs (CGPA: 7.5)</span>
              </div>
              <span className="hidden sm:inline text-slate-600">•</span>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>SSC (97% Distinction)</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-3">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-primary-600 via-indigo-600 to-purple-600 hover:from-primary-500 hover:via-indigo-500 hover:to-purple-500 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </a>

              <button
                onClick={onOpenResume}
                type="button"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700/80 shadow-md transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <Download className="w-4 h-4 text-primary-400" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social Links Bar */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-3">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl glass-card text-slate-600 dark:text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700/50 hover:border-primary-500/50 transition-all shadow-sm hover:scale-105"
                title="GitHub: Mahindhra"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl glass-card text-slate-600 dark:text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700/50 hover:border-primary-500/50 transition-all shadow-sm hover:scale-105"
                title={`Email: ${personalInfo.email}`}
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>

              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl glass-card text-slate-600 dark:text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700/50 hover:border-primary-500/50 transition-all shadow-sm hover:scale-105 relative group"
                title="LinkedIn Profile (Editable Placeholder)"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-0.5 rounded text-[10px] bg-slate-900 text-slate-300 border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  LinkedIn Placeholder
                </span>
              </a>

              <a
                href={`tel:${personalInfo.phone}`}
                className="p-2.5 rounded-xl glass-card text-slate-600 dark:text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700/50 hover:border-primary-500/50 transition-all shadow-sm hover:scale-105"
                title={`Phone: ${personalInfo.phone}`}
                aria-label="Phone Call"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* Right Column: High-Impact Profile Showcase Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer Decorative Gradient Rings */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-primary-500 via-indigo-600 to-purple-600 opacity-40 blur-xl animate-pulse-slow"></div>
              
              {/* Main Card Frame */}
              <div className="relative rounded-3xl bg-slate-900/90 dark:bg-[#0c1220]/95 border border-slate-700/80 p-5 shadow-2xl backdrop-blur-xl space-y-4">
                
                {/* Image Container with Floating Badges */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/4.4] bg-slate-950 border border-slate-800 group">
                  <img
                    src={personalInfo.photoUrl}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.02] transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Subtle vignette gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>
                  
                  {/* Floating Badges */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md border border-slate-700 text-xs font-mono font-medium text-primary-300 flex items-center gap-1.5 shadow-md">
                    <Code2 className="w-3.5 h-3.5 text-primary-400" />
                    <span>Java • C • SQL</span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-950/90 backdrop-blur-md border border-slate-800/90 flex items-center justify-between shadow-lg">
                    <div>
                      <div className="text-white font-bold text-sm tracking-wide">
                        {personalInfo.name}
                      </div>
                      <div className="text-[11px] text-slate-400 font-medium">
                        Aditya Degree & PG College, Visakhapatnam
                      </div>
                    </div>
                    <div className="px-2.5 py-1 rounded-md bg-primary-500/20 text-primary-300 border border-primary-500/40 text-xs font-bold font-mono">
                      7.5 CGPA
                    </div>
                  </div>
                </div>

                {/* Micro Terminal Snippet Card */}
                <div className="rounded-xl bg-slate-950 border border-slate-800/80 p-3 font-mono text-[11px] space-y-1 text-slate-300">
                  <div className="flex items-center justify-between text-slate-500 pb-1 border-b border-slate-800/60">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                      <span className="text-[10px] ml-1 text-slate-400">developer@mahindhra: ~</span>
                    </div>
                    <Terminal className="w-3 h-3 text-slate-500" />
                  </div>
                  <div className="pt-1 text-slate-400">
                    <span className="text-emerald-400">const</span> <span className="text-primary-300">developer</span> = &#123;
                  </div>
                  <div className="pl-4 text-slate-400">
                    skills: <span className="text-amber-300">['Java', 'C', 'Python', 'SQL', 'HTML/CSS/JS']</span>,
                  </div>
                  <div className="pl-4 text-slate-400">
                    internships: <span className="text-cyan-300">['AWS Cloud', 'AI & Machine Learning']</span>,
                  </div>
                  <div className="pl-4 text-slate-400">
                    readyToDeploy: <span className="text-emerald-400">true</span>
                  </div>
                  <div className="text-slate-400">&#125;;</div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
