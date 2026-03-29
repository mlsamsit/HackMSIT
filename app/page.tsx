'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TimelineSection from '@/components/TimelineSection';
import CommunitySection from '@/components/CommunitySection';
import OrganizersSection from '@/components/OrganizersSection';
import SponsorsSection from '@/components/SponsorsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const panels = gsap.utils.toArray('.stack-panel') as HTMLElement[];

    // We don't want to pin the last panel (Footer) so it scrolls normally at the end
    panels.slice(0, -1).forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: () => panel.offsetHeight > window.innerHeight ? 'bottom bottom' : 'top top',
        pin: true,
        pinSpacing: false,
      });
    });

    // Global listener to solve under-stacking issues caused by dynamic height changes (like FAQs expanding)
    const ro = new ResizeObserver(() => ScrollTrigger.refresh());
    panels.forEach(p => ro.observe(p));
    
    return () => ro.disconnect();
  }, { scope: container });

  return (
    <main ref={container} className="w-full relative bg-transparent">
      <Navigation />

      {/* 
        Using relative min-h-screen for all sections to ensure they cover properly 
        when pinned. Adding unique z-index and box-shadow to enhance stacking effect.
        Using translucent background and blur so the video shines through nicely.
      */}
      <div className="stack-panel relative z-[1] bg-black/40 backdrop-blur-xl min-h-screen border-b border-white/5"><HeroSection /></div>
      <div className="stack-panel relative z-[2] bg-black/40 backdrop-blur-xl min-h-screen border-b border-white/5 shadow-[0_-20px_50px_rgba(0,0,0,0.8)]"><AboutSection /></div>
      <div className="stack-panel relative z-[3] bg-black/40 backdrop-blur-xl min-h-screen border-b border-white/5 shadow-[0_-20px_50px_rgba(0,0,0,0.8)]"><TimelineSection /></div>
      {/* <div className="stack-panel relative z-[4] bg-black/40 backdrop-blur-xl min-h-screen border-b border-white/5 shadow-[0_-20px_50px_rgba(0,0,0,0.8)]"><CommunitySection /></div> */}
      <div className="stack-panel relative z-[5] bg-black/40 backdrop-blur-xl min-h-screen border-b border-white/5 shadow-[0_-20px_50px_rgba(0,0,0,0.8)]"><OrganizersSection /></div>
      <div className="stack-panel relative z-[6] bg-black/40 backdrop-blur-xl min-h-screen border-b border-white/5 shadow-[0_-20px_50px_rgba(0,0,0,0.8)]"><SponsorsSection /></div>
      <div className="stack-panel relative z-[7] bg-black/40 backdrop-blur-xl min-h-screen border-b border-white/5 shadow-[0_-20px_50px_rgba(0,0,0,0.8)]"><FAQSection /></div>
      <div className="stack-panel relative z-[8] bg-black/40 backdrop-blur-xl shadow-[0_-20px_50px_rgba(0,0,0,0.8)]"><Footer /></div>
    </main>
  );
}
