import React from 'react';
import { 
  Vote, 
  Check, 
  Users, 
  ShieldCheck, 
  FileCode, 
  Share2, 
  MessageSquare, 
  PhoneCall, 
  Sparkles, 
  Bot, 
  Send,
  Database,
  Lock,
  ArrowUpRight,
  BarChart3
} from 'lucide-react';

export function VoteChainMockup() {
  return (
    <div className="w-full h-48 sm:h-52 bg-gradient-to-br from-slate-900 via-dark-900 to-blue-950/70 p-4 flex flex-col justify-between select-none relative overflow-hidden border-b border-white/10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
            <Vote className="w-4 h-4" />
          </div>
          <span className="text-xs font-bold text-white tracking-wide">Campus Election 2026</span>
        </div>
        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
          <ShieldCheck className="w-3 h-3" /> Secure Ballot
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2.5 my-auto">
        <div className="p-2.5 rounded-lg bg-white/5 border border-primary-500/30 flex items-center justify-between">
          <div>
            <p className="text-[11px] font-semibold text-white">Student Council Chair</p>
            <p className="text-[9px] text-slate-400 font-mono">Ballot verified</p>
          </div>
          <div className="w-5 h-5 rounded-full bg-primary-500 text-white flex items-center justify-center">
            <Check className="w-3 h-3" />
          </div>
        </div>
        <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
          <div>
            <p className="text-[11px] font-semibold text-slate-300">Tech Club Rep</p>
            <p className="text-[9px] text-slate-400 font-mono">Voting active</p>
          </div>
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
        </div>
      </div>

      <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-2 border-t border-white/5">
        <span className="flex items-center gap-1"><Users className="w-3 h-3 text-primary-400" /> 1,420 Cast Votes</span>
        <span className="text-primary-300 flex items-center gap-1"><BarChart3 className="w-3 h-3" /> Live Audit</span>
      </div>
    </div>
  );
}

export function EnigmaBlogMockup() {
  return (
    <div className="w-full h-48 sm:h-52 bg-gradient-to-br from-slate-900 via-dark-900 to-purple-950/70 p-4 flex flex-col justify-between select-none relative overflow-hidden border-b border-white/10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center">
            <FileCode className="w-4 h-4" />
          </div>
          <span className="text-xs font-bold text-white tracking-wide">Enigma Tech Publication</span>
        </div>
        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-500/20 text-purple-300 border border-purple-500/30">
          MERN + JWT
        </span>
      </div>

      <div className="space-y-2 my-auto">
        <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
          <div className="flex items-center gap-2">
            <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-blue-500/20 text-blue-300">MERN</span>
            <span className="text-[11px] font-semibold text-white truncate">Architecting RESTful APIs with Node & Express</span>
          </div>
          <p className="text-[10px] text-slate-400 mt-1 line-clamp-1">
            CRUD operations, middleware authentication, and MongoDB schema design...
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-2 border-t border-white/5">
        <span className="flex items-center gap-1"><Database className="w-3 h-3 text-purple-400" /> MongoDB Atlas</span>
        <span className="text-purple-300 flex items-center gap-1"><Lock className="w-3 h-3" /> Auth Protected</span>
      </div>
    </div>
  );
}

export function ManetorCrmMockup() {
  return (
    <div className="w-full h-48 sm:h-52 bg-gradient-to-br from-slate-900 via-dark-900 to-emerald-950/60 p-4 flex flex-col justify-between select-none relative overflow-hidden border-b border-white/10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
            <PhoneCall className="w-4 h-4" />
          </div>
          <span className="text-xs font-bold text-white tracking-wide">Manetor CRM Suite</span>
        </div>
        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
          WhatsApp Sync
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2 my-auto text-center">
        <div className="p-2 rounded-lg bg-white/5 border border-white/10">
          <p className="text-[9px] font-mono text-slate-400">Total Leads</p>
          <p className="text-sm font-bold text-white">480+</p>
        </div>
        <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
          <p className="text-[9px] font-mono text-emerald-400">Converted</p>
          <p className="text-sm font-bold text-emerald-300">82%</p>
        </div>
        <div className="p-2 rounded-lg bg-white/5 border border-white/10">
          <p className="text-[9px] font-mono text-slate-400">Tier Plans</p>
          <p className="text-sm font-bold text-white">Active</p>
        </div>
      </div>

      <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-2 border-t border-white/5">
        <span>Bootstrap 5 UI</span>
        <span className="text-emerald-400">Direct WhatsApp Leads</span>
      </div>
    </div>
  );
}

export function AiChatbotMockup() {
  return (
    <div className="w-full h-48 sm:h-52 bg-gradient-to-br from-slate-900 via-dark-900 to-cyan-950/70 p-4 flex flex-col justify-between select-none relative overflow-hidden border-b border-white/10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
            <Bot className="w-4 h-4" />
          </div>
          <span className="text-xs font-bold text-white tracking-wide">AI Assistant Interface</span>
        </div>
        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 flex items-center gap-1">
          <Sparkles className="w-3 h-3" /> LLM Stream
        </span>
      </div>

      <div className="space-y-2 my-auto">
        <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-left max-w-[85%] self-start">
          <p className="text-[10px] text-cyan-200">
            🤖 Here is the optimized React component with prompt streaming:
          </p>
        </div>
        <div className="p-1.5 rounded bg-dark-950 border border-white/10 font-mono text-[9px] text-slate-300">
          const response = await ai.complete(prompt);
        </div>
      </div>

      <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-2 border-t border-white/5">
        <span className="flex items-center gap-1"><Sparkles className="w-3 h-3 text-cyan-400" /> Prompt Engineering</span>
        <span className="text-cyan-300">React + AI API</span>
      </div>
    </div>
  );
}
