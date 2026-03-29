// components/FAQ.tsx
"use client";

import { useState } from "react";

interface FAQItem {
  id: number;
  question: string;
  answer: string | null;
  isOpenByDefault?: boolean;
}

const faqItems: FAQItem[] = [
  {
    id: 1,
    question: "Who can join the hackathon?",
    answer:
      "Anyone with a passion for building the future. Whether you are a student, a professional developer, or a designer, the ether has a place for you. We welcome teams of up to 4 members.",
    isOpenByDefault: true,
  },
  {
    id: 2,
    question: "Is there a registration fee?",
    answer: null,
  },
  {
    id: 3,
    question: "What prizes are available?",
    answer: null,
  },
  {
    id: 4,
    question: "Do I need to be onsite?",
    answer: null,
  },
];

export default function FAQ(): React.JSX.Element {
  const [openId, setOpenId] = useState<number | null>(
    faqItems.find((item) => item.isOpenByDefault)?.id ?? null
  );

  const toggle = (id: number): void => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-32 px-6" id="faq">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-headline font-bold text-5xl mb-16 text-center">
          Frequently Asked{" "}
          <span className="text-tertiary">Questions</span>
        </h2>

        <div className="space-y-4">
          {faqItems.map((item: FAQItem) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className={`glass-card rounded-xl border border-white/5 overflow-hidden transition-all duration-300 ${
                  isOpen ? "border-l-4 border-l-primary" : ""
                }`}
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full p-6 text-left flex justify-between items-center group"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-headline font-bold text-lg transition-colors ${
                      isOpen ? "text-white" : "group-hover:text-white"
                    }`}
                  >
                    {item.question}
                  </span>
                  <span
                    className={`material-symbols-outlined transition-all duration-300 ${
                      isOpen ? "text-primary rotate-180" : ""
                    }`}
                  >
                    expand_more
                  </span>
                </button>

                {isOpen && item.answer && (
                  <div className="px-6 pb-6 text-on-surface-variant leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}