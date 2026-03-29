export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 hero-gradient"
      id="home"
    >
      <div className="absolute inset-0 z-0 opacity-20 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10 text-center max-w-5xl px-6">
        <span className="label-md uppercase tracking-[0.3em] text-tertiary mb-6 block font-headline font-medium">
          Global Digital Convergence 2024
        </span>
        <h1 className="font-headline font-bold text-6xl md:text-8xl lg:text-9xl tracking-tight leading-none mb-8 bg-gradient-to-b from-white via-primary to-primary-dim bg-clip-text text-transparent glow-text">
          NEON ETHER
        </h1>
        <p className="body-lg text-on-surface-variant max-w-2xl mx-auto mb-12 leading-relaxed">
          Enter the void. Transcend reality. Join 5,000+ developers, designers, and visionaries in a 72-hour deep-space hackathon to
          build the next iteration of the digital ether.
        </p>

        {/* Countdown */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-3xl mx-auto">
          {[
            { value: '04', label: 'Days' },
            { value: '12', label: 'Hours' },
            { value: '45', label: 'Mins' },
            { value: '09', label: 'Secs' },
          ].map((item, idx) => (
            <div key={idx} className="glass-card p-6 rounded-lg border border-white/5 shadow-xl">
              <div className="text-4xl md:text-5xl font-headline font-bold text-white mb-1">{item.value}</div>
              <div className="text-xs uppercase tracking-widest text-primary font-bold">{item.label}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <button className="w-full md:w-auto px-10 py-5 bg-gradient-to-r from-primary to-secondary rounded-lg font-headline font-bold text-xl text-on-primary-fixed shadow-[0_0_30px_rgba(204,151,255,0.3)] hover:shadow-[0_0_50px_rgba(204,151,255,0.5)] transition-all">
            Register Now
          </button>
          <button className="w-full md:w-auto px-10 py-5 glass-card border border-white/10 rounded-lg font-headline font-bold text-xl text-white hover:bg-white/10 transition-all">
            View Guide
          </button>
        </div>
      </div>
    </section>
  );
}
