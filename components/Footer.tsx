export default function Footer() {
  return (
    <footer className="w-full py-12 border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
        {/* Brand Section */}
        <div className="space-y-6">
          <div className="font-['Space_Grotesk'] font-bold text-2xl text-white uppercase tracking-widest">HACKMSIT</div>
          <p className="font-['Inter'] text-sm tracking-wide text-slate-400 max-w-xs">
            Building the foundation for the next iteration of the digital landscape. Engineered for pioneers and visionaries.
          </p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-slate-500 hover:text-white transition-colors duration-300 cursor-pointer" data-icon="public">
              public
            </span>
            <span className="material-symbols-outlined text-slate-500 hover:text-white transition-colors duration-300 cursor-pointer" data-icon="alternate_email">
              alternate_email
            </span>
            <span className="material-symbols-outlined text-slate-500 hover:text-white transition-colors duration-300 cursor-pointer" data-icon="code">
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
                <a className="text-slate-500 hover:text-white transition-colors" href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="text-slate-500 hover:text-white transition-colors" href="#">
                  Terms of Service
                </a>
              </li>
              <li>
                <a className="text-slate-500 hover:text-white transition-colors" href="#">
                  Code of Conduct
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-headline font-bold mb-6 text-sm uppercase tracking-widest">Navigate</h5>
            <ul className="space-y-3 font-['Inter'] text-sm tracking-wide text-slate-400">
              <li>
                <a className="text-slate-500 hover:text-white transition-colors" href="#about">
                  About Us
                </a>
              </li>
              <li>
                <a className="text-slate-500 hover:text-white transition-colors" href="#events">
                  Timeline
                </a>
              </li>
              <li>
                <a className="text-slate-500 hover:text-white transition-colors" href="#community">
                  Community
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="space-y-6">
          <h5 className="text-white font-headline font-bold mb-6 text-sm uppercase tracking-widest">Drop a Line</h5>
          <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
            <input
              className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder-slate-500"
              placeholder="Your Name"
              type="text"
            />
            <input
              className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder-slate-500"
              placeholder="Your Email"
              type="email"
            />
            <textarea 
              className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder-slate-500 resize-none h-24"
              placeholder="Your Message"
            ></textarea>
            <button className="w-full bg-primary hover:bg-primary-dim py-3 rounded-lg text-on-primary-fixed font-bold text-xs uppercase tracking-widest transition-all hover:scale-[1.02] active:scale-95">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="font-['Inter'] text-sm tracking-wide text-slate-400">© 2024 HACKMSIT. ALL RIGHTS RESERVED.</div>
        <div className="flex items-center gap-2 text-xs text-slate-500 font-bold uppercase tracking-widest">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(204,151,255,1)]"></span>
          SYSTEMS ONLINE
        </div>
      </div>
    </footer>
  );
}

