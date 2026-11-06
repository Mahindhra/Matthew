import React, { useEffect } from 'react';
import { X, Download, Printer, ExternalLink, Mail, Phone, MapPin, Github, Award, BookOpen, Briefcase, Code, CheckCircle } from 'lucide-react';
import { personalInfo, educationList, internships, projects, certifications, achievements, leadershipActivities, skillCategories } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md transition-opacity">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Action Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/70">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></span>
            <h3 className="text-base sm:text-lg font-bold text-white tracking-wide">
              Resume Preview — {personalInfo.name}
            </h3>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors border border-slate-700"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>
            
            <a
              href="/resume.pdf"
              download="Doddi_Mahindhra_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-primary-600 to-indigo-600 hover:from-primary-500 hover:to-indigo-500 rounded-lg shadow-md hover:shadow-primary-500/25 transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors ml-2"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-slate-900/90 text-slate-200 selection:bg-primary-500/40">
          <div className="max-w-3xl mx-auto bg-slate-950 border border-slate-800/90 rounded-xl p-6 sm:p-10 shadow-lg text-slate-200">
            
            {/* Header */}
            <div className="text-center pb-6 border-b border-slate-800">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white uppercase">
                {personalInfo.name}
              </h1>
              <p className="text-sm font-semibold text-primary-400 mt-1 tracking-wide">
                {personalInfo.title}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs text-slate-400 mt-3">
                <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-primary-400" /> {personalInfo.phone}</span>
                <span>•</span>
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-primary-400" /> {personalInfo.location}</span>
                <span>•</span>
                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-1 hover:text-primary-400 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-primary-400" /> {personalInfo.email}
                </a>
                <span>•</span>
                <a href={personalInfo.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-primary-400 transition-colors">
                  <Github className="w-3.5 h-3.5 text-primary-400" /> GitHub: {personalInfo.github}
                </a>
              </div>
            </div>

            {/* Career Objective */}
            <div className="py-4 border-b border-slate-800">
              <h2 className="text-xs font-bold tracking-widest text-primary-400 uppercase mb-2">
                Career Objective
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Aspiring Software Developer seeking an opportunity to join a reputed organization where I can learn, grow, and contribute to innovative software solutions. Possess foundational knowledge of Java, C, HTML, CSS, JavaScript, and SQL, with strong problem-solving, teamwork, and communication skills.
              </p>
            </div>

            {/* Education */}
            <div className="py-4 border-b border-slate-800">
              <h2 className="text-xs font-bold tracking-widest text-primary-400 uppercase mb-3">
                Education
              </h2>
              <div className="space-y-3">
                {educationList.map((edu) => (
                  <div key={edu.id} className="text-xs sm:text-sm">
                    <div className="flex justify-between font-bold text-white">
                      <span>{edu.institution}</span>
                      <span className="text-slate-400 font-normal">{edu.location}</span>
                    </div>
                    <div className="flex justify-between text-slate-300 italic mt-0.5">
                      <span>{edu.degree}</span>
                      <span className="font-semibold text-primary-300 not-italic">{edu.grade}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div className="py-4 border-b border-slate-800">
              <h2 className="text-xs font-bold tracking-widest text-primary-400 uppercase mb-3">
                Technical Skills
              </h2>
              <div className="space-y-1.5 text-xs sm:text-sm">
                <div>
                  <span className="font-semibold text-white">Programming Languages: </span>
                  <span className="text-slate-300">Java, C, Python (Fundamentals)</span>
                </div>
                <div>
                  <span className="font-semibold text-white">Web Technologies: </span>
                  <span className="text-slate-300">HTML, CSS, JavaScript, XML</span>
                </div>
                <div>
                  <span className="font-semibold text-white">Database Technologies: </span>
                  <span className="text-slate-300">SQL, MySQL</span>
                </div>
                <div>
                  <span className="font-semibold text-white">Tools and Platforms: </span>
                  <span className="text-slate-300">Git, GitHub, Apache Tomcat, MS Office</span>
                </div>
                <div>
                  <span className="font-semibold text-white">Soft Skills: </span>
                  <span className="text-slate-300">Communication, Team Collaboration, Time Management, Problem Solving, Adaptability</span>
                </div>
              </div>
            </div>

            {/* Projects & Hackathons */}
            <div className="py-4 border-b border-slate-800">
              <h2 className="text-xs font-bold tracking-widest text-primary-400 uppercase mb-2">
                Projects & Hackathons
              </h2>
              <div className="text-xs sm:text-sm">
                <div className="font-semibold text-white flex justify-between">
                  <span>Android Development Hackathon</span>
                  <span className="text-slate-400 font-normal">30-09-2024 to 04-10-2024</span>
                </div>
                <p className="text-slate-300 mt-1 leading-relaxed">
                  For outstanding participation in the Hackathon focusing on Android development. Demonstrated exceptional skill and dedication in all live projects and excelled in solving the challenges presented.
                </p>
              </div>
            </div>

            {/* Internship Experience */}
            <div className="py-4 border-b border-slate-800">
              <h2 className="text-xs font-bold tracking-widest text-primary-400 uppercase mb-3">
                Internship Experience
              </h2>
              <div className="space-y-3 text-xs sm:text-sm">
                <div>
                  <div className="font-semibold text-white flex justify-between">
                    <span>AWS Cloud Computing — Adhoc Network</span>
                    <span className="text-slate-400 font-normal">Short-term internship</span>
                  </div>
                  <p className="text-slate-300 mt-0.5">
                    Completed a short-term internship and gained practical exposure to Amazon Web Services (AWS) cloud computing concepts and technologies.
                  </p>
                </div>
                <div>
                  <div className="font-semibold text-white flex justify-between">
                    <span>Artificial Intelligence and Machine Learning — ULearn</span>
                    <span className="text-slate-400 font-normal">Long-term internship</span>
                  </div>
                  <p className="text-slate-300 mt-0.5">
                    Completed a long-term internship and gained practical exposure to Artificial Intelligence and Machine Learning concepts.
                  </p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="py-4 border-b border-slate-800">
              <h2 className="text-xs font-bold tracking-widest text-primary-400 uppercase mb-2">
                Certifications
              </h2>
              <ul className="list-disc list-inside text-xs sm:text-sm text-slate-300 space-y-1">
                <li><span className="text-white font-medium">Microsoft Office:</span> Certification in MS Office.</li>
                <li><span className="text-white font-medium">C Programming:</span> Certification in C Language.</li>
                <li><span className="text-white font-medium">Pearson MePro:</span> Communication skills certification.</li>
              </ul>
            </div>

            {/* Achievements */}
            <div className="py-4 border-b border-slate-800">
              <h2 className="text-xs font-bold tracking-widest text-primary-400 uppercase mb-2">
                Achievements
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                <span className="text-white font-medium">Android Development Hackathon:</span> Recognized for outstanding participation in a hackathon held from 30 September 2024 to 04 October 2024, focused on Android development and practical problem-solving challenges.
              </p>
            </div>

            {/* Leadership and Extracurricular */}
            <div className="py-4 border-b border-slate-800">
              <h2 className="text-xs font-bold tracking-widest text-primary-400 uppercase mb-2">
                Leadership and Extracurricular Activities
              </h2>
              <ul className="list-disc list-inside text-xs sm:text-sm text-slate-300 space-y-1">
                <li><span className="text-white font-medium">Team Leadership:</span> Coordinated team projects, distributed tasks, motivated team members, and supported timely completion.</li>
                <li><span className="text-white font-medium">Event Organization:</span> Participated in organizing community-focused events to improve campus engagement.</li>
                <li><span className="text-white font-medium">Financial Literacy:</span> Actively participated in trading and financial literacy activities, developing analytical and communication skills.</li>
              </ul>
            </div>

            {/* Interests */}
            <div className="pt-4">
              <h2 className="text-xs font-bold tracking-widest text-primary-400 uppercase mb-1">
                Interests
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Playing Piano, Cooking, Painting, and Drawing.
              </p>
            </div>

          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-3 border-t border-slate-800 bg-slate-950/80 text-xs text-slate-400">
          <span>Click outside or press Esc to close</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
