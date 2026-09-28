import React from 'react';

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-radial-grid opacity-60" />

      {/* Top cyan/blue ambient glow */}
      <div 
        className="absolute -top-40 left-1/4 w-[600px] h-[500px] bg-primary-600/10 rounded-full blur-[140px]"
        aria-hidden="true" 
      />

      {/* Center right purple ambient glow */}
      <div 
        className="absolute top-1/3 -right-40 w-[550px] h-[550px] bg-accent-purple/10 rounded-full blur-[150px]"
        aria-hidden="true" 
      />

      {/* Bottom indigo ambient glow */}
      <div 
        className="absolute -bottom-40 left-1/3 w-[650px] h-[500px] bg-indigo-600/10 rounded-full blur-[160px]"
        aria-hidden="true" 
      />
    </div>
  );
}
