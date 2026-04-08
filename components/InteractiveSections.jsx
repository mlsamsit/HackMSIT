"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight, ChevronDown, Cpu, Code, ShieldCheck, Map, Trophy, BookOpen,
  Clock, Users, Coffee, Flag, Award, Terminal, Zap, Lightbulb, Star,
  CheckCircle, AlertTriangle, Globe, Brain, Lock, Compass, ArrowRight, X,
  FileText, Target, Wrench, Info, Download,
} from "lucide-react";
import Link from "next/link";

// ─────────────────────────────────────────────────────────
// SHARED UTILITIES
// ─────────────────────────────────────────────────────────
const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: "easeOut" },
};

const SectionHeader = ({ eyebrow, title, subtitle }) => (
  <div className="text-center mb-14">
    {eyebrow && (
      <p className="font-sans text-xs uppercase tracking-[0.25em] text-antique-gold mb-3 font-semibold">
        {eyebrow}
      </p>
    )}
    <h2 className="font-serif text-3xl md:text-5xl text-brick-900 font-bold mb-4 tracking-wide">
      {title}
    </h2>
    <div className="w-14 h-[2px] bg-antique-gold mx-auto mb-4" />
    {subtitle && (
      <p className="font-sans text-brick-900/60 text-sm tracking-widest uppercase">
        {subtitle}
      </p>
    )}
  </div>
);

// ─────────────────────────────────────────────────────────
// 1. COMPETITION DETAILS (Tabbed Cards)
// ─────────────────────────────────────────────────────────
const COMP_TABS = [
  {
    id: "format",
    label: "Format",
    icon: FileText,
    content: {
      heading: "Competition Structure",
      items: [
        {
          title: "Round 1 — Online PPT Round",
          sub: "Select · Pitch · Persuade",
          desc: "Choose from our specialized AI tracks or define your own challenge in the Open Theme. Craft a compelling solution deck and present your approach online.",
          tag: "Online",
        },
        {
          title: "Round 2 — Offline Hackathon",
          sub: "Think · Solve · Present",
          desc: "Shortlisted teams will build and present solutions based on the SAME problem statement selected in Round 1. No new problem statements will be assigned.",
          tag: "Offline · On-site",
        },
      ],
    },
  },
  {
    id: "eligibility",
    label: "Eligibility",
    icon: CheckCircle,
    content: {
      heading: "Who Can Participate?",
      items: [
        {
          title: "Open to All",
          sub: "No skill barrier",
          desc: "Participants from any college, background, or skill level are welcome. Beginners and veterans compete side-by-side.",
          tag: "Inclusive",
        },
        {
          title: "Registration Required",
          sub: "Via Unstop platform",
          desc: "Teams must complete registration on Unstop before the event. Form a team of 2–4 members and register together.",
          tag: "Mandatory",
        },
      ],
    },
  },
  {
    id: "rounds",
    label: "Rounds",
    icon: Target,
    content: {
      heading: "Round Breakdown",
      items: [
        {
          title: "Round 1 · PPT Submission",
          sub: "Async Evaluation",
          desc: "Submit your presentation slide deck online. No live presentation required in Round 1 — focus on clarity and depth of solution.",
          tag: "Async",
        },
        {
          title: "Round 2 · Live Prototype",
          sub: "On-site at MSIT",
          desc: "Build and demo within the allotted time. Mentors are available for consultation. Judges evaluate your working prototype.",
          tag: "Live Demo",
        },
      ],
    },
  },
  {
    id: "eval",
    label: "Evaluation",
    icon: Star,
    content: {
      heading: "Judging Criteria",
      items: [
        {
          title: "Core Metrics",
          sub: "What judges look for",
          desc: "Innovation & Originality · Technical Feasibility · Clarity of Presentation · Creativity of Approach · Problem-Solving Depth",
          tag: "5 Dimensions",
        },
        {
          title: "Scoring Philosophy",
          sub: "Holistic review",
          desc: "Judges evaluate the complete package — idea strength, execution quality, and how well you communicate your solution's impact.",
          tag: "Holistic",
        },
      ],
    },
  },
];

