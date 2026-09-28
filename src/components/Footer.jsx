import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer() {
  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-20 w-full bg-dark-950 border-t border-white/10 pt-16 pb-12 mt-12 sm:mt-16 overflow-hidden">
      {/* Background soft ambient glow - contained safely */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-36 bg-primary-600/5 rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Layout: Responsive 3-Part Grid / Flex */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-white/10 items-start">
          
          {/* Brand Info (4 cols on lg) */}
          <div className="md:col-span-2 lg:col-span-4 space-y-3 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-purple p-[1px] shadow-glow-sm">
                <div className="w-full h-full bg-dark-900 rounded-[7px] flex items-center justify-center">
                  <span className="text-xs font-bold text-white">AN</span>
                </div>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>
            
            <p className="text-sm text-primary-300 font-mono">
              {PERSONAL_INFO.title}
            </p>
            
            <p className="text-xs text-slate-400 max-w-sm mx-auto sm:mx-0 leading-relaxed">
              4th-Year B.Tech CSE student passionate about responsive full-stack architectures, clean codebases, and modern AI model integrations.
            </p>

            <div className="pt-1 flex items-center justify-center sm:justify-start gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] font-mono text-emerald-400">Available for technical opportunities</span>
            </div>
          </div>

          {/* Quick Navigation Links (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 text-center sm:text-left font-semibold">
              Navigation
            </h4>
            <nav className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-x-4 gap-y-2.5 text-sm font-medium text-slate-400 text-center sm:text-left">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-primary-300 transition-colors py-1 inline-block"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect & Back to Top (3 cols on lg) */}
          <div className="lg:col-span-3 flex flex-col items-center sm:items-start lg:items-end justify-between space-y-4">
            <div className="space-y-3 w-full text-center sm:text-left lg:text-right">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                Connect
              </h4>
              <div className="flex items-center justify-center sm:justify-start lg:justify-end gap-2.5">
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all border border-white/5 hover:border-white/20 shadow-sm"
                  title="GitHub Profile"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-blue-400 transition-all border border-white/5 hover:border-white/20 shadow-sm"
                  title="LinkedIn Profile"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-primary-300 transition-all border border-white/5 hover:border-white/20 shadow-sm"
                  title="Send Email"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>

                <button
                  onClick={scrollToTop}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all border border-white/5 hover:border-white/20 shadow-sm"
                  title="Scroll to Top"
                  aria-label="Scroll to top"
                >
                  <ArrowUp className="w-4 h-4" />
                </button>
              </div>
            </div>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-xs font-mono text-slate-400 hover:text-primary-300 transition-colors"
            >
              {PERSONAL_INFO.email}
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 text-center sm:text-left">
          <p>© 2026 {PERSONAL_INFO.name}. All rights reserved.</p>
          <div className="flex items-center gap-1.5 text-slate-400">
            <span>Crafted with clean React, Tailwind CSS & AI.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
