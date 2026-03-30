import SiteFooter from "../../components/layout/SiteFooter";
import TopNav from "../../components/layout/TopNav";

export const metadata = {
  title: "HACK-A-THON | Rules & FAQ"
};

export default function RulesFaqPage() {
  return (
    <>
      <TopNav active="rules" />
      <main className="mx-auto max-w-7xl px-6 pb-20 pt-32">
        <section className="relative mb-20 text-center">
          <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-secondary-container/30 blur-3xl" />
          <div className="absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-primary-container/20 blur-3xl" />
          <h1 className="relative z-10 mb-6 font-headline text-6xl font-black uppercase tracking-tighter text-on-background md:text-8xl">
            The Playbook
          </h1>
          <p className="mx-auto max-w-2xl text-xl font-medium leading-relaxed opacity-80 md:text-2xl">
            Everything you need to know to play fair, win big, and have a blast at the Electric
            Scribble Hackathon.
          </p>
        </section>

        <div className="mb-32 grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="group relative overflow-hidden rounded-lg bg-surface-container p-10 md:col-span-7">
            <div className="absolute right-0 top-0 p-6 opacity-10 transition-transform group-hover:rotate-12">
              <span className="material-symbols-outlined text-9xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                check_circle
              </span>
            </div>
            <h2 className="mb-8 font-headline text-4xl font-black uppercase tracking-tight text-primary">
              The Dos
            </h2>
            <div className="relative z-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="shrink-0 rounded-lg bg-primary p-2 text-on-primary">
                  <span className="material-symbols-outlined">rocket_launch</span>
                </div>
                <div>
                  <h3 className="mb-1 text-xl font-bold">Build Original Stuff</h3>
                  <p className="opacity-70">
                    Start your project during the event. Fresh code is the best code!
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="shrink-0 rounded-lg bg-primary p-2 text-on-primary">
                  <span className="material-symbols-outlined">groups</span>
                </div>
                <div>
                  <h3 className="mb-1 text-xl font-bold">Collaborate Boldly</h3>
                  <p className="opacity-70">
                    Teams of 1-4 are welcome. Mix skills, backgrounds, and crazy ideas.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="shrink-0 rounded-lg bg-primary p-2 text-on-primary">
                  <span className="material-symbols-outlined">auto_awesome</span>
                </div>
                <div>
                  <h3 className="mb-1 text-xl font-bold">Respect the Scribble</h3>
                  <p className="opacity-70">
                    Be kind to fellow creators. We&apos;re all here to learn and build together.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-lg bg-surface-container-high p-10 md:col-span-5">
            <div className="absolute right-0 top-0 p-6 opacity-10 transition-transform group-hover:-rotate-12">
              <span className="material-symbols-outlined text-9xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                cancel
              </span>
            </div>
            <h2 className="mb-8 font-headline text-4xl font-black uppercase tracking-tight text-error">
              The Don&apos;ts
            </h2>
            <ul className="relative z-10 space-y-4">
              <li className="flex items-center gap-3 rounded-xl border-l-4 border-error bg-surface-container-lowest/50 p-4">
                <span className="material-symbols-outlined text-error">history</span>
                <span className="font-bold">No Pre-built Projects</span>
              </li>
              <li className="flex items-center gap-3 rounded-xl border-l-4 border-error bg-surface-container-lowest/50 p-4">
                <span className="material-symbols-outlined text-error">lock</span>
                <span className="font-bold">No Private Repos</span>
              </li>
              <li className="flex items-center gap-3 rounded-xl border-l-4 border-error bg-surface-container-lowest/50 p-4">
                <span className="material-symbols-outlined text-error">mood_bad</span>
                <span className="font-bold">No Harassment/Bullying</span>
              </li>
              <li className="flex items-center gap-3 rounded-xl border-l-4 border-error bg-surface-container-lowest/50 p-4">
                <span className="material-symbols-outlined text-error">copyright</span>
                <span className="font-bold">No Plagiarism</span>
              </li>
            </ul>
          </div>

          <div className="relative flex flex-col items-center justify-between gap-8 overflow-hidden rounded-lg bg-primary p-12 shadow-[0_30px_60px_-15px_rgba(112,42,225,0.4)] md:col-span-12 md:flex-row">
            <div className="md:w-2/3">
              <h2 className="mb-4 font-headline text-5xl font-black uppercase tracking-tighter text-on-primary">
                Win the Golden Pen!
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-on-primary/80">
                Our grand prize isn&apos;t just a trophy; it&apos;s a legacy. Follow the rules, push the
                boundaries of creativity, and your team could be immortalized in our Hall of Fame.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="rounded-full bg-secondary-container px-6 py-2 text-sm font-bold uppercase tracking-widest text-on-secondary-container">
                  🏆 $10,000 Prize Pool
                </span>
                <span className="rounded-full bg-tertiary-container px-6 py-2 text-sm font-bold uppercase tracking-widest text-on-tertiary-container">
                  🎨 Exclusive NFT Badge
                </span>
              </div>
            </div>
            <div className="group relative">
              <div className="flex h-48 w-48 rotate-6 items-center justify-center rounded-full border-4 border-on-tertiary-container bg-tertiary-container shadow-xl transition-transform group-hover:rotate-12">
                <span className="material-symbols-outlined text-8xl text-on-tertiary-container" style={{ fontVariationSettings: "'FILL' 1" }}>
                  emoji_events
                </span>
              </div>
              <div className="absolute -left-4 -top-4 flex h-16 w-16 -rotate-12 items-center justify-center rounded-full border-2 border-on-secondary-container bg-secondary-container">
                <span className="material-symbols-outlined text-on-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
              </div>
            </div>
          </div>
        </div>

        <section className="mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-headline text-5xl font-black uppercase tracking-tight text-on-background">
              Common Head Scratchers
            </h2>
            <p className="text-lg opacity-60">Curious about something? We&apos;ve got answers.</p>
          </div>
          <div className="space-y-12">
            <div className="flex flex-col gap-4">
              <div className="max-w-[80%] self-end rounded-bl-3xl rounded-t-3xl bg-primary-container px-8 py-4 text-on-primary-container shadow-lg">
                <p className="text-xl font-bold">Can I work on an existing project?</p>
              </div>
              <div className="max-w-[80%] self-start rounded-br-3xl rounded-t-3xl border-2 border-primary-container/20 bg-surface-container-lowest px-8 py-4 text-on-surface shadow-sm">
                <p className="leading-relaxed">
                  Nope! We&apos;re all about that fresh energy. You can use libraries and APIs, but the
                  core logic of your hackathon project must be written during the event hours.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="max-w-[80%] self-end rounded-bl-3xl rounded-t-3xl bg-primary-container px-8 py-4 text-on-primary-container shadow-lg">
                <p className="text-xl font-bold">Do I need to be a coding wizard?</p>
              </div>
              <div className="max-w-[80%] self-start rounded-br-3xl rounded-t-3xl border-2 border-primary-container/20 bg-surface-container-lowest px-8 py-4 text-on-surface shadow-sm">
                <p className="leading-relaxed">
                  Absolutely not! We love designers, writers, product thinkers, and idea-generators.
                  A great project is 50% code and 50% pure imagination. You&apos;ll find a team that
                  needs your magic!
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="max-w-[80%] self-end rounded-bl-3xl rounded-t-3xl bg-primary-container px-8 py-4 text-on-primary-container shadow-lg">
                <p className="text-xl font-bold">What&apos;s the submission format?</p>
              </div>
              <div className="max-w-[80%] self-start rounded-br-3xl rounded-t-3xl border-2 border-primary-container/20 bg-surface-container-lowest px-8 py-4 text-on-surface shadow-sm">
                <p className="leading-relaxed">
                  You&apos;ll need a GitHub link and a 2-minute video demo. Make it snappy, make it fun,
                  and show us what makes your creation special.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="max-w-[80%] self-end rounded-bl-3xl rounded-t-3xl bg-primary-container px-8 py-4 text-on-primary-container shadow-lg">
                <p className="text-xl font-bold">Where do we sleep?</p>
              </div>
              <div className="max-w-[80%] self-start rounded-br-3xl rounded-t-3xl border-2 border-primary-container/20 bg-surface-container-lowest px-8 py-4 text-on-surface shadow-sm">
                <p className="leading-relaxed">
                  Sleep? What&apos;s that? Just kidding! We have dedicated &quot;Zen Zones&quot; with
                  beanbags and blankets. But we also encourage you to take breaks and rest properly.
                  A tired brain builds buggy code!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative mt-32 overflow-hidden rounded-xl bg-secondary-container p-16 text-center shadow-[0_40px_80px_-20px_rgba(254,208,27,0.4)]">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/20 blur-2xl" />
          <h2 className="mb-6 font-headline text-5xl font-black uppercase tracking-tighter text-on-secondary-container">
            Still got questions?
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-xl font-medium text-on-secondary-container/80">
            Hop into our Discord and ask our friendly mentors anything!
          </p>
          <div className="flex flex-col justify-center gap-6 md:flex-row">
            <button className="rounded-full bg-on-secondary-container px-12 py-5 font-headline text-lg font-black uppercase tracking-widest text-secondary-container transition-all hover:scale-105 active:translate-y-2">
              Join Discord
            </button>
            <button className="rounded-full border-4 border-on-secondary-container bg-transparent px-12 py-5 font-headline text-lg font-black uppercase tracking-widest text-on-secondary-container transition-all hover:bg-on-secondary-container hover:text-secondary-container">
              Email Support
            </button>
          </div>
        </section>
      </main>

      <SiteFooter brand="HACK-A-THON" />
    </>
  );
}
