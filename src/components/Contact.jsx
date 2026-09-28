import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Github, 
  Linkedin, 
  Copy, 
  CheckCircle2, 
  MessageSquare, 
  Sparkles,
  MapPin,
  Clock,
  ArrowUpRight
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | submitting | success
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-primary-400 bg-primary-500/10 border border-primary-500/20 mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Build Something Together
          </h2>
          <p className="mt-3 text-slate-300 text-base leading-relaxed">
            I'm open to internships, full-time opportunities, freelance projects and interesting collaborations.
          </p>
        </div>

        {/* Split View: Direct Info Column + Interactive Form Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white">Contact Channels</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Reach out directly via email or connect with me on professional platforms.
                </p>
              </div>

              {/* Direct Email Card */}
              <div className="p-4 rounded-xl bg-dark-900/80 border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-primary-400" />
                    Direct Email
                  </span>
                  <button
                    onClick={copyEmail}
                    className="text-[11px] font-mono text-primary-400 hover:text-primary-300 flex items-center gap-1 transition-colors"
                  >
                    {copiedEmail ? (
                      <>
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-sm font-mono font-medium text-white hover:text-primary-300 transition-colors block break-all"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>

              {/* Professional Links */}
              <div className="space-y-3">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                  Social & Code
                </span>

                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-dark-900/60 hover:bg-dark-850 border border-white/5 hover:border-white/15 transition-all text-xs"
                >
                  <div className="flex items-center gap-3 text-slate-200">
                    <Github className="w-4 h-4 text-white" />
                    <span className="font-semibold">GitHub Profile</span>
                  </div>
                  <span className="font-mono text-slate-400 flex items-center gap-1">
                    @{PERSONAL_INFO.githubUsername}
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </a>

                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-dark-900/60 hover:bg-dark-850 border border-white/5 hover:border-white/15 transition-all text-xs"
                >
                  <div className="flex items-center gap-3 text-slate-200">
                    <Linkedin className="w-4 h-4 text-blue-400" />
                    <span className="font-semibold">LinkedIn Network</span>
                  </div>
                  <span className="font-mono text-slate-400 flex items-center gap-1">
                    Connect
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </a>
              </div>

              {/* Status / Availability Indicator */}
              <div className="pt-3 border-t border-white/10 flex items-center gap-3 text-xs text-slate-300">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span>Actively considering technical roles and opportunities.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 relative">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span>Send a Message</span>
                <Sparkles className="w-4 h-4 text-accent-purple" />
              </h3>

              {status === 'success' ? (
                <div className="p-8 text-center space-y-3 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Thank You for Reaching Out!</h4>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto">
                    Your message has been logged. I typically respond to all technical inquiries and opportunities within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                        Your Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Jane Doe"
                        className="w-full px-4 py-2.5 rounded-xl bg-dark-900/80 border border-white/10 text-white text-sm focus:outline-none focus:border-primary-400 placeholder:text-slate-600 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                        Your Email <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. recruiter@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-dark-900/80 border border-white/10 text-white text-sm focus:outline-none focus:border-primary-400 placeholder:text-slate-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Full Stack Developer Opportunity / Project Inquiry"
                      className="w-full px-4 py-2.5 rounded-xl bg-dark-900/80 border border-white/10 text-white text-sm focus:outline-none focus:border-primary-400 placeholder:text-slate-600 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                      Message <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Type your message, opportunity description, or project details..."
                      className="w-full px-4 py-2.5 rounded-xl bg-dark-900/80 border border-white/10 text-white text-sm focus:outline-none focus:border-primary-400 placeholder:text-slate-600 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-primary-600 to-accent-purple hover:from-primary-500 hover:to-accent-violet text-white text-sm font-semibold tracking-wide shadow-glow-sm hover:shadow-glow flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-50"
                  >
                    {status === 'submitting' ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
