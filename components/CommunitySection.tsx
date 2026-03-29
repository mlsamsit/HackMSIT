'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CommunitySection() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from('.community-node', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 75%',
        toggleActions: 'play none none reverse',
      },
      scale: 0.5,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'back.out(1.7)'
    });
  }, { scope: container });

  const communityNodes = [
    {
      icon: 'forum',
      title: 'Discord',
      label: 'Primary Node',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/20',
      textColor: 'text-indigo-400',
      hoverGlow: 'group-hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]',
    },
    {
      icon: 'chat',
      title: 'WhatsApp',
      label: 'Regional Chat',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20',
      textColor: 'text-green-400',
      hoverGlow: 'group-hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]',
    },
    {
      icon: 'send',
      title: 'Telegram',
      label: 'Announcements',
      bgColor: 'bg-sky-500/10',
      borderColor: 'border-sky-500/20',
      textColor: 'text-sky-400',
      hoverGlow: 'group-hover:shadow-[0_0_20px_rgba(14,165,233,0.3)]',
    },
    {
      icon: 'hub',
      title: 'LinkedIn',
      label: 'Professional',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
      textColor: 'text-blue-400',
      hoverGlow: 'group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]',
    },
    {
      icon: 'terminal',
      title: 'Twitter / X',
      label: 'Real-time',
      bgColor: 'bg-slate-500/10',
      borderColor: 'border-slate-500/20',
      textColor: 'text-white',
      hoverGlow: 'group-hover:shadow-[0_0_20px_rgba(100,116,139,0.3)]',
    },
  ];

  return (
    <section ref={container} className="py-32 px-6" id="community">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="font-headline font-bold text-5xl mb-6">
              Join the <span className="text-primary">Ecosystem</span>
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              Connect with thousands of other hackers across our official communication nodes. Get support, find teams, and share your journey.
            </p>
          </div>
          <div className="pb-2">
            <span className="text-sm font-bold tracking-widest text-slate-500 uppercase">Available Nodes</span>
          </div>
        </div>

        <div className="community-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {communityNodes.map((node, idx) => (
            <a
              key={idx}
              className="community-node glass-card p-10 rounded-2xl border border-white/5 hover:bg-surface-container-high hover:-translate-y-2 transition-all flex flex-col items-center text-center group"
              href="#"
            >
              <div
                className={`w-16 h-16 rounded-full ${node.bgColor} flex items-center justify-center mb-6 border ${node.borderColor} ${node.hoverGlow} transition-all`}
              >
                <span className={`material-symbols-outlined text-4xl ${node.textColor}`} data-icon={node.icon}>
                  {node.icon}
                </span>
              </div>
              <span className="font-headline font-bold text-xl mb-1">{node.title}</span>
              <span className="text-xs text-slate-500 uppercase tracking-widest">{node.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
