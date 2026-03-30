import SiteFooter from "../../components/layout/SiteFooter";
import TopNav from "../../components/layout/TopNav";

export const metadata = {
  title: "HACK-A-THON | Schedule"
};

export default function SchedulePage() {
  return (
    <>
      <TopNav active="schedule" />
      <main className="mx-auto max-w-5xl px-6 pb-20 pt-32">
        <header className="mb-24 text-center">
          <span className="mb-6 inline-block -rotate-2 rounded-full bg-secondary-container px-4 py-2 font-headline text-sm font-black uppercase tracking-widest text-on-secondary-container">
            48 Hours of Chaos
          </span>
          <h1 className="mb-6 font-headline text-6xl font-black uppercase leading-none tracking-tighter text-on-background md:text-8xl">
            The Master <br /> <span className="italic text-primary">Timeline</span>
          </h1>
          <p className="mx-auto max-w-2xl text-xl leading-relaxed text-on-surface-variant">
            Buckle up, creators. From the first spark of an idea to the final demo showdown,
            here&apos;s everything happening on the floor.
          </p>
        </header>

        <div className="relative">
          <div className="absolute left-1/2 hidden h-full w-4 -translate-x-1/2 transform rounded-full bg-surface-container-highest md:block" />
          <div className="relative space-y-24">
            <div className="group flex flex-col items-center justify-between gap-12 md:flex-row">
              <div className="hidden w-full text-right md:block md:w-5/12">
                <span className="font-headline text-4xl font-black text-primary-dim">09:00 AM</span>
                <p className="mt-2 font-bold uppercase tracking-widest text-on-surface-variant">Day 01 • Main Stage</p>
              </div>
              <div className="relative z-10">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border-8 border-surface bg-primary-container shadow-xl transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                  <span className="material-symbols-outlined text-4xl text-on-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>
                    celebration
                  </span>
                </div>
              </div>
              <div className="w-full md:w-5/12">
                <div className="rounded-lg border-b-8 border-primary-container bg-surface-container-low p-8 shadow-sm transition-transform duration-300 group-hover:-translate-y-2">
                  <span className="mb-2 block font-headline text-2xl font-black text-primary-dim md:hidden">09:00 AM</span>
                  <h3 className="mb-3 font-headline text-3xl font-black uppercase text-on-background">Opening Ceremony</h3>
                  <p className="leading-relaxed text-on-surface-variant">
                    The curtain rises! Meet your mentors, hear the secret challenge tracks, and
                    feel the energy of 500 creators ready to build.
                  </p>
                </div>
              </div>
            </div>

            <div className="group flex flex-col items-center justify-between gap-12 md:flex-row-reverse">
              <div className="hidden w-full text-left md:block md:w-5/12">
                <span className="font-headline text-4xl font-black text-secondary-dim">11:00 AM</span>
                <p className="mt-2 font-bold uppercase tracking-widest text-on-surface-variant">Day 01 • The Arena</p>
              </div>
              <div className="relative z-10">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border-8 border-surface bg-secondary-container shadow-xl transition-all duration-300 group-hover:-rotate-12 group-hover:scale-110">
                  <span className="material-symbols-outlined text-4xl text-on-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>
                    rocket_launch
                  </span>
                </div>
              </div>
              <div className="w-full md:w-5/12">
                <div className="rounded-lg border-b-8 border-secondary-container bg-surface-container-low p-8 shadow-sm transition-transform duration-300 group-hover:-translate-y-2">
                  <span className="mb-2 block font-headline text-2xl font-black text-secondary-dim md:hidden">11:00 AM</span>
                  <h3 className="mb-3 font-headline text-3xl font-black uppercase text-on-background">Hacking Begins</h3>
                  <p className="leading-relaxed text-on-surface-variant">
                    Open those laptops and let the terminal glow. The timer is officially ticking.
                    Team up or go solo, just build something epic.
                  </p>
                </div>
              </div>
            </div>

            <div className="group flex flex-col items-center justify-between gap-12 md:flex-row">
              <div className="hidden w-full text-right md:block md:w-5/12">
                <span className="font-headline text-4xl font-black text-tertiary-dim">01:30 PM</span>
                <p className="mt-2 font-bold uppercase tracking-widest text-on-surface-variant">Day 01 • Food Court</p>
              </div>
              <div className="relative z-10">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border-8 border-surface bg-tertiary-container shadow-xl transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                  <span className="material-symbols-outlined text-4xl text-on-tertiary-container" style={{ fontVariationSettings: "'FILL' 1" }}>
                    lunch_dining
                  </span>
                </div>
              </div>
              <div className="w-full md:w-5/12">
                <div className="rounded-lg border-b-8 border-tertiary-container bg-surface-container-low p-8 shadow-sm transition-transform duration-300 group-hover:-translate-y-2">
                  <span className="mb-2 block font-headline text-2xl font-black text-tertiary-dim md:hidden">01:30 PM</span>
                  <h3 className="mb-3 font-headline text-3xl font-black uppercase text-on-background">Pixel Fuel Lunch</h3>
                  <p className="leading-relaxed text-on-surface-variant">
                    Recharge with custom-crafted bento boxes and unlimited caffeine. Don&apos;t forget
                    to network while you chew!
                  </p>
                </div>
              </div>
            </div>

            <div className="group flex flex-col items-center justify-between gap-12 md:flex-row-reverse">
              <div className="hidden w-full text-left md:block md:w-5/12">
                <span className="font-headline text-4xl font-black text-error-dim">08:00 PM</span>
                <p className="mt-2 font-bold uppercase tracking-widest text-on-surface-variant">Day 02 • Final Stage</p>
              </div>
              <div className="relative z-10">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border-8 border-surface bg-error-container shadow-xl transition-all duration-300 group-hover:-rotate-12 group-hover:scale-110">
                  <span className="material-symbols-outlined text-4xl text-on-error-container" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                </div>
              </div>
              <div className="w-full md:w-5/12">
                <div className="rounded-lg border-b-8 border-error-container bg-surface-container-low p-8 shadow-sm transition-transform duration-300 group-hover:-translate-y-2">
                  <span className="mb-2 block font-headline text-2xl font-black text-error-dim md:hidden">08:00 PM</span>
                  <h3 className="mb-3 font-headline text-3xl font-black uppercase text-on-background">Grand Demo Night</h3>
                  <p className="leading-relaxed text-on-surface-variant">
                    It&apos;s showtime. 3 minutes on stage to wow the judges and the world. Prizes,
                    glory, and pure creative satisfaction await.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-40">
          <h2 className="mb-12 flex items-center gap-4 font-headline text-4xl font-black uppercase">
            <span className="h-2 w-12 rounded-full bg-primary" />
            Breakout Sessions
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="group relative overflow-hidden rounded-lg bg-primary p-10 text-on-primary md:col-span-2">
              <div className="relative z-10">
                <span className="mb-4 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-black uppercase">
                  Flash Talk
                </span>
                <h4 className="mb-4 font-headline text-4xl font-black uppercase">
                  Mastering the <br /> Shader Language
                </h4>
                <p className="mb-8 max-w-sm opacity-80">
                  Join our lead engineer for a deep dive into GPU-accelerated visuals and real-time
                  rendering magic.
                </p>
                <div className="flex items-center gap-4">
                  <img
                    alt="Alex Chen"
                    className="h-12 w-12 rounded-full border-2 border-white/30 object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvRodwwP3OtPB7cZj_HQoPB_KEZNMTax988My3V-c82gBwugdq3k3wyZGQQmsLAsWVg0zcWV7rKZSVyPHq6hIAr4IxYT0-OSMCZ933yrsIjx_RCPM4CBM2xsuKnrRoeiuEWURR_h6zgAxc0ZLBcZoe1IBW2yUPsHjhC8htouPgiSRn2-DCAfWmKW60hDlGrS6Q9rspkUoyzo7cSNQQ2aYp8sSxYSA8vVFDFuPFhGAGavZp5geapb4Skpm_RZpFTJ50HO9oNVurPuYc"
                  />
                  <span className="font-bold">Alex Chen, Lead Dev</span>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 opacity-20 transition-transform group-hover:scale-110">
                <span className="material-symbols-outlined text-[12rem]">brush</span>
              </div>
            </div>

            <div className="group flex flex-col justify-between rounded-lg bg-secondary-container p-10 text-on-secondary-container">
              <div>
                <span className="mb-4 inline-block rounded-full bg-black/10 px-3 py-1 text-xs font-black uppercase">
                  Workshop
                </span>
                <h4 className="mb-2 font-headline text-2xl font-black uppercase">
                  Pitching to <br /> Investors
                </h4>
              </div>
              <div className="mt-8">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/30 transition-transform group-hover:rotate-12">
                  <span className="material-symbols-outlined text-3xl">trending_up</span>
                </div>
                <p className="text-sm font-bold opacity-70">Room 302 • 04:00 PM</p>
              </div>
            </div>

            <div className="group flex flex-col justify-between rounded-lg bg-tertiary-container p-10 text-on-tertiary-container">
              <div>
                <span className="mb-4 inline-block rounded-full bg-black/10 px-3 py-1 text-xs font-black uppercase">
                  Networking
                </span>
                <h4 className="mb-2 font-headline text-2xl font-black uppercase">
                  The Creator <br /> Mixer
                </h4>
              </div>
              <div className="mt-8">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/30 transition-transform group-hover:rotate-12">
                  <span className="material-symbols-outlined text-3xl">groups</span>
                </div>
                <p className="text-sm font-bold opacity-70">Lounge Area • 06:00 PM</p>
              </div>
            </div>

            <div className="group rounded-lg bg-surface-container-highest p-10 md:col-span-2">
              <div className="flex flex-col items-center gap-10 md:flex-row">
                <div className="flex-1">
                  <h4 className="mb-4 font-headline text-3xl font-black uppercase text-on-background">
                    Midnight <br /> Gaming Hour
                  </h4>
                  <p className="mb-6 text-on-surface-variant">
                    Drop the code and pick up a controller. Super Smash Bros tournament in the Chill
                    Zone.
                  </p>
                  <button className="rounded-full bg-on-background px-6 py-3 font-headline text-sm font-black uppercase tracking-widest text-surface transition-all hover:scale-105">
                    Sign Up Squad
                  </button>
                </div>
                <div className="h-48 w-full rotate-3 overflow-hidden rounded-lg bg-gradient-to-tr from-primary to-secondary-container shadow-xl transition-transform group-hover:rotate-0 md:w-48">
                  <img
                    alt="Gaming setup"
                    className="h-full w-full object-cover opacity-60 mix-blend-overlay"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4YqLOYDc4vSb5vd3C-_l-BVGXMjSsNiHLFA2QAuL0PT0ksUYw_tEsMQlCQ7mwW0dtR-C3edZnp0A6etWro1KY9Altj0VqCOhmMLvKo9Vpav4jw5_WNeuz2w-6dneKEDNo5ooSxATFLoOuiWYLo9T0RHUcEAwYUYqkQEq5wisO5jIyuDqdNiPZjscyn1geIKbJ9QJkcYjcw5XRLdsubDLnu81JxrI43YFtbfxgiY5lTYeoK6nGiJZXHUZj3niNZz8_FFOHBzh94cmC"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter brand="HACK-A-THON" />

      <div className="fixed bottom-8 right-8 z-50">
        <button className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary-container text-on-secondary-container shadow-2xl transition-all hover:scale-110 active:scale-95">
          <span className="material-symbols-outlined text-3xl">calendar_today</span>
        </button>
      </div>
    </>
  );
}
