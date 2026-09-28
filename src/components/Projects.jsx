import React from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  ArrowRight, 
  Eye, 
  Sparkles,
  Layers
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { 
  VoteChainMockup, 
  EnigmaBlogMockup, 
  ManetorCrmMockup, 
  AiChatbotMockup 
} from './ProjectMockups';

export default function Projects({ onSelectProject }) {
  const mockupComponents = {
    votechain: <VoteChainMockup />,
    'enigma-blog': <EnigmaBlogMockup />,
    'manetor-crm': <ManetorCrmMockup />,
    'ai-chatbot': <AiChatbotMockup />,
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-primary-400 bg-primary-500/10 border border-primary-500/20 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>FEATURED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineered Projects & Systems
          </h2>
          <p className="mt-3 text-slate-400 text-base leading-relaxed">
            Real-world full-stack web platforms, API architectures, and AI implementations built with modern tools.
          </p>
        </div>

        {/* Projects Grid: 2 Columns for Large Premium Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="glass-card glass-card-hover rounded-2xl border border-white/10 overflow-hidden flex flex-col justify-between group transition-all duration-300"
            >
              <div>
                {/* Project Mockup / Visual Window */}
                <div className="relative group/mockup">
                  {mockupComponents[project.id]}
                  
                  {/* Floating badge */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-dark-950/80 text-primary-300 border border-white/10 backdrop-blur-md">
                      {project.category}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-primary-600/80 text-white shadow-sm">
                      {project.badge}
                    </span>
                  </div>

                  {/* Hover Overlay with "View Details" trigger */}
                  <div className="absolute inset-0 bg-dark-950/60 opacity-0 group-hover/mockup:opacity-100 backdrop-blur-sm transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="px-4 py-2 rounded-xl bg-white text-slate-900 text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-2 transform translate-y-2 group-hover/mockup:translate-y-0 transition-transform"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Inspect Project Architecture</span>
                    </button>
                  </div>
                </div>

                {/* Card Content Area */}
                <div className="p-6 sm:p-7 space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-primary-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">
                    {project.shortDescription}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-dark-900/80 border border-white/5 text-[11px] font-mono text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 sm:px-7 pb-6 pt-2 border-t border-white/5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-primary-400 hover:text-primary-300 transition-colors"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={project.demoUrl}
                    target={project.demoUrl !== '#PLACEHOLDER' ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg border text-xs flex items-center gap-1 transition-all ${
                      project.demoUrl !== '#PLACEHOLDER'
                        ? 'bg-white/5 hover:bg-white/10 text-white border-white/10'
                        : 'bg-white/5 text-slate-500 border-white/5 cursor-not-allowed'
                    }`}
                    title={project.demoUrl === '#PLACEHOLDER' ? 'Live Demo link reserved for deployment' : 'Open Live Demo'}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="hidden sm:inline">Live Demo</span>
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white border border-white/10 text-xs flex items-center gap-1 transition-colors"
                    title="View GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                    <span className="hidden sm:inline">Code</span>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
