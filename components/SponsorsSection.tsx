'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function SponsorsSection() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.to('.sponsor-blur', {
      filter: 'blur(0px)',
      opacity: 0.5,
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut'
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-24 border-y border-white/5" id="sponsors">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-bold tracking-[0.3em] text-slate-500 uppercase mb-12">Empowered By</p>
        <div className="relative flex flex-col items-center justify-center min-h-[300px] border border-white/10 rounded-xl bg-surface-container/50 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 sponsor-blur blur-md opacity-30"></div>
          
          <h3 className="relative z-10 font-headline font-bold text-4xl md:text-5xl text-white tracking-widest uppercase glow-text">
            Coming Soon
          </h3>
          <p className="relative z-10 mt-4 text-slate-400 font-medium">Sponsorship opportunities opening shortly.</p>
          
          {/* Placeholder for video / animation */}
          <div className="absolute inset-0 z-0 flex items-center justify-center mix-blend-overlay opacity-20 pointer-events-none">
            <div className="w-[150%] h-[150%] rounded-full bg-gradient-to-tr from-primary to-secondary animate-spin-slow" style={{ animationDuration: '20s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
