import React from 'react';
import { Briefcase, Calendar, Building2, CheckCircle2, Award } from 'lucide-react';
import { EXPERIENCE } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-primary-400 bg-primary-500/10 border border-primary-500/20 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>PRACTICAL EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work & Internship Experience
          </h2>
          <p className="mt-3 text-slate-400 text-base leading-relaxed">
            Real-world software engineering practice and production contributions.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto">
          {EXPERIENCE.map((item) => (
            <div key={item.id} className="relative pl-6 sm:pl-8 pb-10 group">
              
              {/* Vertical timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-purple to-slate-800" />

              {/* Glowing timeline node */}
              <div className="absolute -left-[9px] top-1.5 w-5 h-5 rounded-full bg-dark-950 border-2 border-primary-500 flex items-center justify-center group-hover:scale-110 transition-transform shadow-glow-sm">
                <div className="w-2 h-2 rounded-full bg-primary-400" />
              </div>

              {/* Main Experience Card */}
              <div className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8 border border-white/10 space-y-5">
                
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-white/10 pb-4">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold uppercase tracking-wider text-primary-300 bg-primary-500/10 border border-primary-500/20 mb-1.5">
                      {item.type}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {item.role}
                    </h3>
                    <div className="flex items-center gap-2 text-slate-300 text-sm mt-1">
                      <Building2 className="w-4 h-4 text-primary-400" />
                      <span className="font-semibold text-slate-200">{item.company}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 self-start sm:self-center bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                    <Calendar className="w-3.5 h-3.5 text-primary-400" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Key Contributions List */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Key Work & Contributions:
                  </h4>
                  <ul className="space-y-2.5">
                    {item.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Tags */}
                <div className="pt-2 border-t border-white/10 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-400 mr-2">Key Areas:</span>
                  {item.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-dark-900/80 border border-white/5 text-xs font-mono text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
