export default function AboutSection() {
  const tracks = [
    {
      icon: 'hive',
      title: 'Decentralized Void',
      description: 'Build the protocols that govern the ether. Peer-to-peer systems and trustless execution.',
      color: 'text-primary',
      borderColor: 'hover:border-primary/50',
    },
    {
      icon: 'memory',
      title: 'Neural Synthesis',
      description: 'AI-driven interfaces that adapt in real-time to user intent and environmental data.',
      color: 'text-tertiary',
      borderColor: 'hover:border-tertiary/50',
      mt: 'mt-8',
    },
    {
      icon: 'deployed_code',
      title: 'Extended Reality',
      description: 'Immersive spatial computing that blurs the line between the physical and the ether.',
      color: 'text-secondary',
      borderColor: 'hover:border-secondary/50',
    },
    {
      icon: 'security',
      title: 'Void Security',
      description: 'Protecting digital identity in an increasingly fractured and complex online universe.',
      color: 'text-error',
      borderColor: 'hover:border-error/50',
      mt: 'mt-8',
    },
  ];

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="font-headline font-bold text-4xl md:text-5xl mb-8 leading-tight">
            Transcend the <span className="text-tertiary">Standard</span> Build
          </h2>
          <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg">
            <p>
              Neon Ether is not just another hackathon. It's a high-pressure digital forge designed to test the limits of what's possible
              when the constraints of physical reality are stripped away.
            </p>
            <p>Our focus is on three core pillars of the future digital landscape. We provide the tools, the mentorship, and the atmosphere—you provide the vision.</p>
          </div>
          <div className="mt-12 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
              <span className="material-symbols-outlined text-primary" data-icon="rocket_launch">
                rocket_launch
              </span>
            </div>
            <div>
              <div className="font-bold text-white">72 Hours of Code</div>
              <div className="text-sm text-slate-500">Intense, focused, collaborative.</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tracks.map((track, idx) => (
            <div
              key={idx}
              className={`glass-card p-8 rounded-xl border-t border-l border-white/10 ${track.borderColor} transition-all group ${track.mt || ''}`}
            >
              <div className={`mb-6 ${track.color} group-hover:scale-110 transition-transform inline-block`}>
                <span className="material-symbols-outlined text-4xl" data-icon={track.icon}>
                  {track.icon}
                </span>
              </div>
              <h3 className="font-headline font-bold text-xl mb-4">{track.title}</h3>
              <p className="text-sm text-on-surface-variant">{track.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
