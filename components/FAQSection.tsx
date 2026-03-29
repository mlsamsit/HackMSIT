// components/FAQ.tsx
"use client";

import { useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const container = useRef(null);

  useGSAP(() => {
    gsap.from('.faq-header', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });

    gsap.from('.faq-item', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 70%',
        toggleActions: 'play none none reverse',
      },
      x: -50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power2.out'
    });
  }, { scope: container });

  // Removed redundant local useEffect and relying on global ResizeObserver

  const faqs = [
    {
      question: 'Who can join the hackathon?',
      answer:
        'Anyone with a passion for building the future. Whether you are a student, a professional developer, or a designer, HACKMSIT has a place for you. We welcome teams of up to 4 members.',
      borderColor: 'border-l-primary',
    },
    {
      question: 'Is there a registration fee?',
      answer: 'No, registration is completely free for all participants!',
      borderColor: 'border-l-secondary',
    },
    {
      question: 'What are the dates and location?',
      answer:
        'HACKMSIT will take place on the 10th and 11th of April.',
      borderColor: 'border-l-tertiary',
    },
    {
      question: 'Do I need a team?',
      answer:
        'You can participate alone or in a team of up to 4 members. If you don\'t have a team, we will have team building sessions to help you find one.',
      borderColor: 'border-l-error',
    },
    {
      question: 'What if I don\'t know how to code?',
      answer:
        'No worries! Hackathons are a great place to learn. We will have beginner-friendly workshops, mentors, and resources to help you build your idea. Plus, teams need designers, project managers, and presenters!',
      borderColor: 'border-l-primary',
    },
    {
      question: 'What should I bring?',
      answer:
        'Bring your laptop, charger, valid ID, any specific hardware you intend to hack on, and a sleeping bag if you plan to get some rest during the 24 hours.',
      borderColor: 'border-l-secondary',
    },
    {
      question: 'Will there be food and drinks?',
      answer:
        'Yes! We will provide regular meals, snacks, and plenty of caffeine and drinks throughout the entire event to keep you energized.',
      borderColor: 'border-l-tertiary',
    },
    {
      question: 'Can I start my project before the event?',
      answer:
        'No. To keep things fair, all coding and project work must begin after the hackathon officially starts. However, you are welcome to brainstorm ideas and familiarize yourself with tools beforehand.',
      borderColor: 'border-l-error',
    },
  ];

  return (
    <section ref={container} className="py-32 px-6" id="faq">
      <div className="max-w-3xl mx-auto">
        <h2 className="faq-header font-headline font-bold text-5xl text-center">
          Frequently Asked <span className="text-tertiary">Questions</span>
        </h2>
        <div className="faq-list space-y-2">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`faq-item glass-card rounded-xl border border-white/5 overflow-hidden transition-all duration-300 border-l-4 ${faq.borderColor}`}
            >
              <button
                className="w-full p-6 text-left flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="font-headline font-bold text-lg text-white">{faq.question}</span>
                <span
                  className={`material-symbols-outlined text-primary transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''
                    }`}
                  data-icon="expand_more"
                >
                  expand_more
                </span>
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-6 text-slate-300 leading-relaxed">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}