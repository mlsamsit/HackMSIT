"use client";

import { motion } from "framer-motion";
import SiteFooter from "../../components/layout/SiteFooter";
import TopNav from "../../components/layout/TopNav";
import FloatingShape from "../../components/ui/FloatingShape";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function ArenaClient() {
  return (
    <>
      <TopNav active="arena" />
      <main className="pt-32 relative overflow-hidden">
        
        {/* Animated Background Elements relevant to HackWebsite */}
        <div className="absolute top-0 left-0 w-full h-[800px] overflow-hidden -z-10 pointer-events-none">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
            className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] rounded-full border border-primary/20 bg-[radial-gradient(circle,rgba(var(--color-primary),0.05)_0%,transparent_70%)] opacity-50"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            className="absolute top-[30%] -right-[10%] w-[800px] h-[800px] rounded-full border border-secondary-container/20 bg-[radial-gradient(circle,rgba(var(--color-secondary-container),0.05)_0%,transparent_70%)] opacity-30"
          />
        </div>

        <section className="relative mx-auto max-w-7xl overflow-hidden px-6 py-20">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="relative z-10 flex flex-col items-center text-center"
          >
            <motion.div 
              variants={{
                hidden: { scale: 0.8, opacity: 0 },
                visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 200, damping: 20 } }
              }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="mb-6 inline-block -rotate-2 rounded-full border-2 border-on-background bg-secondary-container px-6 py-2 font-bold uppercase tracking-widest text-on-secondary-container cursor-default"
            >
              48 Hours of Pure Creation
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="mb-8 font-headline text-7xl font-black leading-none tracking-tighter text-on-background md:text-9xl relative"
            >
              HACK<span className="text-primary relative inline-block">MSIT
                <motion.span
                  className="absolute -top-4 -right-8 text-3xl"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  ⚡
                </motion.span>
              </span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="mb-12 max-w-2xl text-xl font-medium text-on-surface-variant md:text-2xl"
            >
              Where neon dreams meet rapid code. Join 500+ creators for the ultimate weekend of
              building, breaking, and brand new ideas.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col gap-6 sm:flex-row relative z-20">
              <motion.button 
                whileHover={{ scale: 1.05, y: -5, boxShadow: "0 15px 0px #390083" }}
                whileTap={{ scale: 0.95, y: 5, boxShadow: "0 0px 0px #390083" }}
                className="rounded-xl bg-primary px-12 py-6 text-xl font-black uppercase tracking-widest text-on-primary shadow-[0_10px_0px_#390083] transition-colors"
              >
                Claim Your Spot
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05, y: -5, boxShadow: "0 15px 0px #3a264b" }}
                whileTap={{ scale: 0.95, y: 5, boxShadow: "0 0px 0px #3a264b" }}
                className="rounded-xl border-4 border-on-background bg-surface-container-lowest px-12 py-6 text-xl font-black uppercase tracking-widest text-on-background shadow-[0_10px_0px_#3a264b] transition-colors"
              >
                View Tracks
              </motion.button>
            </motion.div>
          </motion.div>

          <FloatingShape delay={0} duration={5} className="absolute left-10 top-20 -rotate-12 opacity-20 md:opacity-100 z-0">
            <motion.div 
              whileHover={{ rotate: 12, scale: 1.1 }}
              className="flex h-32 w-32 items-center justify-center rounded-lg bg-secondary-container p-4 shadow-xl cursor-grab"
            >
              <span className="material-symbols-outlined text-6xl text-on-secondary-container" data-weight="fill">
                lightbulb
              </span>
            </motion.div>
          </FloatingShape>
          
          <FloatingShape delay={1} duration={6} className="absolute bottom-20 right-10 rotate-12 opacity-20 md:opacity-100 z-0">
            <motion.div 
              whileHover={{ rotate: -12, scale: 1.1 }}
              className="flex h-40 w-40 items-center justify-center rounded-full border-4 border-on-background bg-tertiary-container p-4 shadow-xl cursor-grab"
            >
              <span className="material-symbols-outlined text-7xl text-on-tertiary-container" data-weight="fill">
                edit
              </span>
            </motion.div>
          </FloatingShape>
          
          <FloatingShape delay={2} duration={4} className="absolute right-20 top-40 hidden rotate-6 opacity-20 lg:block md:opacity-100 z-0">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="h-32 w-48 rounded-xl border-4 border-primary bg-surface-container-highest p-4 shadow-2xl overflow-hidden relative cursor-grab"
            >
              <div className="absolute top-0 right-0 w-full h-[2px] bg-primary opacity-50" />
              <motion.div 
                className="absolute top-0 left-0 w-1/3 h-[2px] bg-white shadow-[0_0_10px_white]" 
                animate={{ x: ["-100%", "300%"] }} 
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
              <div className="mb-2 flex gap-1 relative z-10">
                <div className="h-3 w-3 rounded-full bg-error" />
                <div className="h-3 w-3 rounded-full bg-secondary-fixed-dim" />
                <div className="h-3 w-3 rounded-full bg-tertiary" />
              </div>
              <div className="mb-2 h-2 w-3/4 rounded bg-primary-container relative z-10" />
              <div className="h-2 w-1/2 rounded bg-primary-container relative z-10" />
            </motion.div>
          </FloatingShape>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-12 font-headline text-5xl font-black uppercase tracking-tight text-on-background"
          >
            Choose Your Track
          </motion.h2>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 gap-6 md:grid-cols-12"
          >
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative min-h-[400px] overflow-hidden rounded-lg bg-primary-container p-10 md:col-span-8 shadow-xl border-2 border-transparent hover:border-primary/50 transition-colors"
            >
              <div className="relative z-10">
                <span className="material-symbols-outlined mb-6 text-5xl text-on-primary-container" data-weight="fill">
                  psychology
                </span>
                <h3 className="mb-4 text-4xl font-black uppercase text-on-primary-container">
                  Neural Frontiers
                </h3>
                <p className="max-w-md text-xl font-medium text-on-primary-container">
                  Push the limits of LLMs, generative art, and autonomous agents in our flagship AI
                  track.
                </p>
              </div>
              <motion.div 
                animate={{ rotate: [0, 5, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -right-10 opacity-20 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110"
              >
                <span className="material-symbols-outlined text-[300px] text-on-primary-container" data-weight="fill">
                  memory
                </span>
              </motion.div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative flex flex-col overflow-hidden rounded-lg bg-secondary-container p-10 md:col-span-4 shadow-xl border-2 border-transparent hover:border-secondary-container/50 transition-colors"
            >
              <span className="material-symbols-outlined mb-6 text-5xl text-on-secondary-container" data-weight="fill">
                sports_esports
              </span>
              <h3 className="mb-4 text-4xl font-black uppercase leading-none text-on-secondary-container">
                Infinite Worlds
              </h3>
              <p className="font-bold text-on-secondary-container opacity-80 z-10 relative">
                Build the next viral indie hit or immersive VR experience.
              </p>
              <div className="mt-auto pt-8">
                <span className="text-6xl font-black text-on-secondary-container opacity-10">02</span>
              </div>
              <motion.div
                className="absolute -bottom-4 -right-4 w-40 h-40 bg-on-secondary-container rounded-full blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-500"
              />
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative flex flex-col overflow-hidden rounded-lg bg-tertiary-container p-10 md:col-span-4 shadow-xl border-2 border-transparent hover:border-tertiary-container/50 transition-colors"
            >
              <span className="material-symbols-outlined mb-6 text-5xl text-on-tertiary-container" data-weight="fill">
                token
              </span>
              <h3 className="mb-4 text-4xl font-black uppercase leading-none text-on-tertiary-container">
                De-Fi Chaos
              </h3>
              <p className="font-bold text-on-tertiary-container opacity-80 z-10 relative">
                Protocol layer innovations and decentralized social graphs.
              </p>
              <div className="mt-auto pt-8">
                <span className="text-6xl font-black text-on-tertiary-container opacity-10">03</span>
              </div>
              <motion.div
                className="absolute -bottom-4 -right-4 w-40 h-40 bg-on-tertiary-container rounded-full blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-500"
              />
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              whileHover={{ scale: 1.01 }}
              className="group relative flex items-center gap-12 overflow-hidden rounded-lg border-4 border-on-background bg-surface-container-highest p-10 md:col-span-8 shadow-2xl"
            >
              <div className="flex-1 relative z-10">
                <h3 className="mb-4 text-4xl font-black uppercase text-on-background">The Open Canvas</h3>
                <p className="text-lg font-medium text-on-surface-variant">
                  Don&apos;t fit the mold? Build anything that makes the world a bit more electric. No
                  rules, just vibes.
                </p>
              </div>
              <div className="hidden sm:block relative z-10">
                <motion.div 
                  whileHover={{ rotate: 45, scale: 1.2 }}
                  className="flex h-32 w-32 rotate-12 items-center justify-center rounded-xl bg-on-background cursor-pointer"
                >
                  <span className="material-symbols-outlined text-6xl text-surface" data-weight="fill">
                    rocket_launch
                  </span>
                </motion.div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </motion.div>
          </motion.div>
        </section>

        <section className="my-20 bg-on-background py-24 text-surface relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mx-auto grid max-w-7xl grid-cols-2 gap-12 px-6 md:grid-cols-4 relative z-10"
          >
            {[
              { stat: "$50k", label: "Cash Prizes", color: "text-secondary-container" },
              { stat: "48h", label: "Of Hacking", color: "text-primary-container" },
              { stat: "1.2k", label: "Lines of Caffeine", color: "text-tertiary-container" },
              { stat: "∞", label: "Cool Sticker Ops", color: "text-error-container" }
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp} className="group text-center cursor-default">
                <motion.div 
                  whileHover={{ scale: 1.2, rotate: index % 2 === 0 ? 5 : -5 }}
                  className={`mb-2 text-6xl font-black ${item.color} md:text-8xl inline-block`}
                >
                  {item.stat}
                </motion.div>
                <div className="font-headline font-bold uppercase tracking-widest text-surface-container opacity-80 group-hover:opacity-100 transition-opacity">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="flex flex-col items-center gap-16 md:flex-row">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex-1"
            >
              <h2 className="mb-6 font-headline text-6xl font-black uppercase leading-none tracking-tight text-on-background">
                Step Into The Arena
              </h2>
              <p className="mb-8 text-xl leading-relaxed text-on-surface-variant">
                Our venue isn&apos;t just a hall; it&apos;s a living, breathing creator hub. From the
                &quot;Focus Pit&quot; for deep work to the &quot;Lounge Deck&quot; for 3 AM karaoke
                sessions, find your perfect zone.
              </p>
              <ul className="mb-10 space-y-4">
                {[
                  { text: "Gigabit Fiber for everyone", color: "bg-secondary-container" },
                  { text: "Gourmet energy bars and tacos", color: "bg-primary-container" },
                  { text: "Sleep pods & sensory rooms", color: "bg-tertiary-container" }
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    custom={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2, duration: 0.5 }}
                    className="flex items-center gap-4 text-lg font-bold group"
                  >
                    <motion.span 
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-on-background ${item.color} cursor-default`}
                    >
                      <span className="material-symbols-outlined text-sm font-black" data-weight="fill">
                        check
                      </span>
                    </motion.span>
                    <span className="group-hover:text-primary transition-colors">{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              className="relative flex-1"
            >
              <motion.div 
                whileHover={{ rotate: 0, scale: 1.02 }}
                className="aspect-square w-full rotate-2 overflow-hidden rounded-[3rem] border-8 border-on-background bg-surface-container-high shadow-2xl relative"
              >
                <img
                  alt="Modern tech workspace"
                  className="h-full w-full object-cover grayscale opacity-80 mix-blend-multiply transition-all duration-700 hover:grayscale-0 hover:opacity-100 hover:mix-blend-normal"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC82BCUwe6lBJEhdngdtXXiL171gjQ7ArRD-zuGtGdxpaItJQYUPwSD3taSd1Mb_N30hPaufTggCXUdtX5wjyG3_7T_jzmq2JcYpJinVro0sJts9H1tmOJq-bhUj4cKgymhsAlnIe33sfGSbJovjRZ47uCBp6rUEuff6ngmCztEWUePDWdTICCgbw8DPWqvxPqgENg6NvGSbkGjqbM6yh9givxH4iTjaxTwvZ_tfONioNFIHKbyE3Pgse8K5P6_zvtrtd0EY5n209gm"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-primary/10 pointer-events-none transition-opacity hover:opacity-0">
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="-rotate-6 rounded-2xl border-4 border-on-background bg-surface p-6 shadow-xl"
                  >
                    <span className="text-3xl font-black uppercase text-on-background">Arena Zone A</span>
                  </motion.div>
                </div>
              </motion.div>
              <FloatingShape delay={1} duration={4} className="absolute -bottom-6 -left-6 z-20">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  className="flex h-32 w-32 rotate-12 items-center justify-center rounded-full border-4 border-on-background bg-secondary-container shadow-lg cursor-pointer"
                >
                  <span className="text-center text-xl font-black uppercase leading-none text-on-background group-hover:text-white">
                    JOIN
                    <br />
                    US
                  </span>
                </motion.div>
              </FloatingShape>
            </motion.div>
          </div>
        </section>
      </main>

      <SiteFooter />

      <div className="fixed bottom-8 right-8 z-50">
        <motion.button 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 1 }}
          whileHover={{ scale: 1.1, rotate: -5 }}
          whileTap={{ scale: 0.95 }}
          className="group flex h-16 w-16 items-center justify-center rounded-full border-4 border-on-background bg-secondary-container text-on-secondary-container shadow-2xl relative"
        >
          <span className="material-symbols-outlined text-3xl font-black" data-weight="fill">
            chat_bubble
          </span>
          <div className="pointer-events-none absolute right-20 whitespace-nowrap rounded-lg bg-on-background px-4 py-2 text-sm font-bold uppercase tracking-widest text-surface opacity-0 transition-opacity group-hover:opacity-100">
            Ask a Question
          </div>
          
          <motion.div 
            className="absolute inset-0 rounded-full border-2 border-secondary-container pointer-events-none"
            animate={{ scale: [1, 1.5, 2], opacity: [1, 0, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          />
        </motion.button>
      </div>
    </>
  );
}
