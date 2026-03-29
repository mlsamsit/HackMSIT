export default function TimelineSection() {
  const events = [
    {
      number: '01',
      title: 'Registration Starts',
      shortTitle: 'Registration Starts',
      date: 'OCT 15, 2024',
      description: 'Phase one of recruitment begins across all global channels.',
      borderColor: 'border-primary',
      textColor: 'text-primary',
      shadowColor: 'shadow-[0_0_15px_rgba(204,151,255,0.6)]',
      layout: 'left',
    },
    {
      number: '02',
      title: 'Opening Ceremony',
      shortTitle: 'Opening Ceremony',
      date: 'NOV 01, 2024',
      description: 'The ether opens. Keynote speeches from industry titans.',
      borderColor: 'border-secondary',
      textColor: 'text-secondary',
      shadowColor: 'shadow-[0_0_15px_rgba(148,146,255,0.6)]',
      layout: 'right',
    },
    {
      number: '03',
      title: 'Workshop Marathon',
      shortTitle: 'Workshop Marathon',
      date: 'NOV 02, 2024',
      description: 'Intensive sessions on AI, Blockchain, and spatial tools.',
      borderColor: 'border-tertiary',
      textColor: 'text-tertiary',
      shadowColor: 'shadow-[0_0_15px_rgba(140,231,255,0.6)]',
      layout: 'left',
    },
    {
      number: '04',
      title: 'Final Submission',
      shortTitle: 'Final Submission',
      date: 'NOV 03, 2024',
      description: 'Last chance to push your code to the mainnet.',
      borderColor: 'border-error',
      textColor: 'text-error',
      shadowColor: 'shadow-[0_0_15px_rgba(255,110,132,0.6)]',
      layout: 'right',
    },
  ];

  return (
    <section className="py-32 bg-surface-container-low relative" id="timeline">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="label-md uppercase tracking-[0.2em] text-primary mb-4 block">Event Roadmap</span>
          <h2 className="font-headline font-bold text-5xl">Digital Sequence</h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-secondary to-transparent"></div>

          <div className="space-y-24">
            {events.map((event, idx) => (
              <div key={idx} className="relative flex items-center justify-between">
                {event.layout === 'left' ? (
                  <>
                    <div className="w-5/12 text-right hidden md:block">
                      <h4 className="font-headline font-bold text-xl text-white">{event.title}</h4>
                      <p className="text-slate-400">{event.layout === 'left' ? 'Apply to join the void elite.' : 'Digital portal activation.'}</p>
                    </div>
                  </>
                ) : null}

                <div className={`relative z-10 w-12 h-12 flex items-center justify-center rounded-full bg-surface-container border-2 ${event.borderColor} ${event.shadowColor}`}>
                  <span className={`${event.textColor} font-bold`}>{event.number}</span>
                </div>

                <div className={event.layout === 'left' ? 'w-5/12 text-left' : 'w-5/12 text-right'}>
                  <span className={`md:hidden block font-headline font-bold text-xl text-white mb-1 ${event.layout === 'right' ? 'text-right' : ''}`}>
                    {event.shortTitle}
                  </span>
                  <div className={`font-bold mb-2 ${event.textColor}`}>{event.date}</div>
                  <p className={`text-slate-500 text-sm hidden md:block ${event.layout === 'right' ? 'text-right' : ''}`}>{event.description}</p>
                </div>

                {event.layout === 'right' ? (
                  <div className="w-5/12 text-left hidden md:block">
                    <h4 className="font-headline font-bold text-xl text-white">{event.title}</h4>
                    <p className="text-slate-400">
                      {event.number === '02' ? 'Digital portal activation.' : event.number === '04' ? 'The forge cools down.' : 'Deep dives into the tech stack.'}
                    </p>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
