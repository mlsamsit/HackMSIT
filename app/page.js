"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, BookOpen, Users, ShieldCheck } from "lucide-react";
import Image from "next/image";

const quotes = [
  "Honor the past. Build the future.",
  "True innovation requires unyielding foundations.",
  "Construct digital fortresses that stand the test of time.",
  "Let your code be as strategic as a Maharaja's vision.",
  "History favors the bold builder.",
  "Forge the tools of tomorrow with the wisdom of yesterday.",
  "Roots dig deep so branches may reach the sky.",
  "A legacy is not inherited, it is engineered.",
  "Where heritage meets the terminal, greatness runs.",
  "Code with the discipline of a sovereign.",
  "Unyielding spirit, unbound innovation.",
  "Every great architecture starts with a single stone.",
  "The future belongs to those who build it today.",
  "Master your craft, secure your legacy.",
  "A quiet mind writes the loudest code.",
  "Build resilient systems, lead resilient communities.",
  "Patience in debugging, persistence in shipping.",
  "Innovation is the child of necessity and tradition.",
  "No fortress was built without a plan.",
  "Let your algorithms echo through history.",
  "A strong foundation prevents the collapse of logic.",
  "Weave the threads of heritage into the fabric of the web.",
  "Strategy in thought, execution in code.",
  "The best defense is an unshakable architecture.",
  "Leave a mark that compilers will never erase.",
  "Synthesize the old with the new.",
  "A kingdom of ideas awaits your keystroke.",
  "Stand firm in your bugs; debug with honor.",
  "Your legacy is defined by what you deploy.",
  "Command the terminal, conquer the future."
];

// Optional Maharaja Guide
const MaharajaElement = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [activeQuote, setActiveQuote] = useState(quotes[0]);
  const [posClass, setPosClass] = useState("-top-16 -left-20");

  const handleMouseEnter = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setActiveQuote(randomQuote);

    // Random positions bound to top/left since the character is at bottom right
    const positions = [
      "-top-24 -left-12",
      "-top-16 -left-32",
      "-top-32 -left-20",
      "-top-20 -left-48",
      "-top-28 left-4"
    ];
    setPosClass(positions[Math.floor(Math.random() * positions.length)]);
    setShowTooltip(true);
  };

  return (
    <div className="fixed bottom-0 right-4 md:right-12 z-40 pointer-events-none">
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
        className="relative pointer-events-auto"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <div className="relative w-[180px] h-[220px] md:w-[260px] md:h-[340px] cursor-pointer">
          <Image
            src="/heritage_maharaja.png"
            alt="Maharaja Portrait"
            fill
            className="object-contain object-bottom drop-shadow-sm opacity-90"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: showTooltip ? 1 : 0, scale: showTooltip ? 1 : 0.8 }}
          transition={{ duration: 0.2 }}
          className={`absolute ${posClass} w-56 bg-parchment p-4 rounded-2xl shadow-md border border-brick/10 pointer-events-none transition-all duration-300`}
        >
          <p className="text-sm font-serif italic text-brick-900 text-center leading-relaxed">
            "{activeQuote}"
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

// Subtle Animated Royal Elements (Dust)
const DustParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    {[...Array(15)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-parchment rounded-full blur-[1px]"
        initial={{
          x: Math.random() * 100 + "vw",
          y: Math.random() * 100 + "vh",
          opacity: Math.random() * 0.3 + 0.1,
        }}
        animate={{
          y: [null, `-${Math.random() * 30 + 10}vh`],
          x: [null, `${Math.random() * 20 - 10}vw`],
          opacity: [null, 0],
        }}
        transition={{
          duration: Math.random() * 15 + 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    ))}
  </div>
);

