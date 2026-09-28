import React, { useRef, useState, useEffect, useCallback } from 'react';
import { 
  Sparkles, 
  Layers, 
  Database, 
  Smartphone, 
  Zap, 
  GitPullRequest, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';

export default function Features() {
  const scrollRef = useRef(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const features = [
    {
      id: 'fullstack',
      number: '01',
      category: 'Architecture',
      title: 'Full-Stack Web Systems',
      description: 'Developing end-to-end web applications with reactive client interfaces and scalable Express & Node.js backend services.',
      tags: ['React', 'Node.js', 'REST APIs'],
      icon: Layers,
    },
    {
      id: 'ai-workflows',
      number: '02',
      category: 'Intelligence',
      title: 'AI & LLM Integration',
      description: 'Embedding smart language model endpoints, structured prompt workflows, and conversational AI into functional user tools.',
      tags: ['LLM APIs', 'Prompts', 'AI UX'],
      icon: Sparkles,
    },
    {
      id: 'data-systems',
      number: '03',
      category: 'Data & DB',
      title: 'Robust Database Design',
      description: 'Designing clean MongoDB NoSQL schemas, indexing queries for rapid access, and implementing reliable data persistence.',
      tags: ['MongoDB', 'Mongoose', 'Schema'],
      icon: Database,
    },
    {
      id: 'responsive-ui',
      number: '04',
      category: 'Experience',
      title: 'Fluid Responsive UI',
      description: 'Crafting pixel-perfect, accessible layouts tailored seamlessly across mobile, tablet, laptop, and ultra-wide displays.',
      tags: ['Tailwind CSS', 'Mobile First', 'A11y'],
      icon: Smartphone,
    },
    {
      id: 'performance',
      number: '05',
      category: 'Optimization',
      title: 'Speed & Code Hygiene',
      description: 'Writing modular, self-documenting code with modern bundling, rapid load speeds, and strict linting compliance.',
      tags: ['Vite', 'Clean Code', 'Modular'],
      icon: Zap,
    },
    {
      id: 'collaboration',
      number: '06',
      category: 'Dev Workflow',
      title: 'Git & Version Control',
      description: 'Active open-source contributions, structured Git commits, pull request etiquette, and continuous development practices.',
      tags: ['GitHub', 'Git', 'Open Source'],
      icon: GitPullRequest,
    },
  ];

  const updateScrollState = useCallback(() => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    // Approximate active card index
    const cardWidth = 360;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(index, 0), features.length - 1));
  }, [features.length]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updateScrollState();
    el.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);

    return () => {
      el.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [updateScrollState]);

  // Window-level mouse move and mouse up for fluid click-and-drag on desktop
  useEffect(() => {
    const handleWindowMouseMove = (e) => {
      if (!isDraggingRef.current || !scrollRef.current) return;
      e.preventDefault();
      const x = e.pageX - scrollRef.current.offsetLeft;
      const walk = (x - startXRef.current) * 1.4;
      scrollRef.current.scrollLeft = scrollLeftRef.current - walk;
      updateScrollState();
    };

    const handleWindowMouseUp = () => {
      if (isDraggingRef.current) {
        isDraggingRef.current = false;
        setIsDragging(false);
      }
    };

    window.addEventListener('mousemove', handleWindowMouseMove);
    window.addEventListener('mouseup', handleWindowMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
      window.removeEventListener('mouseup', handleWindowMouseUp);
    };
  }, [updateScrollState]);

  const handleMouseDown = (e) => {
    if (e.button !== 0 || !scrollRef.current) return;
    isDraggingRef.current = true;
    setIsDragging(true);
    startXRef.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeftRef.current = scrollRef.current.scrollLeft;
  };

  const handleScroll = (direction) => {
    if (!scrollRef.current) return;
    const cardWidth = 360;
    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const scrollToIndex = (index) => {
    if (!scrollRef.current) return;
    const cardWidth = 360;
    scrollRef.current.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
  };

  return (
    <section id="features" className="py-20 relative w-full">
      {/* Background ambient lighting safely self-contained */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-primary-600/5 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header with Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-primary-400 bg-primary-500/10 border border-primary-500/20 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CORE CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Features & Engineering Highlights
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
              Key strengths, specialized technical workflows, and modern full-stack competencies crafted with clean code and high attention to detail.
            </p>
          </div>

          {/* Scroll Navigation Controls for Desktop & Mobile */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <span className="text-xs font-mono text-slate-500 hidden sm:inline-block mr-1">
              Scroll or swipe horizontally
            </span>
            <button
              type="button"
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              className={`p-2.5 rounded-xl border transition-all ${
                canScrollLeft
                  ? 'bg-dark-900 text-white border-white/15 hover:bg-dark-850 hover:border-primary-400/40 shadow-sm active:scale-95 cursor-pointer'
                  : 'bg-dark-950/50 text-slate-600 border-white/5 cursor-not-allowed opacity-50'
              }`}
              aria-label="Scroll features left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => handleScroll('right')}
              disabled={!canScrollRight}
              className={`p-2.5 rounded-xl border transition-all ${
                canScrollRight
                  ? 'bg-dark-900 text-white border-white/15 hover:bg-dark-850 hover:border-primary-400/40 shadow-sm active:scale-95 cursor-pointer'
                  : 'bg-dark-950/50 text-slate-600 border-white/5 cursor-not-allowed opacity-50'
              }`}
              aria-label="Scroll features right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Container Wrapper */}
        <div className="w-full relative">
          <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            className={`features-scroll-container flex flex-nowrap items-stretch gap-6 overflow-x-auto w-full max-w-full scroll-smooth no-scrollbar py-4 px-1 ${
              isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'
            }`}
            style={{
              display: 'flex',
              flexWrap: 'nowrap',
              overflowX: 'auto',
              overflowY: 'hidden',
              WebkitOverflowScrolling: 'touch',
              touchAction: 'pan-x pan-y',
              scrollBehavior: 'smooth',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.id}
                  className="shrink-0 flex-shrink-0 w-[290px] sm:w-[325px] md:w-[360px] min-w-[280px] sm:min-w-[320px] md:min-w-[360px] bg-white text-slate-900 rounded-2xl p-7 sm:p-8 flex flex-col justify-between border border-slate-200/90 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_35px_-5px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1.5 snap-start select-none group min-h-[350px]"
                  style={{
                    flex: '0 0 auto',
                    minWidth: '280px',
                  }}
                >
                  {/* Top: Icon + Category Badge */}
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center text-primary-600 group-hover:bg-primary-50/80 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-500 bg-slate-100/90 px-2.5 py-1 rounded-full border border-slate-200/60">
                        {feature.number} • {feature.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight mt-6">
                      {feature.title}
                    </h3>

                    {/* Short Description */}
                    <p className="mt-2.5 text-slate-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Clean empty / blank space intentionally preserved here to maintain airy premium aesthetics */}
                  <div className="my-5 min-h-[28px]" />

                  {/* Bottom: Minimalist Tech Tags */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-1.5">
                      {feature.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-0.5 rounded text-[11px] font-mono font-medium bg-slate-100 text-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-primary-500 transition-colors shrink-0" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Indicator Dots for Mobile & Quick Glance */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {features.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => scrollToIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === idx 
                  ? 'w-6 bg-primary-400' 
                  : 'w-1.5 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Jump to feature ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
