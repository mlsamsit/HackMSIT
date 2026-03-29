// components/Timeline.tsx

interface TimelineEvent {
  id: string;
  title: string;
  date: string;
  leftDesc: string;
  rightDesc: string;
  borderColor: string;
  shadowColor: string;
  textColor: string;
  side: "left" | "right";
}

const timelineEvents: TimelineEvent[] = [
  {
    id: "01",
    title: "Registration Starts",
    date: "OCT 15, 2024",
    leftDesc: "Apply to join the void elite.",
    rightDesc: "Phase one of recruitment begins across all global channels.",
    borderColor: "border-primary",
    shadowColor: "shadow-[0_0_15px_rgba(204,151,255,0.6)]",
    textColor: "text-primary",
    side: "right",
  },
  {
    id: "02",
    title: "Opening Ceremony",
    date: "NOV 01, 2024",
    leftDesc: "The ether opens. Keynote speeches from industry titans.",
    rightDesc: "Digital portal activation.",
    borderColor: "border-secondary",
    shadowColor: "shadow-[0_0_15px_rgba(148,146,255,0.6)]",
    textColor: "text-secondary",
    side: "left",
  },
  {
    id: "03",
    title: "Workshop Marathon",
    date: "NOV 02, 2024",
    leftDesc: "Deep dives into the tech stack.",
    rightDesc: "Intensive sessions on AI, Blockchain, and spatial tools.",
    borderColor: "border-tertiary",
    shadowColor: "shadow-[0_0_15px_rgba(140,231,255,0.6)]",
    textColor: "text-tertiary",
    side: "right",
  },
  {
    id: "04",
    title: "Final Submission",
    date: "NOV 03, 2024",
    leftDesc: "Last chance to push your code to the mainnet.",
    rightDesc: "The forge cools down.",
    borderColor: "border-error",
    shadowColor: "shadow-[0_0_15px_rgba(255,110,132,0.6)]",
    textColor: "text-error",
    side: "left",
  },
];

export default function Timeline(): React.JSX.Element {
  return (
    <section
      className="py-32 bg-surface-container-low relative"
      id="timeline"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="label-md uppercase tracking-[0.2em] text-primary mb-4 block">
            Event Roadmap
          </span>
          <h2 className="font-headline font-bold text-5xl">Digital Sequence</h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-secondary to-transparent" />

          <div className="space-y-24">
            {timelineEvents.map((event: TimelineEvent) => (
              <div
                key={event.id}
                className="relative flex items-center justify-between"
              >
                {/* Left Column */}
                <div className="w-5/12 text-right">
                  {event.side === "right" ? (
                    <div className="hidden md:block">
                      <h4 className="font-headline font-bold text-xl text-white">
                        {event.title}
                      </h4>
                      <p className="text-slate-400">{event.leftDesc}</p>
                    </div>
                  ) : (
                    <>
                      <span className="md:hidden block font-headline font-bold text-xl text-white mb-1">
                        {event.title}
                      </span>
                      <div className="text-tertiary font-bold mb-2">
                        {event.date}
                      </div>
                      <p className="text-slate-500 text-sm hidden md:block">
                        {event.leftDesc}
                      </p>
                    </>
                  )}
                </div>

                {/* Center Node */}
                <div
                  className={`relative z-10 w-12 h-12 flex items-center justify-center rounded-full bg-surface-container border-2 ${event.borderColor} ${event.shadowColor}`}
                >
                  <span className={`${event.textColor} font-bold`}>
                    {event.id}
                  </span>
                </div>

                {/* Right Column */}
                <div className="w-5/12 text-left">
                  {event.side === "right" ? (
                    <>
                      <span className="md:hidden block font-headline font-bold text-xl text-white mb-1">
                        {event.title}
                      </span>
                      <div className="text-tertiary font-bold mb-2">
                        {event.date}
                      </div>
                      <p className="text-slate-500 text-sm hidden md:block">
                        {event.rightDesc}
                      </p>
                    </>
                  ) : (
                    <div className="hidden md:block">
                      <h4 className="font-headline font-bold text-xl text-white">
                        {event.title}
                      </h4>
                      <p className="text-slate-400">{event.rightDesc}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}