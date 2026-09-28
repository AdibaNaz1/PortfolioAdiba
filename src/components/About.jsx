import React from 'react';
import { 
  GraduationCap, 
  Code, 
  Sparkles, 
  GitPullRequest, 
  Binary, 
  BookOpen, 
  CheckCircle,
  Compass
} from 'lucide-react';
import { PERSONAL_INFO, QUICK_STATS, CURRENTLY_LEARNING } from '../data/portfolioData';

export default function About() {
  const statIcons = {
    "Academic Standing": GraduationCap,
    "Core Discipline": Code,
    "Modern Edge": Sparkles,
    "Community": GitPullRequest,
    "Foundation": Binary,
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-primary-400 bg-primary-500/10 border border-primary-500/20 mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Web Solutions & Intelligent Systems
          </h2>
          <p className="mt-3 text-slate-400 text-base leading-relaxed">
            Bridging robust full-stack software architecture with modern AI capabilities.
          </p>
        </div>

        {/* Two Column Layout: Detailed Bio + Highlight Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Bio Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 space-y-5">
              <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full bg-primary-400" />
                Who I Am
              </h3>
              
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                I am a 4th-year <span className="text-white font-medium">B.Tech Computer Science & Engineering</span> student at <span className="text-primary-300 font-medium">Ambalika Institute of Management & Technology</span>. My journey centers around full-stack development, modern JavaScript ecosystems, and integrating practical AI/LLM models into real-world applications.
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                With hands-on experience in the MERN stack and real-world internship exposure in web development and CRM-focused interfaces, I care deeply about writing clean, maintainable code, architecting scalable backend APIs, and crafting intuitive user experiences.
              </p>

              <div className="pt-2 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary-400 flex-shrink-0" />
                  <span>College: AIMT (B.Tech CSE)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent-purple flex-shrink-0" />
                  <span>Focus: Full Stack & AI Systems</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Mindset: Open Source & Problem Solving</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>GitHub: Active Contributor</span>
                </div>
              </div>
            </div>

            {/* Currently Learning Section */}
            <div className="glass-card rounded-2xl p-6 sm:p-7 border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-accent-purple" />
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
                    Currently Expanding Knowledge In
                  </h4>
                </div>
                <span className="text-[11px] font-mono text-primary-400 bg-primary-500/10 px-2 py-0.5 rounded">
                  Daily Progress
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CURRENTLY_LEARNING.map((item, idx) => (
                  <div 
                    key={idx}
                    className="p-3 rounded-xl bg-dark-900/60 border border-white/5 hover:border-accent-purple/30 transition-all flex items-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-accent-purple/10 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-4 h-4 text-accent-purple" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-200">{item.name}</p>
                      <span className="text-[10px] font-mono text-slate-400">{item.tag}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Key Focus Statistics Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {QUICK_STATS.map((stat, idx) => {
              const IconComponent = statIcons[stat.label] || Code;
              return (
                <div
                  key={idx}
                  className={`glass-card glass-card-hover rounded-2xl p-5 border border-white/10 flex flex-col justify-between ${
                    idx === 0 ? 'sm:col-span-2' : ''
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="w-10 h-10 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-primary-400" />
                    </div>
                    <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                      {stat.highlight}
                    </span>
                  </div>

                  <div className="mt-6">
                    <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      {stat.label}
                    </p>
                    <p className="text-lg font-bold text-white mt-1">
                      {stat.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
