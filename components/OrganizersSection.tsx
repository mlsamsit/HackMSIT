'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function OrganizersSection() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.to('.organizer-pulse', {
      scale: 1.05,
      opacity: 0.8,
      duration: 1.5,
      yoyo: true,
      repeat: -1,
      ease: 'power1.inOut'
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-32" id="organizers">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-headline font-bold text-5xl mb-16 text-center">
          Architects of the <span className="text-secondary">Void</span>
        </h2>
        
        <div className="relative flex flex-col items-center justify-center min-h-[400px] border border-white/5 rounded-2xl bg-gradient-to-br from-surface-container to-surface-container-low overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          
          <div className="organizer-pulse w-32 h-32 rounded-full border-4 border-dashed border-primary/40 flex items-center justify-center mb-6 z-10">
            <span className="material-symbols-outlined text-5xl text-primary" data-icon="groups">
              groups
            </span>
          </div>

          <h3 className="relative z-10 font-headline font-bold text-4xl text-white tracking-widest uppercase">
            Team Reveal
          </h3>
          <h4 className="relative z-10 font-headline font-bold text-2xl text-primary mt-2 uppercase tracking-wide glow-text">
            Coming Soon
          </h4>
          <p className="relative z-10 mt-6 text-slate-400 font-medium max-w-md text-center">
            The brilliant minds behind HACKMSIT are currently calibrating the digital ether.
          </p>
          
          {/* Placeholder for video / animation */}
          <div className="absolute inset-0 z-0 flex items-center justify-center mix-blend-overlay opacity-30 pointer-events-none">
            <div className="w-full h-full bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
