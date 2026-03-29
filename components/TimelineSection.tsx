'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface TimelineEvent {
  id: string;
  title: string;
  date: string;
  leftDesc: string;
  rightDesc: string;
  borderColor: string;
  shadowColor: string;
  textColor: string;
  side: 'left' | 'right';
}

const timelineEvents: TimelineEvent[] = [
  {
    id: '01',
    title: 'Registration Opens',
    date: 'MAR 15, 2024',
    leftDesc: 'Apply to join the void elite.',
    rightDesc: 'Phase one of recruitment begins across all global channels.',
    borderColor: 'border-primary',
    shadowColor: 'shadow-[0_0_15px_rgba(204,151,255,0.6)]',
    textColor: 'text-primary',
    side: 'right',
  },
  {
    id: '02',
    title: 'Opening Ceremony',
    date: 'APR 10, 2024',
    leftDesc: 'The ether opens. Keynote speeches from industry titans.',
    rightDesc: 'Digital portal activation.',
    borderColor: 'border-secondary',
    shadowColor: 'shadow-[0_0_15px_rgba(148,146,255,0.6)]',
    textColor: 'text-secondary',
    side: 'left',
  },
  {
    id: '03',
    title: 'Hacking Begins',
    date: 'APR 10, 2024',
    leftDesc: 'Intense 24-hours of building, designing, and coding.',
    rightDesc: 'Deep dives into the tech stack.',
    borderColor: 'border-tertiary',
    shadowColor: 'shadow-[0_0_15px_rgba(140,231,255,0.6)]',
    textColor: 'text-tertiary',
    side: 'right',
  },
  {
    id: '04',
    title: 'Final Submission',
    date: 'APR 11, 2024',
    leftDesc: 'Last chance to push your code to the mainnet.',
    rightDesc: 'The forge cools down.',
    borderColor: 'border-error',
    shadowColor: 'shadow-[0_0_15px_rgba(255,110,132,0.6)]',
    textColor: 'text-error',
    side: 'left',
  },
];

export default function TimelineSection() {
  const container = useRef(null);

  useGSAP(() => {
    // Animate the vertical line drawing down
    gsap.from('.timeline-line', {
      scrollTrigger: {
        trigger: '.timeline-container',
        start: 'top 60%',
        end: 'bottom 80%',
        scrub: 1,
      },
      scaleY: 0,
      transformOrigin: 'top center',
      ease: 'none'
    });

    // Animate each event popping in
    const eventsHtml = gsap.utils.toArray('.timeline-event');
    eventsHtml.forEach((event: any, i) => {
      gsap.from(event, {
        scrollTrigger: {
          trigger: event,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'back.out(1.5)',
      });
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-32 relative" id="timeline">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20 timeline-event">
          <span className="label-md uppercase tracking-[0.2em] text-primary mb-4 block">Event Roadmap</span>
          <h2 className="font-headline font-bold text-5xl">Digital Sequence</h2>
        </div>

        <div className="relative timeline-container">
          {/* Vertical Line */}
          <div className="timeline-line absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-secondary to-transparent"></div>

          <div className="space-y-24">
            {timelineEvents.map((event, idx) => (
              <div key={idx} className="timeline-event relative flex items-center justify-between">
                
                {/* Left Column */}
                <div className="w-5/12 text-right">
                  {event.side === 'left' ? (
                    <div className="hidden md:block">
                      <h4 className="font-headline font-bold text-xl text-white">{event.title}</h4>
                      <p className="text-slate-400">{event.leftDesc}</p>
                    </div>
                  ) : (
                    <>
                      <span className="md:hidden block font-headline font-bold text-xl text-white mb-1">
                        {event.title}
                      </span>
                      <div className="text-tertiary font-bold mb-2">
                        {event.date}
                      </div>
                      <p className="text-slate-500 text-sm hidden md:block">
                        {event.leftDesc}
                      </p>
                    </>
                  )}
                </div>

                {/* Center Node */}
                <div
                  className={`relative z-10 w-12 h-12 flex items-center justify-center rounded-full bg-black/60 backdrop-blur-md border-2 ${event.borderColor} ${event.shadowColor}`}
                >
                  <span className={`${event.textColor} font-bold`}>
                    {event.id}
                  </span>
                </div>

                {/* Right Column */}
                <div className="w-5/12 text-left">
                  {event.side === 'right' ? (
                    <div className="hidden md:block">
                      <h4 className="font-headline font-bold text-xl text-white">
                        {event.title}
                      </h4>
                      <p className="text-slate-400">{event.rightDesc}</p>
                    </div>
                  ) : (
                    <>
                      <span className="md:hidden block font-headline font-bold text-xl text-white mb-1">
                        {event.title}
                      </span>
                      <div className="text-tertiary font-bold mb-2">
                        {event.date}
                      </div>
                      <p className="text-slate-500 text-sm hidden md:block">
                        {event.rightDesc}
                      </p>
                    </>
                  )}
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}