export const CompetitionDetails = () => {
  return (
    <div className="relative w-full py-24 px-6 md:px-12 border-t border-brick-900/10 bg-parchment/30">
      <div className="max-w-4xl mx-auto">
        <motion.div {...fadeUp}>
          <SectionHeader
            eyebrow="The Journey"
            title="Competition Structure"
            subtitle="How the hackathon unfolds across two grueling rounds"
          />
        </motion.div>

        <div className="relative mb-16 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-antique-gold/10 before:via-antique-gold/30 before:to-antique-gold/10">

          {/* Round 1 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active mb-12">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-parchment bg-brick-900 text-antique-gold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10 mx-0">
              <span className="font-serif font-bold">1</span>
            </div>

            <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] p-6 bg-parchment/80 backdrop-blur-md rounded-sm border border-brick-900/15 shadow-sm group-hover:border-antique-gold/50 transition-colors ml-4 md:ml-0 relative">
              <div className="absolute top-4 right-4 text-antique-gold/20"><FileText size={24} /></div>
              <h3 className="font-serif text-xl font-bold text-brick-900 mb-1">Round 1 – Online PPT Submission</h3>
              <p className="font-sans text-xs uppercase tracking-widest text-brick-900/50 mb-4">Pitch. Present. Persuade.</p>

              <ul className="space-y-2 font-sans text-sm text-brick-900/80 mb-4">
                <li className="flex gap-2"><ChevronRight size={14} className="text-antique-gold shrink-0 mt-1" /> Teams present: chosen problem, idea, proposed solution.</li>
              </ul>

              <div className="pt-3 border-t border-brick-900/10">
                <div className="text-[10px] uppercase tracking-[0.2em] text-antique-gold font-bold mb-2">Evaluation Areas</div>
                <div className="flex gap-2 flex-wrap">
                  {["Innovation", "Feasibility", "Clarity"].map(val => (
                    <span key={val} className="px-2 py-1 bg-antique-gold/10 text-brick-900 tracking-wider uppercase text-[9px] font-bold rounded-sm">{val}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Round 2 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active mb-12">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-parchment bg-brick-900 text-antique-gold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10 mx-0">
              <span className="font-serif font-bold">2</span>
            </div>

            <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] p-6 bg-parchment/80 backdrop-blur-md rounded-sm border border-brick-900/15 shadow-sm group-hover:border-antique-gold/50 transition-colors ml-4 md:ml-0 relative">
              <div className="absolute top-4 right-4 text-antique-gold/20"><Terminal size={24} /></div>
              <h3 className="font-serif text-xl font-bold text-brick-900 mb-1">Round 2 – Offline Round</h3>
              <p className="font-sans text-xs uppercase tracking-widest text-brick-900/50 mb-4">Think. Solve. Present.</p>

              <ul className="space-y-2 font-sans text-sm text-brick-900/80 mb-4">
                <li className="flex gap-2"><ChevronRight size={14} className="text-antique-gold shrink-0 mt-1" /> Build and prototype the idea selected in Round 1.</li>
                <li className="flex gap-2"><ChevronRight size={14} className="text-antique-gold shrink-0 mt-1" /> No new problem statements assigned on the spot.</li>
                <li className="flex gap-2"><ChevronRight size={14} className="text-antique-gold shrink-0 mt-1" /> Mentor-based guidance available throughout.</li>
              </ul>

              <div className="pt-3 border-t border-brick-900/10">
                <div className="text-[10px] uppercase tracking-[0.2em] text-antique-gold font-bold mb-2">Evaluation Areas</div>
                <div className="flex gap-2 flex-wrap">
                  {["Problem-Solving Ability", "Creativity", "Clarity of Approach"].map(val => (
                    <span key={val} className="px-2 py-1 bg-antique-gold/10 text-brick-900 tracking-wider uppercase text-[9px] font-bold rounded-sm">{val}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Eligibility Header */}
        <motion.div {...fadeUp} className="text-center mt-8">
          <div className="inline-block p-6 px-10 border border-brick-900/10 bg-parchment/40 rounded-sm">
            <h3 className="font-serif text-xl font-bold text-brick-900 mb-1">Eligibility & Registration</h3>
            <p className="font-sans text-brick-900/70 text-sm">Open to all participants.</p>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────
// 2. PROBLEM STATEMENTS (Modal Cards)
// ─────────────────────────────────────────────────────────
const PROBLEMS = [
  {
    id: "ps1",
    tag: "AI Safety",
    title: "Prompt Police",
    subtitle: "Build an AI Bouncer That Catches Jailbreaks",
    summary:
      "LLMs can be tricked into ignoring safety rules via cleverly crafted prompts. Your task: build a classifier that tells SAFE prompts from ADVERSARIAL ones.",
    why: "As AI systems become ubiquitous, prompt injection and jailbreak attacks are a real security threat. A robust bouncer layer is critical for production-grade AI.",
    keyTask: {
      label: "Classification Challenge",
      values: ["SAFE", "ADVERSARIAL"],
    },
    tools: ["Python / HuggingFace Transformers", "OpenAI Moderation API", "Prompt injection datasets", "FastAPI / Gradio for demo"],
    details:
      "Design a detection system that ingests a user prompt and returns a verdict. Approaches can include fine-tuned classifiers, embedding-based similarity checks, rule-based heuristics, or hybrid models. Bonus: adversarial robustness testing.",
    icon: Lock,
    color: "from-brick-900/5 to-transparent",
  },
  {
    id: "ps2",
    tag: "AI Trustworthiness",
    title: "Hallucination Hunter",
    subtitle: "Build a Lie Detector for AI Text",
    summary:
      "AI language models often generate confident yet factually incorrect text. Build a system that labels AI-generated sentences as FAITHFUL or HALLUCINATED.",
    why: "Hallucinations erode trust in AI. A reliable fact-checking layer enables safer use of LLMs in high-stakes domains like healthcare, law, and journalism.",
    keyTask: {
      label: "Faithfulness Verdict",
      values: ["FAITHFUL", "HALLUCINATED"],
    },
    tools: ["NLP libraries (spaCy, NLTK)", "Retrieval-Augmented Generation", "Wikipedia / NewsAPI as ground truth", "Streamlit for demo UI"],
    details:
      "Given a source document and an AI-generated summary/response, your system must verify factual consistency. Approaches: NLI models, entity extraction + verification, QA-based consistency checks. Bonus: confidence scores and explanations.",
    icon: Brain,
    color: "from-antique-gold/5 to-transparent",
  },
];

const ProblemModal = ({ problem, onClose }) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-brick-900/60 backdrop-blur-sm"
        onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      >
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-parchment border border-brick-900/15 shadow-2xl rounded-sm"
        >
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-antique-gold/40 m-3 pointer-events-none" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-antique-gold/40 m-3 pointer-events-none" />

          <div className="p-7 md:p-10">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-brick-900/50 hover:text-brick-900 transition-colors"
            >
              <X size={18} />
            </button>

            <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-antique-gold font-bold bg-antique-gold/10 px-2 py-1 rounded-sm">
              {problem.tag}
            </span>

            <div className="flex items-start gap-4 mt-4 mb-6">
              <div className="p-3 bg-brick-900/5 border border-brick-900/10 rounded-sm shrink-0">
                <problem.icon size={22} className="text-antique-gold" />
              </div>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-brick-900 leading-tight">
                  {problem.title}
                </h3>
                <p className="font-sans text-sm text-brick-900/60 mt-1 italic">
                  {problem.subtitle}
                </p>
              </div>
            </div>

            <div className="w-full h-[1px] bg-antique-gold/20 mb-6" />

            <div className="space-y-6">
              <div>
                <h4 className="font-sans text-xs uppercase tracking-widest text-brick-900/40 mb-2">The Challenge</h4>
                <p className="font-sans text-brick-900/80 leading-relaxed text-sm">{problem.details}</p>
              </div>

              <div>
                <h4 className="font-sans text-xs uppercase tracking-widest text-brick-900/40 mb-2">Why It Matters</h4>
                <p className="font-serif italic text-brick-900/75 leading-relaxed border-l-2 border-antique-gold pl-4 py-1 text-sm">
                  {problem.why}
                </p>
              </div>

              <div>
                <h4 className="font-sans text-xs uppercase tracking-widest text-brick-900/40 mb-3">
                  {problem.keyTask.label}
                </h4>
                <div className="flex gap-3 flex-wrap">
                  {problem.keyTask.values.map((v) => (
                    <span key={v} className="px-4 py-1.5 border border-antique-gold/40 text-brick-900 font-sans text-xs font-bold tracking-widest uppercase bg-antique-gold/5 rounded-sm">
                      {v}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-sans text-xs uppercase tracking-widest text-brick-900/40 mb-3">Suggested Starter Kit</h4>
                <ul className="space-y-2 mb-8">
                  {problem.tools.map((t) => (
                    <li key={t} className="flex items-center gap-2 text-sm font-sans text-brick-900/70">
                      <Wrench size={12} className="text-antique-gold shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://drive.google.com/file/d/19oBzz6xd3DQXOCm-fFC0zIb6EVLLcK1J/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 border border-antique-gold text-antique-gold hover:bg-antique-gold hover:text-parchment transition-all font-sans text-xs font-bold uppercase tracking-widest rounded-sm w-full justify-center"
                >
                  <span>Problem Statement Documentation</span>
                  <Download size={14} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export const ProblemStatements = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="relative w-full py-24 px-6 md:px-12 border-t border-brick-900/10">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeUp}>
          <SectionHeader
            eyebrow="The Directives"
            title="Themes & Problem Statements"
            subtitle="Choose your path: Open Theme or Sponsored AI Tracks"
          />
        </motion.div>

        {/* Section A: Open Theme */}
        <motion.div {...fadeUp} className="mb-16">
          <div className="w-full bg-parchment/80 border flex flex-col md:flex-row items-center border-brick-900/15 p-8 md:p-10 rounded-sm shadow-sm relative overflow-hidden group">
            <div className="absolute right-0 top-0 w-32 h-32 bg-gradient-to-bl from-antique-gold/20 to-transparent pointer-events-none group-hover:from-antique-gold/30 transition-colors duration-500"></div>
            <div className="md:w-1/4 shrink-0 flex flex-col items-center justify-center text-center mb-6 md:mb-0 md:pr-8 md:border-r border-brick-900/10">
              <Lightbulb size={40} className="text-antique-gold mb-3" />
              <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-brick-900 font-bold bg-brick-900/10 px-3 py-1.5 rounded-sm">
                Round 1 – Open Theme
              </span>
            </div>
            <div className="md:w-3/4 md:pl-10">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-brick-900 mb-2">PPT Round Open Innovation</h3>
              <p className="font-sans text-brick-900/70 text-base leading-relaxed">
                This hackathon follows an open theme for the PPT round. Teams are free to choose any domain, present their visionary idea, and — if shortlisted — build that exact solution during the offline hackathon.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="w-full flex items-center gap-6 mb-12 opacity-40">
          <div className="h-[1px] bg-brick-900/30 flex-1"></div>
          <span className="font-sans text-xs uppercase tracking-widest text-brick-900/80 font-bold">OR</span>
          <div className="h-[1px] bg-brick-900/30 flex-1"></div>
        </div>

        {/* Section B: Sponsored Tracks */}
        <motion.div {...fadeUp} className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl font-bold text-brick-900">Sponsored Track Problem Statements</h3>
            <p className="font-sans text-sm text-brick-900/60 mt-2">Specialized AI tracks available. Click any card to explore in detail.</p>
          </div>
          <a
            href="https://drive.google.com/file/d/19oBzz6xd3DQXOCm-fFC0zIb6EVLLcK1J/view"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-antique-gold hover:text-antique-gold/80 transition-colors font-sans text-xs font-bold uppercase tracking-widest border-b border-antique-gold/30 pb-1"
          >
            <span>Problem Statement Documentation</span>
            <Download size={14} />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {PROBLEMS.map((p, i) => (
            <motion.button
              key={p.id}
              {...fadeUp}
              transition={{ delay: i * 0.12, duration: 0.7 }}
              onClick={() => setSelected(p)}
              className={`heritage-card text-left p-7 group bg-gradient-to-br ${p.color} hover:border-antique-gold/50 cursor-pointer w-full relative overflow-hidden`}
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-antique-gold font-bold bg-antique-gold/10 px-2 py-1 rounded-sm">
                  {p.tag}
                </span>
                <p.icon size={18} className="text-antique-gold/50 group-hover:text-antique-gold transition-colors duration-300" />
              </div>

              <h3 className="font-serif text-xl font-bold text-brick-900 mb-1">
                {p.title}
              </h3>
              <p className="font-sans text-xs text-brick-900/50 mb-4 italic">
                {p.subtitle}
              </p>
              <p className="font-sans text-brick-900/70 text-sm leading-relaxed mb-5">
                {p.summary}
              </p>

              <div className="flex gap-2 flex-wrap mb-5">
                {p.keyTask.values.map((v) => (
                  <span key={v} className="px-3 py-1 border border-antique-gold/30 text-xs font-sans font-bold tracking-wider text-brick-900/60 uppercase rounded-sm bg-antique-gold/5">
                    {v}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-1.5 text-antique-gold text-xs font-sans font-semibold tracking-wide group-hover:gap-3 transition-all duration-300">
                <span>Explore Challenge</span>
                <ArrowRight size={13} />
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {selected && <ProblemModal problem={selected} onClose={() => setSelected(null)} />}
    </div>
  );
};

// ─────────────────────────────────────────────────────────
// 3. CHOOSE YOUR PATH (3-Step Guided Flow)
// ─────────────────────────────────────────────────────────
const PATH_CHOICES = [
  { id: "open", label: "Open Theme (PPT Round)", icon: Lightbulb, desc: "Choose any domain and present your own problem & solution" },
  { id: "sponsored", label: "Sponsored Track", icon: ShieldCheck, desc: "Tackle specialized AI challenges (Prompt Police, Hallucination...)" },
];

const PROBLEM_PATHS = [
  { id: "prompt", label: "Prompt Police", icon: Lock, desc: "AI Jailbreak & Injection Detection" },
  { id: "hallucination", label: "Hallucination Hunter", icon: Brain, desc: "AI Fact Verification & Grounding" },
];

const LEVELS = [
  { id: "beginner", label: "Beginner", desc: "First hackathon or learning the ropes" },
  { id: "intermediate", label: "Intermediate", desc: "Built projects, ready to compete" },
  { id: "advanced", label: "Advanced", desc: "Deep domain expertise, ready to win" },
];

const RESULTS = {
  open: {
    approach: "Focus entirely on innovation and feasibility. Identify a pressing real-world issue, clearly define it, and present a structured technological solution.",
    teamSize: "3–4 members — ensure strong presenters alongside product thinkers.",
    prep: "Validate your idea with potential users. Create wireframes and a clean presentation deck before diving into complex infrastructure.",
    focus: "Idea Selection, Presentation Structure, and Measurable Impact",
  },
  prompt: {
    beginner: {
      approach: "Use simpler classification APIs (OpenAI Moderation API) or build a basic rule-based keyword filter as a baseline.",
      teamSize: "2–3 members.",
      prep: "Study common jailbreak prompts (e.g., 'DAN' prompts) to understand how they work.",
      focus: "Basic adversarial detection",
    },
    intermediate: {
      approach: "Build an embedding-based similarity check using sentence-transformers to detect semantic closeness to known attacks.",
      teamSize: "2–3 members — ML integration + UI presentation.",
      prep: "Gather a small dataset of safe vs adversarial prompts to test against.",
      focus: "Adversarial detection and false positive control",
    },
    advanced: {
      approach: "Create a multi-model pipeline or fine-tune an open-source classifier (like a RoBERTa variant) on adversarial datasets.",
      teamSize: "3–4 members — ML engineers + backend.",
      prep: "Prepare infrastructure for testing robustness specifically against edge-case jailbreaks.",
      focus: "Robust adversarial defense and minimal latency",
    },
  },
  hallucination: {
    beginner: {
      approach: "Use a simple semantic similarity method or basic keyword overlap checking between the source document and the generated text.",
      teamSize: "2–3 members.",
      prep: "Find clear examples of factual inconsistencies to test your logic manually.",
      focus: "Basic claim validation",
    },
    intermediate: {
      approach: "Implement an NLI (Natural Language Inference) approach using pre-trained transformers to check if the generated text is entailed by the source.",
      teamSize: "2–3 members — ML logic + Demo UI.",
      prep: "Experiment with HuggingFace NLI models (e.g., DeBERTa-v3 or RoBERTa).",
      focus: "Factual consistency and entailment",
    },
    advanced: {
      approach: "Build a robust Retrieval-Augmented Generation (RAG) verifier pipeline with detailed confidence score surfacing and exact citations.",
      teamSize: "3–4 members — ML pipeline + UI visualization.",
      prep: "Set up a vector database or reliable parsing system for the source ground truth.",
      focus: "Advanced claim validation and traceability",
    },
  }
};

export const ChoosePath = () => {
  const [step, setStep] = useState(1);
  const [primaryPath, setPrimaryPath] = useState(null);
  const [problemPath, setProblemPath] = useState(null);
  const [level, setLevel] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const determineNextStep = (pathId) => {
    setPrimaryPath(pathId);
    if (pathId === "open") {
      setStep(3); // Jump to result directly
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setResult(RESULTS.open);
      }, 1500);
    } else {
      setStep(2); // Go to problem selection
    }
  };

  const submitSponsored = () => {
    setLoading(true);
    setStep(3);
    setTimeout(() => {
      setLoading(false);
      setResult(RESULTS[problemPath]?.[level] || null);
    }, 1500);
  };

  const reset = () => {
    setStep(1);
    setPrimaryPath(null);
    setLevel(null);
    setProblemPath(null);
    setResult(null);
  };

  const StepIndicator = () => (
    <div className="flex items-center justify-center gap-3 mb-10">
      {[1, 2, 3].map((s) => (
        <div key={s} className="flex items-center gap-3">
          <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold font-sans border transition-all duration-300 ${step === s
            ? "bg-brick-900 text-parchment border-brick-900"
            : step > s || (primaryPath === "open" && s === 2)
              ? "bg-antique-gold/20 text-antique-gold border-antique-gold"
              : "bg-transparent text-brick-900/30 border-brick-900/20"
            }`}>
            {step > s || (primaryPath === "open" && s === 2) ? <CheckCircle size={14} /> : s}
          </div>
          {s < 3 && <div className={`w-12 h-[1px] transition-colors duration-300 ${step > s || (primaryPath === "open" && s === 2) ? "bg-antique-gold/50" : "bg-brick-900/10"}`} />}
        </div>
      ))}
    </div>
  );

  return (
    <div className="relative w-full max-w-4xl mx-auto py-24 px-6 border-t border-brick-900/10">
      <motion.div {...fadeUp}>
        <SectionHeader
          eyebrow="Personalized Guidance"
          title="Choose Your Path"
          subtitle="Map your journey through the hackathon based on your strategy"
        />
      </motion.div>

      <StepIndicator />

      <div className="bg-parchment/80 backdrop-blur-md border border-brick-900/10 shadow-sm p-8 md:p-12 min-h-[380px] flex flex-col justify-center relative overflow-hidden rounded-sm">
        <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-antique-gold/30 m-3 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-antique-gold/30 m-3 pointer-events-none" />

        <AnimatePresence mode="wait">
          {/* Step 1: Open Theme vs Sponsored */}
          {step === 1 && (
            <motion.div key="step1" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.35 }}>
              <h3 className="font-serif text-xl font-bold text-brick-900 text-center mb-8">
                How will you participate in Round 1?
              </h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {PATH_CHOICES.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => determineNextStep(p.id)}
                    className="p-5 flex flex-col items-center gap-3 border transition-all duration-300 rounded-sm border-brick-900/15 hover:border-antique-gold hover:bg-antique-gold/5 shadow-sm"
                  >
                    <p.icon size={26} className="text-antique-gold" />
                    <span className="font-sans text-base font-bold text-brick-900 text-center leading-snug tracking-wide">{p.label}</span>
                    <span className="font-sans text-xs text-brick-900/60 text-center leading-snug px-4">{p.desc}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 2: Sponsored Sub-selection */}
          {step === 2 && primaryPath === "sponsored" && (
            <motion.div key="step2" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.35 }}>
              <h3 className="font-serif text-xl font-bold text-brick-900 text-center mb-6">
                Select your problem statement
              </h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
                {PROBLEM_PATHS.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setProblemPath(p.id)}
                    className={`p-4 flex items-center gap-4 text-left border transition-all duration-300 rounded-sm ${problemPath === p.id ? "border-antique-gold bg-antique-gold/5" : "border-brick-900/15 hover:border-antique-gold/50"}`}
                  >
                    <p.icon size={20} className={problemPath === p.id ? "text-antique-gold" : "text-brick-900/40"} />
                    <div>
                      <div className="font-sans text-sm font-bold text-brick-900">{p.label}</div>
                      <div className="font-sans text-[10px] text-brick-900/50 mt-0.5">{p.desc}</div>
                    </div>
                  </button>
                ))}
              </div>

              <h3 className="font-serif text-xl font-bold text-brick-900 text-center mb-6">
                Team Experience Level
              </h3>
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                {LEVELS.map((lvl) => (
                  <button
                    key={lvl.id}
                    onClick={() => setLevel(lvl.id)}
                    className={`p-4 border transition-all duration-300 text-center group rounded-sm ${level === lvl.id
                      ? "border-antique-gold bg-antique-gold/5 shadow-sm"
                      : "border-brick-900/15 hover:border-antique-gold/50"
                      }`}
                  >
                    <p className={`font-serif text-base font-bold mb-1 ${level === lvl.id ? "text-brick-900" : "text-brick-900/70"}`}>{lvl.label}</p>
                    <p className="font-sans text-[10px] text-brick-900/50 leading-snug">{lvl.desc}</p>
                  </button>
                ))}
              </div>

              <div className="flex justify-between items-center px-4">
                <button onClick={() => setStep(1)} className="text-sm font-sans text-brick-900/40 hover:text-brick-900 transition-colors tracking-widest uppercase">
                  ← Back
                </button>
                <button
                  onClick={submitSponsored}
                  disabled={!level || !problemPath}
                  className="px-8 py-3 bg-brick-900 text-parchment font-sans text-sm tracking-widest uppercase font-bold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-brick-800 transition-colors rounded-sm"
                >
                  Get My Strategy
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 3: Result */}
          {step === 3 && (
            <motion.div key="step3" initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}>
              {loading ? (
                <div className="flex flex-col items-center justify-center space-y-5 py-12">
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} className="w-14 h-14 border-t-2 border-r-2 border-antique-gold rounded-full" />
                  <p className="font-serif italic text-brick-900/60 text-base">Crafting your strategy...</p>
                </div>
              ) : result ? (
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-antique-gold/20 pb-4 mb-6">
                    <h3 className="font-serif text-2xl font-bold text-brick-900">Your Strategy Output</h3>
                    <div className="flex gap-2">
                      <span className="text-[10px] font-sans uppercase tracking-widest text-antique-gold font-bold bg-antique-gold/10 px-2 py-1 rounded-sm">
                        {primaryPath === "open" ? "Open Theme" : PROBLEM_PATHS.find(p => p.id === problemPath)?.label}
                      </span>
                      {level && <span className="text-[10px] font-sans uppercase tracking-widest text-antique-gold font-bold bg-antique-gold/10 px-2 py-1 rounded-sm">{level}</span>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="p-5 border border-brick-900/10 bg-parchment/60 rounded-sm">
                      <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] text-antique-gold font-bold mb-2">Recommended Approach</h4>
                      <p className="font-sans text-brick-900/80 text-sm leading-relaxed">{result.approach}</p>
                    </div>
                    <div className="p-5 border border-brick-900/10 bg-parchment/60 rounded-sm">
                      <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] text-antique-gold font-bold mb-2">Preparation Tips</h4>
                      <p className="font-sans text-brick-900/80 text-sm leading-relaxed">{result.prep}</p>
                    </div>
                    <div className="p-5 border border-brick-900/10 bg-parchment/60 rounded-sm">
                      <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] text-antique-gold font-bold mb-2">Key Focus Area</h4>
                      <p className="font-sans text-brick-900/80 text-sm leading-relaxed">{result.focus}</p>
                    </div>
                    <div className="p-5 border border-brick-900/10 bg-parchment/60 rounded-sm">
                      <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] text-antique-gold font-bold mb-2">Ideal Team Structure</h4>
                      <p className="font-sans text-brick-900/80 text-sm leading-relaxed">{result.teamSize}</p>
                    </div>
                  </div>

                  <div className="flex justify-center pt-4">
                    <button onClick={reset} className="text-sm font-sans tracking-widest uppercase text-brick-900 border-b border-brick-900/30 pb-1 hover:text-antique-gold hover:border-antique-gold transition-colors">
                      Explore Another Path
                    </button>
                  </div>
                </div>
              ) : null}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────
// 4. WAR ROOM (Command Interface — unchanged, cleaned)
// ─────────────────────────────────────────────────────────
const WAR_ROOM_HOTSPOTS = [
  {
    id: "tracks", title: "Battlegrounds", shortDesc: "Domain Overview",
    content: "Three core arenas: AI Safety, AI Trustworthiness, and Open Theme. Each rewards distinct strategies and deep domain thinking.",
    icon: Map,
  },
  {
    id: "problem", title: "Problem Statements", shortDesc: "Decrees of the Event",
    content: "Participants can choose from our specialized AI tracks (Prompt Police or Hallucination Hunter) or define their own challenge in the Open Theme. No new problem statements will be assigned on-site.",
    icon: BookOpen,
  },
  {
    id: "judging", title: "Judging Criteria", shortDesc: "The Scales",
    content: "Innovation · Feasibility · Clarity · Creativity · Problem-Solving Approach. Build with purpose and present with confidence.",
    icon: Trophy,
  },
  {
    id: "tips", title: "Survival Tips", shortDesc: "Mentor's Counsel",
    content: "Prototype early. Validate your core logic before polishing UI. Divide roles by strength. Communicate clearly with judges.",
    icon: ShieldCheck,
  },
];

export const WarRoom = () => {
  const [activePanel, setActivePanel] = useState(WAR_ROOM_HOTSPOTS[0]);
  return (
    <div className="relative w-full py-24 px-6 md:px-12 bg-transparent">
      <div className="max-w-6xl mx-auto flex flex-col items-center mb-16 relative z-10">
        <motion.div {...fadeUp}>
          <SectionHeader
            eyebrow="Quick Reference"
            title="Command Interface"
            subtitle="Strategic Planning Console"
          />
        </motion.div>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
        <div className="lg:col-span-4 flex flex-col gap-4">
          {WAR_ROOM_HOTSPOTS.map((panel) => (
            <button
              key={panel.id}
              onClick={() => setActivePanel(panel)}
              className={`flex items-center gap-4 p-5 text-left transition-all duration-300 border rounded-sm ${activePanel.id === panel.id
                ? "bg-brick-900/5 border-antique-gold shadow-sm"
                : "bg-parchment/60 backdrop-blur-sm border-brick-900/10 hover:bg-brick-900/5 hover:border-antique-gold/50"
                }`}
            >
              <div className={`p-2 rounded-sm border ${activePanel.id === panel.id ? "bg-parchment border-antique-gold" : "border-brick-900/10 bg-transparent"}`}>
                <panel.icon className={`w-5 h-5 ${activePanel.id === panel.id ? "text-antique-gold" : "text-brick-900/60"}`} />
              </div>
              <div>
                <h4 className={`font-serif font-bold text-lg ${activePanel.id === panel.id ? "text-brick-900" : "text-brick-900/80"}`}>{panel.title}</h4>
                <p className="font-sans text-xs uppercase tracking-widest text-brick-900/50 mt-1">{panel.shortDesc}</p>
              </div>
            </button>
          ))}
        </div>
        <div className="lg:col-span-8 border border-brick-900/10 bg-parchment/80 backdrop-blur-md p-8 md:p-12 relative overflow-hidden min-h-[300px] flex items-center shadow-sm rounded-sm">
          <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-antique-gold/30 m-4" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-antique-gold/30 m-4" />
          <AnimatePresence mode="wait">
            <motion.div
              key={activePanel.id}
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -10 }}
              transition={{ duration: 0.4 }}
              className="relative z-10 w-full"
            >
              <div className="flex items-center gap-4 mb-6">
                <activePanel.icon className="w-8 h-8 text-antique-gold" />
                <h3 className="font-serif text-3xl md:text-4xl font-bold text-brick-900">{activePanel.title}</h3>
              </div>
              <div className="w-12 h-[1px] bg-antique-gold/70 mb-6" />
              <p className="font-sans text-lg md:text-xl text-brick-900/80 leading-relaxed font-light">{activePanel.content}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────
// 5. TIMELINE
// ─────────────────────────────────────────────────────────
const SCHEDULE_EVENTS = [
  { day: "Day 1 (10th April 2026)", time: "08:00 AM", title: "Gates Open & Registration", icon: Users, isSpecial: false },
  { day: "Day 1 (10th April 2026)", time: "09:00 AM", title: "The Inaugural Address", icon: Flag, isSpecial: false },
  { day: "Day 1 (10th April 2026)", time: "10:00 AM", title: "Hacking Commences", icon: Terminal, isSpecial: true },
  { day: "Day 1 (10th April 2026)", time: "01:00 PM", title: "Royal Feast (Lunch)", icon: Coffee, isSpecial: false },
  { day: "Day 1 (10th April 2026)", time: "05:00 PM", title: "Mentorship & Counsel Round 1", icon: ShieldCheck, isSpecial: false },
  { day: "Day 2 (11th April 2026)", time: "08:00 AM", title: "Dawn Hack Resumes", icon: Zap, isSpecial: false },
  { day: "Day 2 (11th April 2026)", time: "09:00 AM", title: "Teams Selected from Round 1 (Day 1)", icon: Users, isSpecial: true },
  { day: "Day 2 (11th April 2026)", time: "10:00 AM", title: "Mentorship Round 2", icon: ShieldCheck, isSpecial: false },
  { day: "Day 2 (11th April 2026)", time: "01:00 PM", title: "Final Commits & Judging", icon: Trophy, isSpecial: true },
  { day: "Day 2 (11th April 2026)", time: "05:00 PM", title: "Honors & Valedictory", icon: Award, isSpecial: true },
];

export const TimelineJourney = () => (
  <div className="relative w-full max-w-5xl mx-auto py-32 px-6 border-t border-brick-900/10">
    <motion.div {...fadeUp}>
      <SectionHeader
        eyebrow="Schedule"
        title="The Academic Expedition"
        subtitle="A 48-Hour Legacy Timeline"
      />
    </motion.div>
    <div className="relative border-l border-antique-gold/30 ml-4 md:ml-12 flex flex-col space-y-12">
      {SCHEDULE_EVENTS.map((event, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: i * 0.08 }}
          className={`relative pl-10 md:pl-16 ${event.isSpecial ? "py-2" : ""}`}
        >
          <div className={`absolute top-0 -left-[17px] w-8 h-8 rounded-full flex items-center justify-center border-2 border-parchment ${event.isSpecial ? "bg-antique-gold" : "bg-brick-900/10 backdrop-blur-md"}`}>
            <event.icon size={14} className={event.isSpecial ? "text-brick-900" : "text-antique-gold"} />
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
            <div className="flex flex-col min-w-[140px]">
              <span className="font-sans text-xs uppercase tracking-widest text-brick-900/50">{event.day}</span>
              <span className={`font-sans font-semibold tracking-wider ${event.isSpecial ? "text-antique-gold text-lg" : "text-brick-900/70 text-base"}`}>{event.time}</span>
            </div>
            <h4 className={`font-serif ${event.isSpecial ? "text-2xl font-bold text-brick-900" : "text-xl text-brick-900/90"}`}>{event.title}</h4>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

// ─────────────────────────────────────────────────────────
// 6. FINAL CTA
// ─────────────────────────────────────────────────────────
export const FinalCall = () => (
  <div className="relative w-full py-32 px-6 bg-parchment border-t border-brick-900/10 flex flex-col items-center text-center overflow-hidden">
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="w-full max-w-2xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-antique-gold to-transparent mb-16 opacity-70 origin-center relative"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rotate-45 border border-antique-gold bg-parchment" />
    </motion.div>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-3xl z-10"
    >
      <h2 className="font-serif text-4xl md:text-6xl text-brick-900 font-bold mb-6 tracking-tight drop-shadow-sm">
        The next chapter of innovation begins with you.
      </h2>
      <p className="font-sans text-brick-900/70 tracking-widest uppercase text-sm md:text-base font-medium mb-12">
        Step forward. Build. Compete. Lead.
      </p>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex flex-col sm:flex-row gap-6 justify-center"
      >
        <a
          href="https://unstop.com/hackathons/hackmsit-10-msit-1669285"
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-4 bg-brick-900 text-parchment font-sans tracking-widest uppercase text-sm font-bold shadow-sm hover:shadow-md hover:-translate-y-1 hover:bg-brick-800 transition-all duration-300"
        >
          Register Now
        </a>
        <a href="https://chat.whatsapp.com/GLgTg322BBvIbUkFhmfZOk?mode=gi_t"  target="_blank" className="px-10 py-4 bg-transparent border border-brick-900/20 text-brick-900 font-sans tracking-widest uppercase text-sm font-bold hover:bg-brick-900/5 hover:border-antique-gold/50 hover:-translate-y-1 transition-all duration-300">
            Join Whatsapp Community
          </a>
      </motion.div>
    </motion.div>
  </div>
);

// ─────────────────────────────────────────────────────────
// 7. CAMPUS ENVIRONMENT WRAPPER (unchanged)
// ─────────────────────────────────────────────────────────
const BullockCartWheel = ({ className }) => (
  <motion.div
    animate={{ rotate: 360, y: [0, -2, 0] }}
    transition={{ rotate: { duration: 180, repeat: Infinity, ease: "linear" }, y: { duration: 10, repeat: Infinity, ease: "easeInOut" } }}
    className={`opacity-[0.08] pointer-events-none select-none ${className}`}
  >
    <svg viewBox="0 0 100 100" className="w-80 h-80 md:w-[500px] md:h-[500px] text-brick-900 fill-none stroke-current">
      <circle cx="50" cy="50" r="48" strokeWidth="2.5" />
      <circle cx="50" cy="50" r="43" strokeWidth="1" />
      <circle cx="50" cy="50" r="10" strokeWidth="2" />
      <circle cx="50" cy="50" r="3" fill="currentColor" />
      {[...Array(12)].map((_, i) => (
        <line key={i} x1="50" y1="50" x2={50 + 43 * Math.cos((i * 30 * Math.PI) / 180)} y2={50 + 43 * Math.sin((i * 30 * Math.PI) / 180)} strokeWidth="1.5" strokeLinecap="round" />
      ))}
    </svg>
  </motion.div>
);

const AtmosphericRays = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div
      animate={{ x: ["-10vw", "10vw"], opacity: [0.03, 0.08, 0.03] }}
      transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[-50%] left-[-20%] w-[140%] h-[200%] bg-gradient-to-br from-parchment/30 via-transparent to-transparent rotate-[25deg] mix-blend-screen"
    />
  </div>
);

const DustParticles = () => {
  const [dots, setDots] = useState([]);
  useEffect(() => {
    setDots([...Array(20)].map(() => ({
      x: Math.random() * 100 + "vw",
      y: Math.random() * 100 + "vh",
      opacity: Math.random() * 0.2,
      duration: 20 + Math.random() * 30,
      delay: Math.random() * -20,
    })));
  }, []);
  if (dots.length === 0) return null;
  return (
    <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
      {dots.map((d, i) => (
        <motion.div
          key={i}
          initial={{ x: d.x, y: d.y, opacity: 0 }}
          animate={{ x: [null, Math.random() * 100 + "vw"], y: [null, Math.random() * 100 - 20 + "vh"], opacity: [0, d.opacity, 0] }}
          transition={{ duration: d.duration, repeat: Infinity, ease: "linear", delay: d.delay }}
          className="absolute w-1 h-1 bg-parchment rounded-full blur-[1px]"
        />
      ))}
    </div>
  );
};

export const MSITCampusEnvironment = ({ children }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  return (
    <div className="relative w-full border-t border-brick-900/10">
      <div className="sticky top-0 h-screen w-full flex justify-center items-center overflow-hidden pointer-events-none z-0 bg-[#ebdac5]">
        <div className="relative w-full aspect-video">
          <video
            autoPlay muted loop playsInline
            onCanPlay={() => setVideoLoaded(true)}
            className={`w-full h-full object-cover filter grayscale-[0.65] blur-[2px] transition-opacity duration-[2000ms] ${videoLoaded ? "opacity-[0.20]" : "opacity-0"}`}
            poster="/heritage_campus_bg.png"
          >
            <source src="/animated_msit.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-parchment/60 via-transparent to-parchment/60 opacity-60" />
          <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(244,241,234,1)]" />
        </div>
        <div className="absolute inset-0 bg-parchment/40 mix-blend-overlay" />
      </div>
      <div className="relative -mt-[100vh] z-10 w-full">
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.10] bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] mix-blend-multiply pointer-events-none" />
          <BullockCartWheel className="absolute -top-48 -left-48 md:-top-64 md:-left-64 rotate-[15deg]" />
          <BullockCartWheel className="absolute bottom-[10%] -right-48 md:bottom-[15%] md:-right-64 rotate-[-10deg]" />
          <AtmosphericRays />
          <DustParticles />
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-0 w-full h-[30vh] bg-gradient-to-r from-transparent via-parchment/5 to-transparent blur-3xl opacity-20 pointer-events-none"
          />
        </div>
        <div className="relative z-10 w-full">{children}</div>
      </div>
    </div>
  );
};
