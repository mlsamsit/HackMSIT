"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  Cpu,
  Code,
  ShieldCheck,
  Map,
  Trophy,
  BookOpen,
  Clock,
  Users,
  Coffee,
  Flag,
  Award,
  Terminal,
  Zap,
} from "lucide-react";
import Link from "next/link";

// ----------------------------------------------------
// 1. HACKMSIT WAR ROOM (Strategy Board)
// ----------------------------------------------------
const WAR_ROOM_HOTSPOTS = [
  {
    id: "tracks",
    title: "Battlegrounds",
    shortDesc: "Choose your domain",
    content: "Master Artificial Intelligence, Web3, or Security. Each arena demands unique strategies and an unyielding will.",
    icon: Map,
    position: "top-10 left-[10%] md:left-[20%]",
  },
  {
    id: "problem",
    title: "Decrees",
    shortDesc: "Problem Statements",
    content: "Address real-world crises. You will be given tactical scenarios requiring elegant, scalable, and foolproof architectures.",
    icon: BookOpen,
    position: "bottom-20 left-[15%] md:left-[30%]",
  },
  {
    id: "judging",
    title: "The Scales",
    shortDesc: "Judging Criteria",
    content: "Innovation (30%), Execution & Usability (30%), Technical Feasibility (20%), and Presentation (20%). Build with purpose.",
    icon: Trophy,
    position: "top-20 right-[15%] md:right-[30%]",
  },
  {
    id: "tips",
    title: "Counsel",
    shortDesc: "Survival Tips",
    content: "Pace your coding. Hydrate. Prototype early and validate your logic before polishing the UI. Trust your allies.",
    icon: ShieldCheck,
    position: "bottom-16 right-[10%] md:right-[20%]",
  },
];

