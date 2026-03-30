"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronDown, BookOpen, Clock, Users, ShieldCheck, HelpCircle } from "lucide-react";
import Image from "next/image";

// Components
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'subtle-nav py-4 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <h1 className={`font-serif text-2xl font-bold tracking-widest ${scrolled ? 'text-brick-900' : 'text-parchment'}`}>HACKMSIT</h1>
        <div className={`hidden md:flex gap-8 text-sm font-medium tracking-wide ${scrolled ? 'text-brick-900/80' : 'text-parchment/90'}`}>
          <a href="#about" className="hover:text-brick transition-colors">About</a>
          <a href="#legacy" className="hover:text-brick transition-colors">Legacy</a>
          <a href="#tracks" className="hover:text-brick transition-colors">Tracks</a>
          <a href="#prizes" className="hover:text-brick transition-colors">Prizes</a>
        </div>
        <button className={`px-6 py-2 rounded-sm border transition-all font-sans font-medium tracking-wide ${scrolled ? 'border-brick text-brick hover:bg-brick hover:text-parchment' : 'border-parchment text-parchment hover:bg-parchment/10'}`}>
          Apply Now
        </button>
      </div>
    </nav>
  );
};

// Subtle Animated Royal Elements
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

const LightRays = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    <motion.div
      className="absolute top-0 right-1/4 w-[30vw] h-[150vh] bg-gradient-to-b from-parchment/10 to-transparent origin-top -skew-x-[25deg] blur-3xl opacity-50"
      animate={{ opacity: [0.3, 0.5, 0.3] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute top-0 left-1/4 w-[15vw] h-[120vh] bg-gradient-to-b from-antique-gold/5 to-transparent origin-top skew-x-[15deg] blur-3xl opacity-30"
      animate={{ opacity: [0.1, 0.3, 0.1] }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
    />
  </div>
);

const Divider = () => (
  <div className="flex items-center justify-center py-16 opacity-60">
    <div className="w-24 h-[1px] bg-gradient-to-r from-transparent to-antique-gold"></div>
    <div className="w-2 h-2 rotate-45 border border-antique-gold mx-4"></div>
    <div className="w-24 h-[1px] bg-gradient-to-l from-transparent to-antique-gold"></div>
  </div>
);

const MaharajaElement = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <div className="fixed bottom-0 right-4 md:right-12 z-40 pointer-events-none">
      <motion.div 
        animate={{ y: [0, -8, 0] }}
        transition={{ y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
        className="relative pointer-events-auto"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <div className="relative w-[180px] h-[220px] md:w-[260px] md:h-[340px] cursor-pointer">
          <Image 
            src="/heritage_maharaja.png" 
            alt="Maharaja Surajmal Portrait" 
            fill
            className="object-contain object-bottom drop-shadow-sm opacity-90"
          />
        </div>
        
        {/* Tooltip Dialog */}
        <motion.div 
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: showTooltip ? 1 : 0, y: showTooltip ? 0 : 5 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute -top-16 -left-20 md:-top-20 md:-left-32 w-56 bg-parchment p-4 rounded-sm shadow-md border border-brick/10 pointer-events-none"
        >
          <p className="text-sm font-serif italic text-brick-900 text-center leading-relaxed">
            "Honor the past. Build the future."
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 80]); // very subtle parallax

  const fadeUp = {
    initial: { opacity: 0, y: 15 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <main className="relative min-h-screen bg-parchment text-foreground">
      <Navbar />
      <MaharajaElement />

      {/* HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-sandstone-800">
        <DustParticles />
        <LightRays />
        
        <motion.div 
          style={{ y: yParallax }}
          className="absolute inset-0 z-0"
        >
          <Image 
            src="/heritage_campus_bg.png" 
            alt="MSIT Heritage Campus and Fort" 
            fill
            className="object-cover object-bottom opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-brick-900/40 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-parchment via-transparent to-transparent opacity-100"></div>
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="text-sandstone-800 font-sans tracking-[0.2em] uppercase mb-6 text-sm flex items-center justify-center gap-3">
              <span className="h-[1px] w-12 bg-sandstone-800/50 inline-block"></span>
              A TRADITION OF EXCELLENCE
              <span className="h-[1px] w-12 bg-sandstone-800/50 inline-block"></span>
            </h2>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-parchment mb-6 drop-shadow-sm"
          >
            HACKMSIT
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg md:text-2xl font-serif italic text-parchment/90 mb-12"
          >
            Built on Legacy. Driven by Innovation.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <button className="px-8 py-3 bg-parchment text-brick-900 border border-parchment rounded-sm font-sans font-medium text-sm tracking-widest uppercase hover:bg-transparent hover:text-parchment transition-all duration-300 shadow-sm">
              Complete Registration
            </button>
            <button className="px-8 py-3 bg-transparent text-parchment border border-parchment/40 rounded-sm font-sans font-medium text-sm tracking-widest uppercase hover:border-parchment transition-all duration-300">
              Discover More
            </button>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-parchment/60"
        >
          <ChevronDown size={28} strokeWidth={1.5} />
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="pt-24 pb-12 relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.div {...fadeUp}>
          <h2 className="font-serif text-3xl md:text-4xl text-brick-900 mb-8 font-bold">A Grounded Ecosystem</h2>
          <p className="font-serif text-xl md:text-2xl leading-relaxed text-brick-900/80">
            HackMSIT provides a scholarly environment where 1000+ builders converge for 48 hours to craft elegant, meaningful software that withstands the test of time.
          </p>
        </motion.div>
      </section>

      <Divider />

      {/* LEGACY SECTION (WITH VIDEO) */}
      <section id="legacy" className="py-24 relative z-10 bg-sandstone/10 overflow-hidden border-y border-brick/10">
        <DustParticles />
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Content */}
            <motion.div {...fadeUp} className="relative z-10 order-2 lg:order-1">
              <h2 className="font-serif text-4xl md:text-5xl text-brick-900 font-bold mb-6">From Legacy to Innovation</h2>
              <div className="w-16 h-[2px] bg-antique-gold mb-8"></div>
              
              <div className="space-y-6 text-brick-900/80 font-sans leading-relaxed">
                <p>
                  Rooted in the strategic brilliance and undefeated spirit of Maharaja Surajmal, MSIT carries forward a history of building enduring foundations. 
                </p>
                <p>
                  Today, that legacy transforms from stone fortresses to digital architectures. HackMSIT bridges the monumental achievements of the past with the technological breakthroughs of tomorrow.
                </p>
              </div>
            </motion.div>

            {/* Video Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="relative h-[400px] lg:h-[500px] w-full rounded-sm overflow-hidden z-20 shadow-md border border-antique-gold/20 order-1 lg:order-2 bg-brick-900"
            >
              {/* Warm Overlay */}
              <div className="absolute inset-0 bg-sandstone-800/20 mix-blend-overlay z-10 pointer-events-none"></div>
              
              {/* Slow zoom structure */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-full h-full"
              >
                <video 
                  src="/darbar.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover opacity-70 blur-[1px]"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Divider />

      {/* TRACKS / NOTICE BOARDS */}
      <section id="tracks" className="py-12 relative z-10">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-brick-900 font-bold mb-4">Domains of Study</h2>
            <div className="w-16 h-[2px] bg-antique-gold mx-auto"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: "Trust & Systems", desc: "Develop secure architectures, blockchain integrations, and resilient systems." },
              { icon: BookOpen, title: "Intelligence & Data", desc: "Train models, interpret data, and automate meaningful capabilities." },
              { icon: Users, title: "Society & Accessibility", desc: "Build tools that bridge gaps, improve public infrastructure, and serve communities." }
            ].map((track, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="heritage-card p-8 rounded-sm text-center relative overflow-hidden group"
              >
                {/* Slow Banner / Texture Effect inside card */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-antique-gold/20 to-transparent group-hover:h-3 transition-all duration-700 pointer-events-none"></div>
                
                <div className="mx-auto w-16 h-16 rounded-full bg-parchment/50 flex items-center justify-center mb-6 border border-brick/5">
                  <track.icon size={26} className="text-brick-900 stroke-[1.5px]" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3 text-brick-900">{track.title}</h3>
                <p className="text-brick-900/70 text-sm leading-relaxed">{track.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRIZES */}
      <section id="prizes" className="py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <motion.div {...fadeUp} className="mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-brick-900 font-bold mb-4">Grants & Recognition</h2>
            <div className="w-16 h-[2px] bg-antique-gold mx-auto"></div>
          </motion.div>

          <div className="space-y-4">
            {[
              { label: "First Honor", amount: "₹1,50,000" },
              { label: "Second Honor", amount: "₹1,00,000" },
              { label: "Third Honor", amount: "₹75,000" }
            ].map((prize, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="py-6 px-8 border border-brick/10 bg-sandstone/5 hover:bg-sandstone/10 transition-colors flex flex-col md:flex-row justify-between items-center gap-4 rounded-sm"
              >
                <span className="font-sans text-sm tracking-widest text-brick-900/60 uppercase font-medium">{prize.label}</span>
                <span className="font-serif text-2xl md:text-3xl font-bold text-brick-900">{prize.amount}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section className="py-24 bg-sandstone/10 border-t border-brick/10 relative">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-brick-900 font-bold mb-4">Academic Itinerary</h2>
            <div className="w-16 h-[2px] bg-antique-gold mx-auto"></div>
          </motion.div>
          
          <div className="space-y-4">
            {[
              { time: "09:00 AM", event: "Inaugural Ceremony & Briefing" },
              { time: "11:00 AM", event: "Hacking Commences" },
              { time: "11:00 PM", event: "Midnight Evaluation & Mentoring" },
              { time: "09:00 AM", event: "Exhibition & Final Judgment (Day 3)" }
            ].map((schedule, i) => (
              <motion.div 
                key={i}
                {...fadeUp}
                className="heritage-card p-6 flex flex-col md:flex-row md:items-center gap-4 rounded-sm border-l-4 border-l-antique-gold"
              >
                <div className="font-sans text-sm tracking-widest text-brick-900/60 font-medium w-32 shrink-0">{schedule.time}</div>
                <div className="font-serif text-lg text-brick-900 font-bold">{schedule.event}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-brick-900 text-parchment text-center border-t-4 border-antique-gold">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-xl tracking-widest mb-4 font-bold">HACKMSIT 2026</h2>
          <p className="text-parchment/60 font-sans text-sm mb-8">Maharaja Surajmal Institute of Technology, New Delhi.</p>
          <div className="text-xs text-parchment/40 uppercase tracking-widest font-medium">
            © 2026 HackMSIT. Crafted with discipline.
          </div>
        </div>
      </footer>
    </main>
  );
}
