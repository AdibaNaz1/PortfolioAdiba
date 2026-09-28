import React from 'react';
import { 
  Github, 
  GitPullRequest, 
  GitCommit, 
  GitFork, 
  Star, 
  ExternalLink, 
  Sparkles,
  Terminal,
  Activity
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function GithubSection() {
  // Generate a realistic 52-week activity heatmap visualization
  const weeks = 28;
  const daysPerWeek = 7;
  
  // Deterministic seed for visually realistic contribution distribution
  const generateLevel = (weekIndex, dayIndex) => {
    const val = (weekIndex * 7 + dayIndex * 13) % 17;
    if (val === 0 || val === 5 || val === 11) return 3; // high
    if (val === 2 || val === 8 || val === 14) return 2; // medium
    if (val % 2 === 0) return 1; // light
    return 0; // none
  };

  const colorMap = {
    0: 'bg-dark-900 border-white/5',
    1: 'bg-emerald-950/70 border-emerald-800/30',
    2: 'bg-emerald-700/80 border-emerald-600/40',
    3: 'bg-emerald-400 border-emerald-300/50',
  };

  const openSourceCards = [
    {
      title: "Full-Stack Web Architectures",
      description: "Developing modular full-stack codebases, clean REST API patterns, and database connectivity with Mongoose and MongoDB.",
      tech: ["Node.js", "Express", "MongoDB", "REST APIs"],
      metric: "Active Development",
    },
    {
      title: "AI Workflows & LLM Integrations",
      description: "Experimenting with prompt engineering, AI API wrapper utilities, and building intelligent conversational components.",
      tech: ["JavaScript", "LLM APIs", "Prompt Design"],
      metric: "Learning & Experiments",
    },
    {
      title: "DSA & Problem Solving Repository",
      description: "Practicing Data Structures and Algorithms with daily code implementations in JavaScript, optimizing runtime and space complexity.",
      tech: ["Data Structures", "Algorithms", "JavaScript"],
      metric: "Consistent Practice",
    },
  ];

  return (
    <section id="github" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with requested phrase: "Building. Learning. Contributing." */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 mb-3">
            <Github className="w-3.5 h-3.5" />
            <span>OPEN SOURCE & REPOSITORIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Building. Learning. Contributing.
          </h2>
          <p className="mt-3 text-slate-400 text-base leading-relaxed">
            Cultivating good software habits through daily commits, public codebases, and open-source collaboration.
          </p>
        </div>

        {/* GitHub Activity Card */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 mb-10 space-y-6">
          
          {/* Top Bar with Profile Info & CTA */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-white/10 pb-5">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-dark-900 border border-white/10 flex items-center justify-center text-white shadow-glow-sm">
                <Github className="w-7 h-7" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-white">@{PERSONAL_INFO.githubUsername}</h3>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    Active
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">
                  Full Stack Developer with AI • 4th-Year B.Tech CSE
                </p>
              </div>
            </div>

            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold uppercase tracking-wider border border-white/10 hover:border-primary-400/40 transition-all self-start sm:self-center"
            >
              <Github className="w-4 h-4" />
              <span>Visit GitHub Profile</span>
              <ExternalLink className="w-3.5 h-3.5 text-primary-400" />
            </a>
          </div>

          {/* Activity Heatmap Grid Visualization */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-emerald-400" />
                <span>Contribution Activity Stream</span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px]">
                <span className="text-slate-500">Less</span>
                <span className="w-2.5 h-2.5 rounded-sm bg-dark-900 border border-white/5" />
                <span className="w-2.5 h-2.5 rounded-sm bg-emerald-950/70" />
                <span className="w-2.5 h-2.5 rounded-sm bg-emerald-700" />
                <span className="w-2.5 h-2.5 rounded-sm bg-emerald-400" />
                <span className="text-slate-500">More</span>
              </div>
            </div>

            {/* Simulated Heatmap Scrollable on Mobile */}
            <div className="overflow-x-auto pb-2">
              <div className="inline-grid grid-rows-7 grid-flow-col gap-1.5 p-3 rounded-xl bg-dark-950/80 border border-white/5 min-w-[560px]">
                {Array.from({ length: weeks }).map((_, w) =>
                  Array.from({ length: daysPerWeek }).map((_, d) => {
                    const level = generateLevel(w, d);
                    return (
                      <div
                        key={`${w}-${d}`}
                        className={`w-3.5 h-3.5 rounded-sm border transition-colors hover:scale-125 ${colorMap[level]}`}
                        title={`Day ${d + 1}, Week ${w + 1}`}
                      />
                    );
                  })
                )}
              </div>
            </div>
          </div>

          {/* Quick Stats Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-white/5 text-center font-mono">
            <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
              <span className="text-[10px] text-slate-400 block uppercase">Primary Focus</span>
              <span className="text-xs font-bold text-white">Full Stack & AI</span>
            </div>
            <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
              <span className="text-[10px] text-slate-400 block uppercase">Core Workflow</span>
              <span className="text-xs font-bold text-primary-300">Git & GitHub</span>
            </div>
            <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
              <span className="text-[10px] text-slate-400 block uppercase">Languages</span>
              <span className="text-xs font-bold text-accent-purple">JS, HTML, CSS</span>
            </div>
            <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
              <span className="text-[10px] text-slate-400 block uppercase">Collaboration</span>
              <span className="text-xs font-bold text-emerald-300">Open Source</span>
            </div>
          </div>

        </div>

        {/* Open Source Focus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {openSourceCards.map((card, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover rounded-2xl p-6 border border-white/10 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <GitPullRequest className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded">
                    {card.metric}
                  </span>
                </div>

                <h4 className="text-base font-bold text-white">
                  {card.title}
                </h4>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
                {card.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-dark-900 border border-white/5 text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
