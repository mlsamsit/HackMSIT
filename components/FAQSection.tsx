'use client';

import { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Who can join the hackathon?',
      answer:
        'Anyone with a passion for building the future. Whether you are a student, a professional developer, or a designer, the ether has a place for you. We welcome teams of up to 4 members.',
      borderColor: 'border-l-primary',
    },
    {
      question: 'Is there a registration fee?',
      answer: 'No, registration is completely free for all participants!',
      borderColor: 'border-l-secondary',
    },
    {
      question: 'What prizes are available?',
      answer:
        'We offer a total prize pool of $100,000 distributed across various categories including best overall project, most innovative technology, and people\'s choice.',
      borderColor: 'border-l-tertiary',
    },
    {
      question: 'Do I need to be onsite?',
      answer:
        'Neon Ether is a hybrid event! You can participate remotely from anywhere in the world. However, we also have physical hubs in major cities for those who prefer the in-person experience.',
      borderColor: 'border-l-error',
    },
  ];

  return (
    <section className="py-32 px-6" id="faq">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-headline font-bold text-5xl mb-16 text-center">
          Frequently Asked <span className="text-tertiary">Questions</span>
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`glass-card rounded-xl border border-white/5 overflow-hidden transition-all duration-300 border-l-4 ${faq.borderColor}`}
            >
              <button
                className="w-full p-6 text-left flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="font-headline font-bold text-lg">{faq.question}</span>
                <span
                  className={`material-symbols-outlined text-primary transition-transform duration-300 ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                  data-icon="expand_more"
                >
                  expand_more
                </span>
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-6 text-on-surface-variant leading-relaxed">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
