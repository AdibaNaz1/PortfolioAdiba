import React, { useState } from 'react';
import { 
  Code, 
  Server, 
  Database, 
  Wrench, 
  Sparkles,
  Layers,
  Cpu,
  Layout,
  Palette,
  Wind,
  Boxes,
  Network,
  GitBranch,
  Github,
  Terminal,
  Send,
  Wand2,
  Bot
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const iconMap = {
    Layout: Layout,
    Palette: Palette,
    Code: Code,
    Atom: Layers,
    Wind: Wind,
    Boxes: Boxes,
    Cpu: Cpu,
    Layers: Layers,
    Network: Network,
    Database: Database,
    Sparkles: Sparkles,
    Wand2: Wand2,
    Bot: Bot,
    GitBranch: GitBranch,
    Github: Github,
    Terminal: Terminal,
    Send: Send,
  };

  const categoryIcons = {
    frontend: Layout,
    backend: Server,
    database: Database,
    ai: Sparkles,
    tools: Wrench,
  };

  const filteredCategories = activeCategory === 'all' 
    ? SKILL_CATEGORIES 
    : SKILL_CATEGORIES.filter(c => c.id === activeCategory);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-primary-400 bg-primary-500/10 border border-primary-500/20 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Modern Technologies
          </h2>
          <p className="mt-3 text-slate-400 text-base leading-relaxed">
            Technologies, libraries, and tools I use to build scalable web applications and intelligent user experiences.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
              activeCategory === 'all'
                ? 'bg-primary-600 text-white shadow-glow-sm'
                : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5'
            }`}
          >
            All Disciplines
          </button>
          {SKILL_CATEGORIES.map((cat) => {
            const Icon = categoryIcons[cat.id] || Code;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                  activeCategory === cat.id
                    ? 'bg-primary-600 text-white shadow-glow-sm'
                    : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.id}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Display Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => {
            const CatIcon = categoryIcons[cat.id] || Code;
            return (
              <div 
                key={cat.id}
                className="glass-card rounded-2xl p-6 border border-white/10 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 pb-4 mb-4 border-b border-white/10">
                    <div className="w-9 h-9 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-primary-400">
                      <CatIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white tracking-wide">
                        {cat.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {cat.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Pills / Micro Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {cat.skills.map((skill, idx) => {
                      const SkillIcon = iconMap[skill.icon] || Code;
                      return (
                        <div
                          key={idx}
                          className="group p-2.5 rounded-xl bg-dark-900/60 hover:bg-dark-850 border border-white/5 hover:border-primary-400/30 transition-all duration-200 flex items-center gap-2.5 hover:shadow-glow-sm"
                        >
                          <div className="w-7 h-7 rounded-lg bg-white/5 group-hover:bg-primary-500/20 text-slate-300 group-hover:text-primary-300 flex items-center justify-center transition-colors">
                            <SkillIcon className="w-4 h-4" />
                          </div>
                          <div className="overflow-hidden">
                            <p className="text-xs font-semibold text-slate-200 group-hover:text-white truncate">
                              {skill.name}
                            </p>
                            <span className="text-[10px] font-mono text-slate-400">
                              {skill.level}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
