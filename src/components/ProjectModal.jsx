import React, { useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Terminal, 
  Database,
  Share2
} from 'lucide-react';
import { 
  VoteChainMockup, 
  EnigmaBlogMockup, 
  ManetorCrmMockup, 
  AiChatbotMockup 
} from './ProjectMockups';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const mockups = {
    votechain: <VoteChainMockup />,
    'enigma-blog': <EnigmaBlogMockup />,
    'manetor-crm': <ManetorCrmMockup />,
    'ai-chatbot': <AiChatbotMockup />,
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="glass-card bg-dark-900 border border-white/15 rounded-3xl max-w-3xl w-full shadow-2xl overflow-hidden relative my-auto text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-dark-950/80 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Project Header Mockup / Preview */}
        <div className="relative">
          {mockups[project.id]}
          <div className="absolute bottom-3 left-4 flex gap-2">
            <span className="px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-primary-600/90 text-white shadow-sm">
              {project.badge}
            </span>
            <span className="px-2.5 py-1 rounded-full text-xs font-mono text-slate-300 bg-dark-950/80 border border-white/10">
              {project.category}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
          
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.title}
            </h3>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Architecture / Highlights Specs */}
          {project.stats && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-dark-950/70 border border-white/5 font-mono text-xs">
              {Object.entries(project.stats).map(([key, value]) => (
                <div key={key}>
                  <span className="text-slate-400 uppercase tracking-wider text-[10px] block">{key}</span>
                  <span className="text-white font-semibold">{value}</span>
                </div>
              ))}
            </div>
          )}

          {/* Key Features */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-primary-400 font-semibold">
              Key Architecture & Features:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="space-y-2 pt-2 border-t border-white/10">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Technologies Used:
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Footer CTAs */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <a
                href={project.demoUrl}
                target={project.demoUrl !== '#PLACEHOLDER' ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                  project.demoUrl !== '#PLACEHOLDER'
                    ? 'bg-primary-600 hover:bg-primary-500 text-white shadow-glow-sm'
                    : 'bg-white/5 text-slate-400 border border-white/10 cursor-not-allowed'
                }`}
                title={project.demoUrl === '#PLACEHOLDER' ? 'Live demo link will be attached on deployment' : 'View live demo'}
              >
                <ExternalLink className="w-4 h-4" />
                <span>{project.demoUrl === '#PLACEHOLDER' ? 'Live Demo (Internal/Staged)' : 'Live Demo'}</span>
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white border border-white/10 text-xs font-semibold uppercase tracking-wider transition-colors"
                title="View Code on GitHub"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repo</span>
              </a>
            </div>

            <button
              onClick={onClose}
              className="text-xs font-mono text-slate-400 hover:text-white transition-colors"
            >
              Close Details ✕
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
