export default function Footer() {
  return (
    <footer className="bg-[#0e0e10] w-full py-12 border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
        {/* Brand Section */}
        <div className="space-y-6">
          <div className="font-['Space_Grotesk'] font-bold text-xl text-white">NEON ETHER</div>
          <p className="font-['Inter'] text-sm tracking-wide text-slate-400 max-w-xs">
            Building the foundation for the next iteration of the digital void. Engineered for the pioneers.
          </p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-slate-500 hover:text-purple-300 transition-transform duration-300 cursor-pointer" data-icon="public">
              public
            </span>
            <span className="material-symbols-outlined text-slate-500 hover:text-purple-300 transition-transform duration-300 cursor-pointer" data-icon="alternate_email">
              alternate_email
            </span>
            <span className="material-symbols-outlined text-slate-500 hover:text-purple-300 transition-transform duration-300 cursor-pointer" data-icon="code">
              code
            </span>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h5 className="text-white font-headline font-bold mb-6 text-sm uppercase tracking-widest">Resources</h5>
            <ul className="space-y-3 font-['Inter'] text-sm tracking-wide text-slate-400">
              <li>
                <a className="text-slate-500 hover:text-purple-300 transition-colors" href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="text-slate-500 hover:text-purple-300 transition-colors" href="#">
                  Terms of Service
                </a>
              </li>
              <li>
                <a className="text-slate-500 hover:text-purple-300 transition-colors" href="#">
                  Code of Conduct
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-headline font-bold mb-6 text-sm uppercase tracking-widest">Navigate</h5>
            <ul className="space-y-3 font-['Inter'] text-sm tracking-wide text-slate-400">
              <li>
                <a className="text-slate-500 hover:text-purple-300 transition-colors" href="#about">
                  About Us
                </a>
              </li>
              <li>
                <a className="text-slate-500 hover:text-purple-300 transition-colors" href="#events">
                  Timeline
                </a>
              </li>
              <li>
                <a className="text-slate-500 hover:text-purple-300 transition-colors" href="#community">
                  Community
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="space-y-6">
          <h5 className="text-white font-headline font-bold mb-6 text-sm uppercase tracking-widest">Stay Updated</h5>
          <div className="relative">
            <input
              className="w-full bg-surface-container-highest border-none rounded-lg p-4 text-sm text-white focus:ring-2 focus:ring-purple-500/50 transition-all placeholder-slate-500"
              placeholder="Enter your email"
              type="email"
            />
            <button className="absolute right-2 top-2 bottom-2 bg-primary px-4 rounded-md text-on-primary-fixed font-bold text-xs uppercase transition-transform active:scale-95">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="font-['Inter'] text-sm tracking-wide text-slate-400">© 2024 NEON ETHER HACKATHON. ENGINEERED FOR THE VOID.</div>
        <div className="flex items-center gap-2 text-xs text-slate-600 font-bold uppercase tracking-tighter">
          <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
          SYSTEMS OPERATIONAL
        </div>
      </div>
    </footer>
  );
}
