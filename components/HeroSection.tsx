'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function HeroSection() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from('.hero-element', {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
    });
  }, { scope: container });

  return (
    <section
      ref={container}
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 hero-gradient"
      id="home"
    >
      <div className="absolute inset-0 z-0 opacity-20 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10 text-center max-w-5xl px-6">
        <span className="hero-element label-md uppercase tracking-[0.3em] text-tertiary mb-6 block font-headline font-medium">
          Innovate. Build. Transcend.
        </span>
        <h1 className="hero-element font-headline font-bold text-6xl md:text-8xl lg:text-9xl tracking-tight leading-none mb-8 bg-gradient-to-b from-white via-primary to-primary-dim bg-clip-text text-transparent glow-text uppercase">
          HACKMSIT
        </h1>
        <p className="hero-element body-lg text-on-surface-variant max-w-2xl mx-auto mb-12 leading-relaxed">
          Join us for a 24-hour hackathon where ideas turn into reality. A convergence of developers, designers, and visionaries.
        </p>

        {/* Date Display */}
        <div className="hero-element flex justify-center mb-16">
          <div className="glass-card p-6 rounded-lg border border-white/5 shadow-xl inline-block px-12">
            <div className="text-4xl md:text-6xl font-headline font-bold text-white mb-2 tracking-wide">10-11 APRIL</div>
            <div className="text-sm uppercase tracking-widest text-primary font-bold">Mark Your Calendars</div>
          </div>
        </div>

        <div className="hero-element flex flex-col md:flex-row gap-6 justify-center items-center">
          <button className="w-full md:w-auto px-10 py-5 bg-gradient-to-r from-primary to-secondary rounded-lg font-headline font-bold text-xl text-on-primary-fixed shadow-[0_0_30px_rgba(204,151,255,0.3)] hover:shadow-[0_0_50px_rgba(204,151,255,0.5)] transition-all">
            Coming Soon
          </button>
        </div>
      </div>
    </section>
  );
}