// Slight Birds Animation
const BirdsAnimation = () => (
  <div className="absolute top-20 w-full h-[500px] overflow-hidden pointer-events-none z-0">
    <motion.div
      initial={{ x: "-10vw", y: 100 }}
      animate={{ x: "110vw", y: 50 }}
      transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      className="absolute flex gap-4 opacity-30"
    >
      <div className="w-1 h-1 bg-brick-900 rounded-full blur-[1px] animate-pulse"></div>
      <div className="w-1 h-1 bg-brick-900 rounded-full blur-[1px] mt-2 animate-pulse"></div>
      <div className="w-1.5 h-1.5 bg-brick-900 rounded-full blur-[1px] -mt-1 animate-pulse"></div>
    </motion.div>
  </div>
);

const Divider = () => (
  <div className="flex items-center justify-center py-16 opacity-60">
    <div className="w-24 h-[1px] bg-gradient-to-r from-transparent to-antique-gold"></div>
    <div className="w-2 h-2 rotate-45 border border-antique-gold mx-4"></div>
    <div className="w-24 h-[1px] bg-gradient-to-l from-transparent to-antique-gold"></div>
  </div>
);

// Global Nav
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-parchment/95 backdrop-blur-md py-4 shadow-sm border-b border-brick/10' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <h1 className={`font-serif text-2xl font-bold tracking-widest ${scrolled ? 'text-brick-900' : 'text-parchment'}`}>HACKMSIT</h1>
        <div className={`hidden md:flex gap-8 text-sm font-medium tracking-wide ${scrolled ? 'text-brick-900/80' : 'text-parchment/90'}`}>
          <a href="#about" className="hover:text-antique-gold transition-colors">About</a>
          <a href="#legacy" className="hover:text-antique-gold transition-colors">Legacy</a>
          <a href="#tracks" className="hover:text-antique-gold transition-colors">Tracks</a>
          <a href="#prizes" className="hover:text-antique-gold transition-colors">Prizes</a>
        </div>
        <button className={`px-6 py-2 rounded-sm border transition-all font-sans font-medium tracking-wide ${scrolled ? 'border-brick text-brick hover:bg-brick hover:text-parchment' : 'border-parchment text-parchment hover:bg-parchment/10'}`}>
          Apply Now
        </button>
      </div>
    </nav>
  );
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const yHeroParallax = useTransform(scrollYProgress, [0, 1], [0, 80]);

  // Village Section Parallax Targets (slow background scrolling inside the content wrapper)
  const wrapperRef = useRef(null);
  const { scrollYProgress: wrapperScroll } = useScroll({ target: wrapperRef, offset: ["start end", "end start"] });
  const ySky = useTransform(wrapperScroll, [0, 1], ["0%", "15%"]);
  const yVillage = useTransform(wrapperScroll, [0, 1], ["0%", "-10%"]);

  const fadeUp = {
    initial: { opacity: 0, y: 15 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <main className="relative min-h-screen bg-parchment text-foreground selection:bg-antique-gold/30">
      <Navbar />
      <MaharajaElement />

      {/* HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-sandstone-800">
        <DustParticles />
        <motion.div style={{ y: yHeroParallax }} className="absolute inset-0 z-0">
          <Image
            src="/heritage_campus_bg.png"
            alt="MSIT Heritage Campus and Fort"
            fill
            className="object-cover object-bottom opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-brick-900/50 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-parchment via-transparent to-transparent opacity-100"></div>
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center mt-20">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <h2 className="text-parchment font-sans tracking-[0.2em] uppercase mb-6 text-sm flex items-center justify-center gap-3">
              <span className="h-[1px] w-12 bg-parchment/50 inline-block"></span>
              A TRADITION OF EXCELLENCE
              <span className="h-[1px] w-12 bg-parchment/50 inline-block"></span>
            </h2>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-parchment mb-6 drop-shadow-sm">
            HACKMSIT
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} className="text-lg md:text-2xl font-serif italic text-parchment/90 mb-12">
            Built on Legacy. Driven by Innovation.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.7 }} className="flex flex-col sm:flex-row gap-6">
            <button className="px-8 py-3 bg-parchment text-brick-900 border border-parchment rounded-sm font-sans font-medium text-sm tracking-widest uppercase hover:bg-transparent hover:text-parchment transition-all duration-300 shadow-sm">
              Complete Registration
            </button>
            <button className="px-8 py-3 bg-transparent text-parchment border border-parchment/40 rounded-sm font-sans font-medium text-sm tracking-widest uppercase hover:border-parchment transition-all duration-300">
              Discover More
            </button>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 1 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-parchment/60">
          <ChevronDown size={28} strokeWidth={1.5} />
        </motion.div>
      </section>

      {/* CONTINUOUS VILLAGE BACKGROUND EXPERIENCE WRAPPER */}
      <div ref={wrapperRef} className="relative z-10 min-h-screen w-full">
        {/* PARALLAX BACKGROUND LAYERS */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 mix-blend-multiply">
          {/* Static gradient sky fallback to smooth the image */}
          <div className="absolute inset-0 bg-gradient-to-b from-parchment via-parchment/80 to-parchment/95 z-0" />

          <motion.div style={{ y: ySky }} className="absolute inset-x-0 -top-[20%] h-[140%] z-10 opacity-70">
            <Image src="/village_sky.png" alt="Village Sky" fill className="object-cover object-top" />
          </motion.div>

          <motion.div style={{ y: yVillage }} className="absolute inset-x-0 top-[10%] h-[110%] z-20 opacity-30">
            <div className="w-full h-full" style={{ backgroundImage: "url(/village_mid.png)", backgroundSize: "100% auto", backgroundRepeat: "repeat", backgroundPosition: "top" }} />
          </motion.div>

          {/* Slight color washing for readability */}
          <div className="absolute inset-0 bg-parchment/50 z-30" />
        </div>

        {/* Global effects over the background but under text */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <DustParticles />
          <BirdsAnimation />
        </div>

        {/* --- CONTENT BLOCKS --- */}
        <div className="relative z-20">

          <section id="about" className="pt-24 pb-12 max-w-4xl mx-auto px-6 md:px-12 text-center">
            <motion.div {...fadeUp} className="bg-parchment/40 backdrop-blur-sm p-10 rounded-sm border border-brick/10 shadow-[0_10px_40px_rgba(140,59,42,0.05)]">
              <h2 className="font-serif text-3xl md:text-4xl text-antique-gold mb-8 font-bold">A Grounded Ecosystem</h2>
              <p className="font-serif text-xl md:text-2xl leading-relaxed text-brick-900/90">
                HackMSIT provides a scholarly environment where 1000+ builders converge for 48 hours to craft elegant, meaningful software that withstands the test of time.
              </p>
            </motion.div>
          </section>

          <Divider />

          <section id="legacy" className="py-24 overflow-hidden border-y border-brick/5 bg-parchment/20 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
              <motion.div {...fadeUp} className="order-2 lg:order-1">
                <h2 className="font-serif text-4xl md:text-5xl text-antique-gold font-bold mb-6">From Legacy to Innovation</h2>
                <div className="w-16 h-[2px] bg-antique-gold mb-8"></div>
                <div className="space-y-6 text-brick-900/90 font-sans leading-relaxed text-lg">
                  <p>Rooted in the strategic brilliance and undefeated spirit of Maharaja Surajmal, MSIT carries forward a history of building enduring foundations.</p>
                  <p>Today, that legacy transforms from stone fortresses to digital architectures. HackMSIT bridges the monumental achievements of the past with the technological breakthroughs of tomorrow.</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="relative h-[400px] w-full rounded-sm overflow-hidden shadow-xl border border-antique-gold/30 order-1 lg:order-2 bg-brick-900"
              >
                <div className="absolute inset-0 bg-sandstone-800/20 mix-blend-overlay z-10 pointer-events-none" />
                <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute inset-0 w-full h-full">
                  <video src="/HackMSIT.mp4" autoPlay loop muted playsInline className="w-full h-full " />
                </motion.div>
              </motion.div>
            </div>
          </section>

          <Divider />
          <section id="tracks" className="py-12">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
              <motion.div {...fadeUp} className="text-center mb-16">
                <h2 className="font-serif text-3xl md:text-4xl text-antique-gold font-bold mb-4">Domains of Study</h2>
                <div className="w-16 h-[2px] bg-antique-gold mx-auto"></div>
              </motion.div>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { icon: ShieldCheck, title: "Trust & Systems", desc: "Develop secure architectures, blockchain integrations, and resilient systems." },
                  { icon: BookOpen, title: "Intelligence & Data", desc: "Train models, interpret data, and automate meaningful capabilities." },
                  { icon: Users, title: "Society & Accessibility", desc: "Build tools that bridge gaps, improve public infrastructure, and serve communities." }
                ].map((track, i) => (
                  <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.15 }} className="bg-parchment/40 backdrop-blur-md p-8 rounded-sm text-center border border-brick/10 shadow-sm relative group overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-antique-gold/40 to-transparent group-hover:h-2 transition-all duration-700"></div>
                    <div className="mx-auto w-16 h-16 rounded-full bg-sandstone/20 flex items-center justify-center mb-6 border border-brick/5">
                      <track.icon size={26} className="text-antique-gold stroke-[1.5px]" />
                    </div>
                    <h3 className="font-serif text-xl font-bold mb-3 text-brick-900">{track.title}</h3>
                    <p className="text-brick-900/80 text-sm leading-relaxed">{track.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section id="prizes" className="py-24">
            <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
              <motion.div {...fadeUp} className="mb-16">
                <h2 className="font-serif text-3xl md:text-4xl text-antique-gold font-bold mb-4">Grants & Recognition</h2>
                <div className="w-16 h-[2px] bg-antique-gold mx-auto"></div>
              </motion.div>
              <div className="space-y-4">
                {[
                  { label: "First Honor", amount: "₹1,50,000" },
                  { label: "Second Honor", amount: "₹1,00,000" },
                  { label: "Third Honor", amount: "₹75,000" }
                ].map((prize, i) => (
                  <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }} className="py-6 px-8 border border-brick/10 bg-parchment/30 backdrop-blur-sm hover:bg-parchment/50 transition-colors flex justify-between items-center rounded-sm">
                    <span className="font-sans text-sm tracking-widest text-brick-900/60 uppercase font-medium">{prize.label}</span>
                    <span className="font-serif text-2xl md:text-3xl font-bold text-antique-gold">{prize.amount}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-24 border-t border-brick/10 bg-parchment/20 backdrop-blur-md">
            <div className="max-w-4xl mx-auto px-6 md:px-12">
              <motion.div {...fadeUp} className="text-center mb-16">
                <h2 className="font-serif text-3xl md:text-4xl text-antique-gold font-bold mb-4">Academic Itinerary</h2>
                <div className="w-16 h-[2px] bg-antique-gold mx-auto"></div>
              </motion.div>
              <div className="space-y-4">
                {[
                  { time: "09:00 AM", event: "Inaugural Ceremony & Briefing" },
                  { time: "11:00 AM", event: "Hacking Commences" },
                  { time: "11:00 PM", event: "Midnight Evaluation & Mentoring" },
                  { time: "09:00 AM", event: "Exhibition & Final Judgment" }
                ].map((schedule, i) => (
                  <motion.div key={i} {...fadeUp} className="bg-parchment/50 backdrop-blur-sm p-6 flex flex-col md:flex-row md:items-center gap-4 rounded-sm border-l-4 border-l-antique-gold shadow-sm">
                    <div className="font-sans text-sm tracking-widest text-brick-900/60 font-medium w-32 shrink-0">{schedule.time}</div>
                    <div className="font-serif text-lg text-brick-900 font-bold">{schedule.event}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

        </div>
      </div>

      <footer className="py-12 bg-brick-900 text-parchment text-center border-t border-antique-gold/30">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-xl tracking-widest mb-4 font-bold text-antique-gold">HACKMSIT 2026</h2>
          <p className="text-parchment/60 font-sans text-sm mb-8">Maharaja Surajmal Institute of Technology, New Delhi.</p>
          <div className="text-xs text-antique-gold/70 uppercase tracking-widest font-medium">
            © 2026 HackMSIT. Crafted with discipline.
          </div>
        </div>
      </footer>
    </main>
  );
}
