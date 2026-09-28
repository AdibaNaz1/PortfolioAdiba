import React from 'react';
import { Award, GitPullRequest, Users, Trophy, CheckCircle } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';

export default function Achievements() {
  const icons = {
    Award: Award,
    GitPullRequest: GitPullRequest,
    Users: Users,
    Trophy: Trophy,
  };

  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-primary-400 bg-primary-500/10 border border-primary-500/20 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>CREDENTIALS & INVOLVEMENT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Achievements & Certifications
          </h2>
          <p className="mt-3 text-slate-400 text-base leading-relaxed">
            Verified qualifications, active technical club participation, and competitive coding activities.
          </p>
        </div>

        {/* Grid of 4 authentic achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ACHIEVEMENTS.map((item, idx) => {
            const Icon = icons[item.icon] || Award;
            return (
              <div
                key={idx}
                className="glass-card glass-card-hover rounded-2xl p-6 sm:p-7 border border-white/10 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-primary-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-primary-300">
                      {item.tag}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                      {item.organization}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-slate-400">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{item.type}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
