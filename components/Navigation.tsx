export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/40 backdrop-blur-xl dark:bg-[#0e0e10]/40 border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
        <div className="text-2xl font-black tracking-tighter text-purple-400 dark:text-[#cc97ff] drop-shadow-[0_0_8px_rgba(168,85,247,0.5)] font-['Space_Grotesk']">
          NEON ETHER
        </div>
        <div className="hidden md:flex space-x-8 font-['Space_Grotesk'] font-bold tracking-tight uppercase text-sm">
          <a className="text-purple-400 dark:text-[#cc97ff] border-b-2 border-purple-500 shadow-[0_4px_12px_-2px_rgba(168,85,247,0.6)] pb-1 transition-all" href="#home">
            Home
          </a>
          <a className="text-slate-400 hover:text-white transition-colors duration-300" href="#about">
            About
          </a>
          <a className="text-slate-400 hover:text-white transition-colors duration-300" href="#timeline">
            Timeline
          </a>
          <a className="text-slate-400 hover:text-white transition-colors duration-300" href="#events">
            Events
          </a>
          <a className="text-slate-400 hover:text-white transition-colors duration-300" href="#organizers">
            Organizers
          </a>
          <a className="text-slate-400 hover:text-white transition-colors duration-300" href="#community">
            Community
          </a>
          <a className="text-slate-400 hover:text-white transition-colors duration-300" href="#faq">
            FAQ
          </a>
        </div>
        <button className="bg-gradient-to-r from-primary to-secondary text-on-primary font-bold px-6 py-2 rounded shadow-[0_0_15px_rgba(204,151,255,0.4)] hover:scale-105 active:scale-95 transition-all text-sm uppercase tracking-wider">
          REGISTER NOW
        </button>
      </div>
    </nav>
  );
}