export const WarRoom = () => {
  const [activePanel, setActivePanel] = useState(WAR_ROOM_HOTSPOTS[0]);

  return (
    <div className="relative w-full py-24 px-6 md:px-12 bg-transparent">
      <div className="max-w-6xl mx-auto flex flex-col items-center mb-16 relative z-10">
        <h2 className="font-serif text-3xl md:text-5xl text-brick-900 font-bold mb-4 tracking-wide">Command Interface</h2>
        <div className="w-16 h-[2px] bg-antique-gold mx-auto mb-6"></div>
        <p className="font-sans text-brick-900/60 tracking-widest text-sm uppercase">Strategic Planning Console</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
        {/* Sidebar Nav */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          {WAR_ROOM_HOTSPOTS.map((panel) => (
            <button
              key={panel.id}
              onClick={() => setActivePanel(panel)}
              className={`flex items-center gap-4 p-5 text-left transition-all duration-300 border ${activePanel.id === panel.id
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

        {/* Main Display Area */}
        <div className="lg:col-span-8 border border-brick-900/10 bg-parchment/80 backdrop-blur-md p-8 md:p-12 relative overflow-hidden min-h-[300px] flex items-center shadow-sm">
          {/* Subtle architectural background texture */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-20 mix-blend-multiply pointer-events-none" />

          {/* Faint corner accents */}
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
              <div className="w-12 h-[1px] bg-antique-gold/70 mb-6"></div>
              <p className="font-sans text-lg md:text-xl text-brick-900/80 leading-relaxed font-light">
                {activePanel.content}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

// ----------------------------------------------------
// 2. CHOOSE YOUR PATH (AI Guided Selector)
// ----------------------------------------------------
const DOMAINS = [
  { id: "ai", label: "Intelligence & Data", icon: Cpu },
  { id: "web3", label: "Trust & Systems", icon: ShieldCheck },
  { id: "social", label: "Society & Accessibility", icon: Users },
];

export const ChoosePath = () => {
  const [step, setStep] = useState(1);
  const [level, setLevel] = useState(null);
  const [domain, setDomain] = useState(null);
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState(null);

  const handleReveal = () => {
    setLoading(true);
    setStep(3);
    // Mock API Call delay
    setTimeout(() => {
      setLoading(false);
      setRecommendation({
        track: domain === "ai" ? "AI & Machine Learning Track" : domain === "web3" ? "Web3 & Blockchain Track" : "Civic Tech & Society Track",
        team: level === "beginner" ? "3-4 Builders (focus on learning)" : "2-3 Specialists (focus on deep integration)",
        tip: level === "beginner" ? "Leverage APIs and established libraries. Focus on a clean, functioning prototype rather than reinventing the wheel." : "Optimize your logic. Judges will look at code quality, architecture scalability, and edge-case handling.",
      });
    }, 2000);
  };

  const resetFlow = () => {
    setStep(1);
    setLevel(null);
    setDomain(null);
    setRecommendation(null);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto py-24 px-6 border-t border-brick-900/10">
      <div className="text-center mb-12">
        <h2 className="font-serif text-3xl md:text-5xl text-antique-gold font-bold mb-4 tracking-wide">Choose Your Royal Path</h2>
        <p className="font-sans text-brick-900/70 text-sm tracking-widest uppercase mb-6">Consult the Architect Oracle</p>
      </div>

      <div className="bg-parchment/80 backdrop-blur-md border border-brick-900/10 shadow-sm p-8 md:p-12 min-h-[400px] flex flex-col justify-center relative overflow-hidden">
        {/* Subtle decorative corners */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-antique-gold/40 m-4" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-antique-gold/40 m-4" />

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.4 }} className="w-full">
              <h3 className="text-xl font-serif text-center font-bold text-brick-900 mb-8">What is your current mastery?</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {["Beginner", "Intermediate", "Advanced"].map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => { setLevel(lvl.toLowerCase()); setStep(2); }}
                    className="py-4 px-6 border border-brick-900/20 hover:border-antique-gold hover:bg-brick-900/5 transition-all duration-300 font-sans tracking-wide text-brick-900 font-medium group"
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.4 }} className="w-full">
              <h3 className="text-xl font-serif text-center font-bold text-brick-900 mb-8">Which domain calls your name?</h3>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {DOMAINS.map((dom) => (
                  <button
                    key={dom.id}
                    onClick={() => setDomain(dom.id)}
                    className={`py-6 px-4 flex flex-col items-center gap-4 border transition-all duration-300 ${domain === dom.id ? "border-antique-gold bg-brick-900/5" : "border-brick-900/20 hover:border-antique-gold/50"}`}
                  >
                    <dom.icon className={`w-8 h-8 ${domain === dom.id ? "text-antique-gold" : "text-brick-900/60"}`} />
                    <span className="font-sans text-sm tracking-wide text-brick-900 font-medium text-center">{dom.label}</span>
                  </button>
                ))}
              </div>
              <div className="flex justify-between items-center mt-8">
                <button onClick={() => setStep(1)} className="text-sm font-sans tracking-widest uppercase text-brick-900/50 hover:text-brick-900 transition-colors">Go Back</button>
                <button
                  onClick={handleReveal}
                  disabled={!domain}
                  className="px-8 py-3 bg-brick-900 text-parchment font-sans uppercase tracking-widest text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-brick-800 transition-colors"
                >
                  Consult Oracle
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div key="step3" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="w-full flex flex-col items-center text-center">
              {loading ? (
                <div className="flex flex-col items-center justify-center space-y-6 py-12">
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="w-16 h-16 border-t-2 border-r-2 border-antique-gold rounded-full" />
                  <p className="font-serif italic text-brick-900/70 text-lg">Analyzing your destiny...</p>
                </div>
              ) : (
                <div className="w-full text-left space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                  <h3 className="text-2xl font-serif font-bold text-antique-gold text-center mb-6 border-b border-antique-gold/20 pb-4">The Oracle's Guidance</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-sans text-xs uppercase tracking-widest text-brick-900/50 mb-1">Recommended Path</h4>
                      <p className="font-serif text-xl tracking-wide text-brick-900 font-semibold">{recommendation.track}</p>
                    </div>
                    <div>
                      <h4 className="font-sans text-xs uppercase tracking-widest text-brick-900/50 mb-1">Ideal Formation</h4>
                      <p className="font-sans text-sm text-brick-900/90">{recommendation.team}</p>
                    </div>
                    <div>
                      <h4 className="font-sans text-xs uppercase tracking-widest text-brick-900/50 mb-1">Royal Pro-Tip</h4>
                      <p className="font-serif italic text-brick-900/80 leading-relaxed border-l-2 border-antique-gold pl-4 py-1">{recommendation.tip}</p>
                    </div>
                  </div>
                  <div className="pt-8 flex justify-center">
                    <button onClick={resetFlow} className="text-sm font-sans tracking-widest uppercase text-brick-900 border-b border-brick-900 pb-1 hover:text-antique-gold hover:border-antique-gold transition-colors">Start Anew</button>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

// ----------------------------------------------------
// 3. TIMELINE SECTION (Visual Journey)
// ----------------------------------------------------
const SCHEDULE_EVENTS = [
  { day: "Day 1 (10th April)", time: "09:00 AM", title: "Gates Open & Registration", icon: Users, isSpecial: false },
  { day: "Day 1 (10th April)", time: "10:00 AM", title: "The Inaugural Address", icon: Flag, isSpecial: false },
  { day: "Day 1 (10th April)", time: "11:00 AM", title: "Hacking Commences", icon: Terminal, isSpecial: true },
  { day: "Day 1 (10th April)", time: "01:00 PM", title: "Royal Feast (Lunch)", icon: Coffee, isSpecial: false },
  { day: "Day 1 (10th April)", time: "05:00 PM", title: "Mentorship & Counsel Round 1", icon: ShieldCheck, isSpecial: false },
  { day: "Day 2 (11th April)", time: "08:00 AM", title: "Dawn Hack Resumes", icon: Zap, isSpecial: false },
  { day: "Day 2 (11th April)", time: "10:00 AM", title: "Mentorship Round 2", icon: ShieldCheck, isSpecial: false },
  { day: "Day 2 (11th April)", time: "01:00 PM", title: "Final Commits & Judging", icon: Trophy, isSpecial: true },
  { day: "Day 2 (11th April)", time: "05:00 PM", title: "Honors & Valedictory", icon: Award, isSpecial: true },
];

export const TimelineJourney = () => {
  return (
    <div className="relative w-full max-w-5xl mx-auto py-32 px-6 border-t border-brick-900/10">
      <div className="text-center mb-20">
        <h2 className="font-serif text-3xl md:text-5xl text-antique-gold font-bold mb-4 tracking-wide">The Academic Expedition</h2>
        <div className="w-16 h-[2px] bg-antique-gold mx-auto mb-6"></div>
        <p className="font-sans text-brick-900/70 text-sm tracking-widest uppercase mb-6">A 48-Hour Legacy Timeline</p>
      </div>

      <div className="relative border-l border-antique-gold/30 ml-4 md:ml-12 lg:ml-1/2 flex flex-col space-y-12">
        {SCHEDULE_EVENTS.map((event, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`relative pl-10 md:pl-16 ${event.isSpecial ? "py-2" : ""}`}
          >
            {/* Timeline Dot */}
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
};

// ----------------------------------------------------
// 4. FINAL CTA - "THE ROYAL CALL"
// ----------------------------------------------------
export const FinalCall = () => {
  return (
    <div className="relative w-full py-32 px-6 bg-parchment border-t border-brick-900/10 flex flex-col items-center text-center overflow-hidden">

      {/* Decorative Royal Divider (Animated) */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="w-full max-w-2xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-antique-gold to-transparent mb-16 opacity-70 origin-center relative"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rotate-45 border border-antique-gold bg-parchment"></div>
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
            href="https://unstop.com/p/hackmsit-msit-1667907?u=" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-brick-900 text-parchment font-sans tracking-widest uppercase text-sm font-bold shadow-sm hover:shadow-md hover:-translate-y-1 hover:bg-brick-800 transition-all duration-300"
          >
            Register Now
          </a>
          <a href="#" className="px-10 py-4 bg-transparent border border-brick-900/20 text-brick-900 font-sans tracking-widest uppercase text-sm font-bold hover:bg-brick-900/5 hover:border-antique-gold/50 hover:-translate-y-1 transition-all duration-300">
            Join Discord Community
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

// --- Enhanced Atmospheric Elements ---

const BullockCartWheel = ({ className }) => {
  return (
    <motion.div
      animate={{
        rotate: 360,
        y: [0, -2, 0]
      }}
      transition={{
        rotate: { duration: 180, repeat: Infinity, ease: "linear" },
        y: { duration: 10, repeat: Infinity, ease: "easeInOut" }
      }}
      className={`opacity-[0.08] pointer-events-none select-none ${className}`}
    >
      <svg viewBox="0 0 100 100" className="w-80 h-80 md:w-[500px] md:h-[500px] text-brick-900 fill-none stroke-current">
        {/* Outer Rims - Thick and rustic */}
        <circle cx="50" cy="50" r="48" strokeWidth="2.5" />
        <circle cx="50" cy="50" r="43" strokeWidth="1" />

        {/* Hub and Axle Section */}
        <circle cx="50" cy="50" r="10" strokeWidth="2" />
        <circle cx="50" cy="50" r="3" fill="currentColor" />

        {/* Spokes (12-spoke traditional arrangement) */}
        {[...Array(12)].map((_, i) => (
          <line
            key={i}
            x1="50"
            y1="50"
            x2={50 + 43 * Math.cos((i * 30 * Math.PI) / 180)}
            y2={50 + 43 * Math.sin((i * 30 * Math.PI) / 180)}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        ))}

        {/* Texture detail - dots simulating hardware/wood grain holes */}
        {[...Array(24)].map((_, i) => (
          <circle
            key={i}
            cx={50 + 45.5 * Math.cos((i * 15 * Math.PI) / 180)}
            cy={50 + 45.5 * Math.sin((i * 15 * Math.PI) / 180)}
            r="0.4"
            fill="currentColor"
            opacity="0.6"
          />
        ))}
      </svg>
    </motion.div>
  );
};

const PalaceArch = ({ className }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0.05, 0] }}
      transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      className={`pointer-events-none select-none ${className}`}
    >
      <svg viewBox="0 0 200 100" className="w-full h-auto text-brick-900/30 fill-none stroke-current">
        {/* Mughal/Rajasthani Arch Silhouette */}
        <path
          d="M20,100 L20,60 C20,35 50,10 100,10 C150,10 180,35 180,60 L180,100"
          strokeWidth="0.3"
          strokeDasharray="3 6"
        />
        <path
          d="M40,100 L40,70 C40,50 65,30 100,30 C135,30 160,50 160,70 L160,100"
          strokeWidth="0.1"
        />
        {/* Central Lotus Motif Seed */}
        <circle cx="100" cy="45" r="4" strokeWidth="0.05" opacity="0.2" />
      </svg>
    </motion.div>
  );
};

const AtmosphericRays = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{
          x: ["-10vw", "10vw"],
          opacity: [0.03, 0.08, 0.03],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-50%] left-[-20%] w-[140%] h-[200%] bg-gradient-to-br from-parchment/30 via-transparent to-transparent rotate-[25deg] mix-blend-screen"
      />
      <motion.div
        animate={{
          x: ["5vw", "-5vw"],
          opacity: [0.02, 0.06, 0.02],
        }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        className="absolute top-[-50%] right-[-10%] w-[100%] h-[200%] bg-gradient-to-bl from-parchment/20 via-transparent to-transparent -rotate-[15deg] mix-blend-screen"
      />
    </div>
  );
};

const DustParticles = () => {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    setDots([...Array(20)].map(() => ({
      x: Math.random() * 100 + "vw",
      y: Math.random() * 100 + "vh",
      opacity: Math.random() * 0.2,
      duration: 20 + Math.random() * 30,
      delay: Math.random() * -20
    })));
  }, []);

  if (dots.length === 0) return null;

  return (
    <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
      {dots.map((d, i) => (
        <motion.div
          key={i}
          initial={{
            x: d.x,
            y: d.y,
            opacity: 0,
          }}
          animate={{
            x: [null, (Math.random() * 100) + "vw"],
            y: [null, (Math.random() * 100) - 20 + "vh"],
            opacity: [0, d.opacity, 0],
          }}
          transition={{
            duration: d.duration,
            repeat: Infinity,
            ease: "linear",
            delay: d.delay
          }}
          className="absolute w-1 h-1 bg-parchment rounded-full blur-[1px]"
        />
      ))}
    </div>
  );
};

// ----------------------------------------------------
// 5. CAMPUS ENVIRONMENT WRAPPER
// ----------------------------------------------------
export const MSITCampusEnvironment = ({ children }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div className="relative w-full border-t border-brick-900/10">
      {/* Sticky Background Video Layer */}
      <div className="sticky top-0 h-screen w-full flex justify-center items-center overflow-hidden pointer-events-none z-0 bg-[#ebdac5]">
        <div className="relative w-full aspect-video">
          <video
            autoPlay
            muted
            loop
            playsInline
            onCanPlay={() => setVideoLoaded(true)}
            className={`w-full h-full object-cover filter grayscale-[0.65] blur-[2px] transition-opacity duration-[2000ms] ${videoLoaded ? 'opacity-[0.20]' : 'opacity-0'}`}
            poster="/heritage_campus_bg.png"
          >
            <source src="/animated_msit.mp4" type="video/mp4" />
          </video>
          {/* Inner Vignette / Soft Edges for the background window */}
          <div className="absolute inset-0 bg-gradient-to-t from-parchment/60 via-transparent to-parchment/60 opacity-60" />
          <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(244,241,234,1)]" />
        </div>

        {/* Global Soft Overlays covering the rest of the screen */}
        <div className="absolute inset-0 bg-parchment/40 mix-blend-overlay" />
      </div>

      {/* Content wrapper with negative margin to overlap the sticky background */}
      <div className="relative -mt-[100vh] z-10 w-full">
        {/* Atmospheric Heritage Elements */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.10] bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] mix-blend-multiply pointer-events-none" />

          {/* Bullock Cart Wheels - Edge placements */}
          <BullockCartWheel className="absolute -top-48 -left-48 md:-top-64 md:-left-64 rotate-[15deg]" />
          <BullockCartWheel className="absolute bottom-[10%] -right-48 md:bottom-[15%] md:-right-64 rotate-[-10deg]" />

          {/* Royal Palace Silhouettes */}
          <PalaceArch className="absolute top-[20%] left-[-10%] w-[60%] max-w-2xl opacity-40" />
          <PalaceArch className="absolute bottom-[25%] right-[-15%] w-[70%] max-w-3xl scale-x-[-1] opacity-30" />

          {/* Micro-animations: Light Rays & Dust */}
          <AtmosphericRays />
          <DustParticles />

          {/* Subtle Horizontal Haze movement */}
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-0 w-full h-[30vh] bg-gradient-to-r from-transparent via-parchment/5 to-transparent blur-3xl opacity-20 pointer-events-none"
          />

          {/* Faint Architectural Motifs & Dividers */}
          <div className="absolute inset-x-0 top-[15%] h-[1px] bg-gradient-to-r from-transparent via-brick-900/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-[10%] h-[1px] bg-gradient-to-r from-transparent via-brick-900/10 to-transparent" />

          {/* Repeating Decorative divider motif at specific junctions */}
          <div className="absolute top-[40%] left-0 w-full h-8 opacity-[0.04]" style={{ backgroundImage: `url('data:image/svg+xml,%3Csvg width="40" height="8" viewBox="0 0 40 8" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 4c4 0 4-4 8-4s4 4 8 4 4-4 8-4 4 4 8 4 4-4 8-4" fill="none" stroke="%2370322b" stroke-width="0.5"/%3E%3C/svg%3E')`, backgroundRepeat: 'repeat-x' }} />
        </div>

        {/* Child Sections */}
        <div className="relative z-10 w-full">
          {children}
        </div>
      </div>
    </div>
  );
};
