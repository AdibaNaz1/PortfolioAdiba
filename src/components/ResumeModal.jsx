import React, { useEffect } from 'react';
import { 
  X, 
  Download, 
  Printer, 
  Briefcase, 
  GraduationCap, 
  Code, 
  Award, 
  ExternalLink,
  Mail,
  Github
} from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCE, PROJECTS, ACHIEVEMENTS, SKILL_CATEGORIES } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="glass-card bg-dark-900 border border-white/15 rounded-3xl max-w-4xl w-full shadow-2xl overflow-hidden relative my-auto text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar with Actions */}
        <div className="flex items-center justify-between px-6 py-4 bg-dark-950/90 border-b border-white/10 sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-primary-400" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-200">
              Verified Developer Resume • {PERSONAL_INFO.name}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-200 hover:text-white transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-primary-400" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              aria-label="Close resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet */}
        <div className="p-6 sm:p-10 max-h-[75vh] overflow-y-auto space-y-8 bg-[#0a0f1d] text-slate-200 print:bg-white print:text-black print:p-0">
          
          {/* Header */}
          <div className="border-b border-white/10 pb-6">
            <h1 className="text-3xl font-extrabold text-white tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <h2 className="text-lg font-semibold text-primary-400 mt-1">
              {PERSONAL_INFO.title}
            </h2>
            <div className="mt-3 flex flex-wrap gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-primary-400" />
                {PERSONAL_INFO.email}
              </span>
              <span className="flex items-center gap-1.5">
                <Github className="w-3.5 h-3.5 text-primary-400" />
                github.com/{PERSONAL_INFO.githubUsername}
              </span>
              <span>📍 Lucknow, India</span>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-primary-400 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              Education
            </h3>
            <div className="p-4 rounded-xl bg-dark-950/60 border border-white/5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h4 className="text-sm font-bold text-white">
                  {PERSONAL_INFO.education.degree}
                </h4>
                <span className="text-xs font-mono text-slate-400">
                  {PERSONAL_INFO.education.year} (Graduating {PERSONAL_INFO.education.graduation})
                </span>
              </div>
              <p className="text-xs text-primary-300 mt-1">
                {PERSONAL_INFO.education.college}
              </p>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-primary-400 flex items-center gap-2">
              <Code className="w-4 h-4" />
              Technical Proficiencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-xl bg-dark-950/60 border border-white/5 text-xs">
              <div>
                <span className="text-slate-400 font-mono block mb-1">Frontend:</span>
                <span className="text-slate-200">HTML5, CSS3, JavaScript (ES6+), React.js, Tailwind CSS, Bootstrap</span>
              </div>
              <div>
                <span className="text-slate-400 font-mono block mb-1">Backend & APIs:</span>
                <span className="text-slate-200">Node.js, Express.js, RESTful Architecture</span>
              </div>
              <div>
                <span className="text-slate-400 font-mono block mb-1">Databases:</span>
                <span className="text-slate-200">MongoDB</span>
              </div>
              <div>
                <span className="text-slate-400 font-mono block mb-1">AI & LLM Integration:</span>
                <span className="text-slate-200">AI/LLM APIs, Prompt Engineering, AI Web Applications</span>
              </div>
              <div className="sm:col-span-2 pt-2 border-t border-white/5">
                <span className="text-slate-400 font-mono block mb-1">Tools & Platforms:</span>
                <span className="text-slate-200">Git, GitHub, VS Code, Postman</span>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-primary-400 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              Work Experience
            </h3>
            {EXPERIENCE.map((exp) => (
              <div key={exp.id} className="p-4 rounded-xl bg-dark-950/60 border border-white/5 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <h4 className="text-sm font-bold text-white">
                    {exp.role} <span className="text-slate-400 font-normal">at {exp.company}</span>
                  </h4>
                  <span className="text-xs font-mono text-slate-400">{exp.period}</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-300">
                  {exp.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Featured Projects */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-primary-400 flex items-center gap-2">
              <Code className="w-4 h-4" />
              Key Projects
            </h3>
            <div className="space-y-3">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="p-4 rounded-xl bg-dark-950/60 border border-white/5 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-white">{proj.title}</h4>
                    <span className="text-[11px] font-mono text-primary-400">{proj.category}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {proj.shortDescription}
                  </p>
                  <p className="text-[11px] font-mono text-slate-400">
                    <span className="text-slate-500">Stack:</span> {proj.tech.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Extracurricular */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-primary-400 flex items-center gap-2">
              <Award className="w-4 h-4" />
              Certifications & Technical Activities
            </h3>
            <div className="p-4 rounded-xl bg-dark-950/60 border border-white/5 space-y-2 text-xs">
              {ACHIEVEMENTS.map((ach, idx) => (
                <div key={idx} className="flex items-start justify-between">
                  <div>
                    <span className="font-semibold text-white">{ach.title}</span> – <span className="text-slate-400">{ach.organization}</span>
                  </div>
                  <span className="font-mono text-[10px] text-slate-500">{ach.tag}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
