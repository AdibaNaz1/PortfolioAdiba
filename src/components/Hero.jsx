import React, { useState } from 'react';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Github, 
  Linkedin, 
  Terminal, 
  Sparkles, 
  Code2, 
  CheckCircle2, 
  Copy,
  ExternalLink,
  Layers
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeTab, setActiveTab] = useState('agent');

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Introduction */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-card border border-emerald-500/20 bg-emerald-500/5 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-emerald-300 tracking-wide">
                {PERSONAL_INFO.status}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <p className="text-primary-400 font-mono text-sm sm:text-base tracking-wider font-semibold">
                Hi, I'm
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-none">
                {PERSONAL_INFO.name}
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 pt-1">
                {PERSONAL_INFO.title}
              </h2>
            </div>

            {/* Supporting Text */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              {PERSONAL_INFO.heroSupportingText}
            </p>

            {/* Academic pill */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs font-mono text-slate-400">
              <span className="px-3 py-1 rounded-md bg-white/5 border border-white/5">
                🎓 {PERSONAL_INFO.education.year}
              </span>
              <span className="px-3 py-1 rounded-md bg-white/5 border border-white/5">
                🏛️ {PERSONAL_INFO.education.college}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-accent-purple hover:from-primary-500 hover:to-accent-violet text-white text-sm font-semibold shadow-glow-sm hover:shadow-glow transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass-card hover:bg-white/10 text-slate-200 hover:text-white text-sm font-semibold border border-white/10 hover:border-primary-400/30 transition-all transform hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-primary-400" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white text-sm font-medium border border-slate-700/60 transition-all"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links & Quick Contact */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-slate-400">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500">
                Connect:
              </span>
              
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white border border-white/5 transition-colors flex items-center gap-1.5 text-xs"
                title="Adiba's GitHub Profile"
              >
                <Github className="w-4 h-4 text-slate-300" />
                <span className="hidden sm:inline font-mono">@{PERSONAL_INFO.githubUsername}</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-blue-400 border border-white/5 transition-colors flex items-center gap-1.5 text-xs"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>

              <button
                onClick={copyEmail}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-primary-300 border border-white/5 transition-colors flex items-center gap-1.5 text-xs relative group"
                title="Copy Email Address"
              >
                {copiedEmail ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-mono">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-300 group-hover:text-primary-400" />
                    <span className="font-mono text-slate-300 group-hover:text-white">{PERSONAL_INFO.email}</span>
                  </>
                )}
              </button>
            </div>

          </div>

          {/* Right Column: Modern Developer Interface Visual */}
          <div className="lg:col-span-5 relative">
            
            {/* Ambient Background Glow behind editor */}
            <div className="absolute -inset-2 bg-gradient-to-r from-primary-500/20 via-accent-purple/20 to-accent-cyan/20 rounded-2xl blur-xl opacity-70 -z-10" />

            {/* Code Editor Mockup Card */}
            <div className="glass-card rounded-2xl border border-white/10 shadow-2xl overflow-hidden text-left bg-dark-900/90 backdrop-blur-xl">
              
              {/* Editor Top Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-dark-950/90 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-primary-400" />
                    developer-workspace
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>online</span>
                </div>
              </div>

              {/* Editor Tabs */}
              <div className="flex border-b border-white/10 bg-dark-950/50 text-xs font-mono">
                <button
                  onClick={() => setActiveTab('agent')}
                  className={`px-4 py-2 flex items-center gap-2 border-r border-white/10 transition-colors ${
                    activeTab === 'agent'
                      ? 'bg-dark-900 text-primary-400 border-t-2 border-t-primary-500 font-medium'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-accent-purple" />
                  <span>AiIntegration.jsx</span>
                </button>
                <button
                  onClick={() => setActiveTab('stack')}
                  className={`px-4 py-2 flex items-center gap-2 border-r border-white/10 transition-colors ${
                    activeTab === 'stack'
                      ? 'bg-dark-900 text-primary-400 border-t-2 border-t-primary-500 font-medium'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5 text-blue-400" />
                  <span>StackConfig.json</span>
                </button>
              </div>

              {/* Code Content */}
              <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto text-slate-300">
                {activeTab === 'agent' ? (
                  <pre className="space-y-1">
                    <div><span className="text-accent-purple">import</span> <span className="text-blue-300">&#123; createAgent &#125;</span> <span className="text-accent-purple">from</span> <span className="text-emerald-300">'@ai/core'</span>;</div>
                    <div className="text-slate-500">// Initialize Full-Stack Developer context</div>
                    <div><span className="text-blue-400">const</span> <span className="text-yellow-300">developer</span> = <span className="text-accent-purple">new</span> <span className="text-blue-300">Developer</span>(&#123;</div>
                    <div className="pl-4"><span className="text-slate-400">name:</span> <span className="text-emerald-300">"Adiba Naz"</span>,</div>
                    <div className="pl-4"><span className="text-slate-400">education:</span> <span className="text-emerald-300">"B.Tech CSE (Final Year)"</span>,</div>
                    <div className="pl-4"><span className="text-slate-400">specialization:</span> <span className="text-emerald-300">"Full Stack + AI"</span>,</div>
                    <div className="pl-4"><span className="text-slate-400">coreCapabilities:</span> [</div>
                    <div className="pl-8 text-cyan-300">"React.js", "Node.js", "Express",</div>
                    <div className="pl-8 text-cyan-300">"MongoDB", "REST APIs", "LLM APIs"</div>
                    <div className="pl-4">],</div>
                    <div className="pl-4"><span className="text-slate-400">status:</span> <span className="text-emerald-400">"Ready for Impact 🚀"</span></div>
                    <div>&#125;);</div>
                    <div className="pt-2 text-slate-500">// Run intelligent workflow pipeline</div>
                    <div><span className="text-accent-purple">await</span> <span className="text-yellow-300">developer</span>.<span className="text-primary-400">buildScalableExperience</span>();</div>
                  </pre>
                ) : (
                  <pre className="space-y-1">
                    <div>&#123;</div>
                    <div className="pl-4"><span className="text-slate-400">"targetRole":</span> <span className="text-emerald-300">"Full Stack Developer"</span>,</div>
                    <div className="pl-4"><span className="text-slate-400">"technologies":</span> &#123;</div>
                    <div className="pl-8"><span className="text-slate-400">"frontend":</span> [<span className="text-cyan-300">"React"</span>, <span className="text-cyan-300">"Tailwind"</span>],</div>
                    <div className="pl-8"><span className="text-slate-400">"backend":</span> [<span className="text-cyan-300">"Node.js"</span>, <span className="text-cyan-300">"Express"</span>],</div>
                    <div className="pl-8"><span className="text-slate-400">"database":</span> [<span className="text-cyan-300">"MongoDB"</span>],</div>
                    <div className="pl-8"><span className="text-slate-400">"intelligence":</span> [<span className="text-cyan-300">"AI/LLM APIs"</span>, <span className="text-cyan-300">"Prompting"</span>]</div>
                    <div className="pl-4">&#125;,</div>
                    <div className="pl-4"><span className="text-slate-400">"openSource":</span> <span className="text-primary-300">true</span>,</div>
                    <div className="pl-4"><span className="text-slate-400">"locationPreference":</span> <span className="text-emerald-300">"Flexible / Remote / Onsite"</span></div>
                    <div>&#125;</div>
                  </pre>
                )}
              </div>

              {/* Simulated Integrated Terminal Footer */}
              <div className="p-3 bg-dark-950 border-t border-white/10 font-mono text-[11px] text-slate-400 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-primary-400 font-bold">$</span>
                  <span>git status</span>
                  <span className="text-emerald-400">✔ working tree clean</span>
                </div>
                <span className="text-[10px] text-slate-500">Node v24.16</span>
              </div>
            </div>

            {/* Floating Tech Badges around IDE */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg glass-card border border-primary-500/30 text-xs font-mono text-primary-300 absolute -top-4 -right-2 shadow-glow-sm animate-float">
              <span className="w-2 h-2 rounded-full bg-primary-400" />
              <span>React 18 + Vite</span>
            </div>

            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg glass-card border border-accent-purple/30 text-xs font-mono text-accent-purple absolute -bottom-5 -left-3 shadow-glow-purple animate-float [animation-delay:2s]">
              <Sparkles className="w-3.5 h-3.5 text-accent-purple" />
              <span>AI Integration</span>
            </div>

            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg glass-card border border-emerald-500/30 text-xs font-mono text-emerald-300 absolute -bottom-4 right-6 shadow-sm animate-float [animation-delay:4s]">
              <Layers className="w-3.5 h-3.5 text-emerald-400" />
              <span>MERN Stack</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
