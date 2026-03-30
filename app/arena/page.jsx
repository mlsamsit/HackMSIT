import SiteFooter from "../../components/layout/SiteFooter";
import TopNav from "../../components/layout/TopNav";

export const metadata = {
  title: "HACK-A-THON | Electric Scribble"
};

export default function ArenaPage() {
  return (
    <>
      <TopNav active="arena" />
      <main className="pt-32">
        <section className="relative mx-auto max-w-7xl overflow-hidden px-6 py-20">
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="mb-6 inline-block -rotate-2 rounded-full border-2 border-on-background bg-secondary-container px-6 py-2 font-bold uppercase tracking-widest text-on-secondary-container">
              48 Hours of Pure Creation
            </div>
            <h1 className="mb-8 font-headline text-7xl font-black leading-none tracking-tighter text-on-background md:text-9xl">
              HACK<span className="text-primary">-</span>A<span className="text-primary">-</span>THON
            </h1>
            <p className="mb-12 max-w-2xl text-xl font-medium text-on-surface-variant md:text-2xl">
              Where neon dreams meet rapid code. Join 500+ creators for the ultimate weekend of
              building, breaking, and brand new ideas.
            </p>
            <div className="flex flex-col gap-6 sm:flex-row">
              <button className="rounded-xl bg-primary px-12 py-6 text-xl font-black uppercase tracking-widest text-on-primary shadow-[0_10px_0px_#390083] transition-all hover:scale-105 active:translate-y-1">
                Claim Your Spot
              </button>
              <button className="rounded-xl border-4 border-on-background bg-surface-container-lowest px-12 py-6 text-xl font-black uppercase tracking-widest text-on-background shadow-[0_10px_0px_#3a264b] transition-all hover:scale-105 active:translate-y-1">
                View Tracks
              </button>
            </div>
          </div>

          <div className="absolute left-10 top-20 -rotate-12 opacity-20 transition-transform duration-500 hover:rotate-0 md:opacity-100">
            <div className="flex h-32 w-32 items-center justify-center rounded-lg bg-secondary-container p-4 shadow-xl">
              <span className="material-symbols-outlined text-6xl text-on-secondary-container" data-weight="fill">
                lightbulb
              </span>
            </div>
          </div>
          <div className="absolute bottom-20 right-10 rotate-12 opacity-20 transition-transform duration-500 hover:rotate-0 md:opacity-100">
            <div className="flex h-40 w-40 items-center justify-center rounded-full border-4 border-on-background bg-tertiary-container p-4 shadow-xl">
              <span className="material-symbols-outlined text-7xl text-on-tertiary-container" data-weight="fill">
                edit
              </span>
            </div>
          </div>
          <div className="absolute right-20 top-40 hidden rotate-6 opacity-20 lg:block md:opacity-100">
            <div className="h-32 w-48 rounded-xl border-4 border-primary bg-surface-container-highest p-4 shadow-2xl">
              <div className="mb-2 flex gap-1">
                <div className="h-3 w-3 rounded-full bg-error" />
                <div className="h-3 w-3 rounded-full bg-secondary-fixed-dim" />
                <div className="h-3 w-3 rounded-full bg-tertiary" />
              </div>
              <div className="mb-2 h-2 w-3/4 rounded bg-primary-container" />
              <div className="h-2 w-1/2 rounded bg-primary-container" />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="mb-12 font-headline text-5xl font-black uppercase tracking-tight text-on-background">
            Choose Your Track
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
            <div className="group relative min-h-[400px] overflow-hidden rounded-lg bg-primary-container p-10 md:col-span-8">
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
              <div className="absolute -bottom-10 -right-10 opacity-20 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                <span className="material-symbols-outlined text-[300px] text-on-primary-container" data-weight="fill">
                  memory
                </span>
              </div>
            </div>

            <div className="group relative flex flex-col overflow-hidden rounded-lg bg-secondary-container p-10 md:col-span-4">
              <span className="material-symbols-outlined mb-6 text-5xl text-on-secondary-container" data-weight="fill">
                sports_esports
              </span>
              <h3 className="mb-4 text-4xl font-black uppercase leading-none text-on-secondary-container">
                Infinite Worlds
              </h3>
              <p className="font-bold text-on-secondary-container opacity-80">
                Build the next viral indie hit or immersive VR experience.
              </p>
              <div className="mt-auto pt-8">
                <span className="text-6xl font-black text-on-secondary-container opacity-10">02</span>
              </div>
            </div>

            <div className="group relative flex flex-col overflow-hidden rounded-lg bg-tertiary-container p-10 md:col-span-4">
              <span className="material-symbols-outlined mb-6 text-5xl text-on-tertiary-container" data-weight="fill">
                token
              </span>
              <h3 className="mb-4 text-4xl font-black uppercase leading-none text-on-tertiary-container">
                De-Fi Chaos
              </h3>
              <p className="font-bold text-on-tertiary-container opacity-80">
                Protocol layer innovations and decentralized social graphs.
              </p>
              <div className="mt-auto pt-8">
                <span className="text-6xl font-black text-on-tertiary-container opacity-10">03</span>
              </div>
            </div>

            <div className="group relative flex items-center gap-12 overflow-hidden rounded-lg border-4 border-on-background bg-surface-container-highest p-10 md:col-span-8">
              <div className="flex-1">
                <h3 className="mb-4 text-4xl font-black uppercase text-on-background">The Open Canvas</h3>
                <p className="text-lg font-medium text-on-surface-variant">
                  Don&apos;t fit the mold? Build anything that makes the world a bit more electric. No
                  rules, just vibes.
                </p>
              </div>
              <div className="hidden sm:block">
                <div className="flex h-32 w-32 rotate-12 items-center justify-center rounded-xl bg-on-background">
                  <span className="material-symbols-outlined text-6xl text-surface" data-weight="fill">
                    rocket_launch
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="my-20 bg-on-background py-24 text-surface">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-12 px-6 md:grid-cols-4">
            <div className="group text-center">
              <div className="mb-2 text-6xl font-black text-secondary-container transition-transform group-hover:scale-110 md:text-8xl">
                $50k
              </div>
              <div className="font-headline font-bold uppercase tracking-widest text-surface-container">
                Cash Prizes
              </div>
            </div>
            <div className="group text-center">
              <div className="mb-2 text-6xl font-black text-primary-container transition-transform group-hover:scale-110 md:text-8xl">
                48h
              </div>
              <div className="font-headline font-bold uppercase tracking-widest text-surface-container">
                Of Hacking
              </div>
            </div>
            <div className="group text-center">
              <div className="mb-2 text-6xl font-black text-tertiary-container transition-transform group-hover:scale-110 md:text-8xl">
                1.2k
              </div>
              <div className="font-headline font-bold uppercase tracking-widest text-surface-container">
                Lines of Caffeine
              </div>
            </div>
            <div className="group text-center">
              <div className="mb-2 text-6xl font-black text-error-container transition-transform group-hover:scale-110 md:text-8xl">
                ∞
              </div>
              <div className="font-headline font-bold uppercase tracking-widest text-surface-container">
                Cool Sticker Ops
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="flex flex-col items-center gap-16 md:flex-row">
            <div className="flex-1">
              <h2 className="mb-6 font-headline text-6xl font-black uppercase leading-none tracking-tight text-on-background">
                Step Into The Arena
              </h2>
              <p className="mb-8 text-xl leading-relaxed text-on-surface-variant">
                Our venue isn&apos;t just a hall; it&apos;s a living, breathing creator hub. From the
                &quot;Focus Pit&quot; for deep work to the &quot;Lounge Deck&quot; for 3 AM karaoke
                sessions, find your perfect zone.
              </p>
              <ul className="mb-10 space-y-4">
                <li className="flex items-center gap-4 text-lg font-bold">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-on-background bg-secondary-container">
                    <span className="material-symbols-outlined text-sm font-black" data-weight="fill">
                      check
                    </span>
                  </span>
                  Gigabit Fiber for everyone
                </li>
                <li className="flex items-center gap-4 text-lg font-bold">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-on-background bg-primary-container">
                    <span className="material-symbols-outlined text-sm font-black" data-weight="fill">
                      check
                    </span>
                  </span>
                  Gourmet energy bars and tacos
                </li>
                <li className="flex items-center gap-4 text-lg font-bold">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-on-background bg-tertiary-container">
                    <span className="material-symbols-outlined text-sm font-black" data-weight="fill">
                      check
                    </span>
                  </span>
                  Sleep pods &amp; sensory rooms
                </li>
              </ul>
            </div>

            <div className="relative flex-1">
              <div className="aspect-square w-full rotate-2 overflow-hidden rounded-[3rem] border-8 border-on-background bg-surface-container-high shadow-2xl">
                <img
                  alt="Modern tech workspace"
                  className="h-full w-full object-cover grayscale opacity-80 mix-blend-multiply"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC82BCUwe6lBJEhdngdtXXiL171gjQ7ArRD-zuGtGdxpaItJQYUPwSD3taSd1Mb_N30hPaufTggCXUdtX5wjyG3_7T_jzmq2JcYpJinVro0sJts9H1tmOJq-bhUj4cKgymhsAlnIe33sfGSbJovjRZ47uCBp6rUEuff6ngmCztEWUePDWdTICCgbw8DPWqvxPqgENg6NvGSbkGjqbM6yh9givxH4iTjaxTwvZ_tfONioNFIHKbyE3Pgse8K5P6_zvtrtd0EY5n209gm"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-primary/20">
                  <div className="-rotate-6 rounded-2xl border-4 border-on-background bg-surface p-6 shadow-xl">
                    <span className="text-3xl font-black uppercase text-on-background">Arena Zone A</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 flex h-32 w-32 rotate-12 items-center justify-center rounded-full border-4 border-on-background bg-secondary-container shadow-lg">
                <span className="text-center text-xl font-black uppercase leading-none text-on-background">
                  JOIN
                  <br />
                  US
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />

      <div className="fixed bottom-8 right-8 z-50">
        <button className="group flex h-16 w-16 items-center justify-center rounded-full border-4 border-on-background bg-secondary-container text-on-secondary-container shadow-2xl transition-transform hover:scale-110 active:scale-95">
          <span className="material-symbols-outlined text-3xl font-black" data-weight="fill">
            chat_bubble
          </span>
          <div className="pointer-events-none absolute right-20 whitespace-nowrap rounded-lg bg-on-background px-4 py-2 text-sm font-bold uppercase tracking-widest text-surface opacity-0 transition-opacity group-hover:opacity-100">
            Ask a Question
          </div>
        </button>
      </div>
    </>
  );
}
