import SiteFooter from "../../components/layout/SiteFooter";
import TopNav from "../../components/layout/TopNav";

export const metadata = {
  title: "HackMSIT | Tracks"
};

export default function TracksPage() {
  return (
    <>
      <TopNav active="tracks" />
      <main className="mx-auto max-w-7xl overflow-x-hidden px-6 pb-20 pt-32">
        <header className="relative mb-24 text-center">
          <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-secondary-container/30 blur-3xl" />
          <div className="absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-tertiary-container/20 blur-3xl" />
          <h1 className="mb-6 font-headline text-6xl font-black leading-none tracking-tighter text-on-background md:text-8xl">
            PICK YOUR <span className="italic text-primary">VIBE</span>
          </h1>
          <p className="mx-auto max-w-2xl text-xl font-medium leading-relaxed text-on-surface-variant">
            Choose a track that matches your energy. Whether you&apos;re here to save the world or
            just break things, we&apos;ve got a spot for you.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="group relative flex flex-col items-center rounded-xl bg-surface-container-lowest p-8 text-center shadow-[0_20px_40px_rgba(58,38,75,0.08)] transition-all duration-300 hover:scale-105">
            <div className="absolute -top-6 rotate-[-5deg] rounded-full border-4 border-white bg-primary-container p-6 text-on-primary-container shadow-lg transition-transform group-hover:rotate-0">
              <span className="material-symbols-outlined text-5xl">palette</span>
            </div>
            <div className="mb-8 mt-12 aspect-square w-full overflow-hidden rounded-lg bg-surface-container">
              <img
                alt="Art-Tech"
                className="h-full w-full object-cover opacity-80 mix-blend-multiply"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqRWOsYfiM-sbbD9RkcCaPHsFnsX_LsJlk7HlnGNt3k658Xk3aXETIwJtYhQqAqdgC7xnmtTE1S-alIQUnbPVPFz0PB661ZqHQUHFhhnKXW0rbllsm5l1TfL1Jru5_P46EsBqXm-XQV1z9ATL5v2L8He2yz9LgGs4YtyDI0gv9n8PJoN0mmuiuBpGWqf9Kx-TzLV7dZJXUv6gO4cpOoV9Zzled86sn1aujsOfjthkUscXgneQaTgTck3Zu4zXGApsm_0y028dmU0CK"
              />
            </div>
            <h3 className="mb-4 font-headline text-3xl font-black uppercase tracking-tighter text-primary">
              Art-Tech
            </h3>
            <p className="mb-8 px-4 text-on-surface-variant">
              Fuse pixels with poetry. Build tools that empower creators or create generative
              masterpieces that defy logic.
            </p>
            <div className="mb-8 flex gap-2">
              <span className="rounded-full bg-secondary-container/20 px-3 py-1 text-xs font-black uppercase text-on-secondary-container">
                Creative
              </span>
              <span className="rounded-full bg-tertiary-container/20 px-3 py-1 text-xs font-black uppercase text-on-tertiary-container">
                NFTs
              </span>
            </div>
            <button className="w-full rounded-lg bg-primary py-4 font-headline font-black uppercase tracking-widest text-on-primary transition-colors hover:bg-primary-dim">
              Join Track
            </button>
          </div>

          <div className="group relative flex flex-col items-center rounded-xl bg-surface-container-lowest p-8 text-center shadow-[0_20px_40px_rgba(58,38,75,0.08)] transition-all duration-300 hover:scale-105">
            <div className="absolute -top-6 rotate-[5deg] rounded-full border-4 border-white bg-secondary-container p-6 text-on-secondary-container shadow-lg transition-transform group-hover:rotate-0">
              <span className="material-symbols-outlined text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                favorite
              </span>
            </div>
            <div className="mb-8 mt-12 aspect-square w-full overflow-hidden rounded-lg bg-surface-container">
              <img
                alt="Social Good"
                className="h-full w-full object-cover opacity-80 mix-blend-multiply"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1ADztipvQgLBEogRx6_mvpSMWsZx4nDmbccU6750sE6e9E5_kPl3LwtoTSc9D-6UYbHleQKEVoOJqEk5fwsrBTW2rOgek2E5W4JwYidCv2YWIkfDqwN0mEDc_SWB7jk9fsqtnsIDv2ZF60DkEfmUqU2vIOqpecE9EGwAUfpa0B_7Tb36-hxBMdP4gTTEHrIEMk1DulC6MoRuq6gXZ8Va1CFJwcuC6YF2FRJaOLlK78gn1fiEHXZMdsB_iAb4e1pWJ2HZSSWU0-q6e"
              />
            </div>
            <h3 className="mb-4 font-headline text-3xl font-black uppercase tracking-tighter text-secondary">
              Social Good
            </h3>
            <p className="mb-8 px-4 text-on-surface-variant">
              Code for a cause. Solve real-world problems from climate change to accessibility with
              empathetic design.
            </p>
            <div className="mb-8 flex gap-2">
              <span className="rounded-full bg-primary-container/20 px-3 py-1 text-xs font-black uppercase text-on-primary-container">
                Impact
              </span>
              <span className="rounded-full bg-tertiary-container/20 px-3 py-1 text-xs font-black uppercase text-on-tertiary-container">
                Civic
              </span>
            </div>
            <button className="w-full rounded-lg bg-secondary-container py-4 font-headline font-black uppercase tracking-widest text-on-secondary-container transition-colors hover:bg-secondary-fixed-dim">
              Join Track
            </button>
          </div>

          <div className="group relative flex flex-col items-center rounded-xl bg-surface-container-lowest p-8 text-center shadow-[0_20px_40px_rgba(58,38,75,0.08)] transition-all duration-300 hover:scale-105">
            <div className="absolute -top-6 rotate-[-8deg] rounded-full border-4 border-white bg-tertiary-container p-6 text-on-tertiary-container shadow-lg transition-transform group-hover:rotate-0">
              <span className="material-symbols-outlined text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                bolt
              </span>
            </div>
            <div className="mb-8 mt-12 aspect-square w-full overflow-hidden rounded-lg bg-surface-container">
              <img
                alt="Pure Chaos"
                className="h-full w-full object-cover opacity-80 mix-blend-multiply"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAm0JsDVH7EMjbs8NNSOATZcnVcZlloqutuQACFI7jh0V-g2WMm9PoUf65ULFk_QG_lvE58ofNoZscJBe0GlbNQjMkWREIoSbGgGGjGVlQNh0gkRZ8Xcb4VGGkrV6iS0x4RENKPl6_BZ6EOoIE8LYIsKMscW2GZ5VPdI2q17Ljasnfa1u7Xk_37QQoJ8yB14dITU1HAICZoCfSJgong0bp6HyfpJFjmXPsssXaJkFEGLvfknyT1-0plcchyP3cqb7SFNfiwnU93MpHz"
              />
            </div>
            <h3 className="mb-4 font-headline text-3xl font-black uppercase tracking-tighter text-tertiary">
              Pure Chaos
            </h3>
            <p className="mb-8 px-4 text-on-surface-variant">
              The &quot;why not?&quot; track. Build things that make no sense, use weird APIs, or create
              something delightfully useless.
            </p>
            <div className="mb-8 flex gap-2">
              <span className="rounded-full bg-primary-container/20 px-3 py-1 text-xs font-black uppercase text-on-primary-container">
                Wildcard
              </span>
              <span className="rounded-full bg-secondary-container/20 px-3 py-1 text-xs font-black uppercase text-on-secondary-container">
                Experimental
              </span>
            </div>
            <button className="w-full rounded-lg bg-tertiary-container py-4 font-headline font-black uppercase tracking-widest text-on-tertiary-container transition-colors hover:bg-tertiary-fixed-dim">
              Join Track
            </button>
          </div>
        </div>

        <section className="mt-40 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="relative flex min-h-[400px] flex-col justify-end overflow-hidden rounded-lg bg-primary p-12 text-on-primary">
            <div className="absolute right-0 top-0 p-8">
              <span className="material-symbols-outlined rotate-12 text-9xl opacity-20" style={{ fontVariationSettings: "'FILL' 1" }}>
                star
              </span>
            </div>
            <h2 className="mb-6 font-headline text-5xl font-black uppercase leading-none tracking-tighter">
              Winner Takes
              <br />
              The Crown
            </h2>
            <p className="mb-8 max-w-sm text-xl font-bold opacity-90">
              Each track winner gets the legendary Golden Keyboard and $5k in prizes.
            </p>
            <div className="flex">
              <a className="rounded-full bg-on-primary px-8 py-4 font-headline font-black uppercase tracking-widest text-primary transition-transform hover:scale-110" href="#">
                See Prizes
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-6 rounded-lg bg-surface-container-high p-12">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary-container">
                <span className="material-symbols-outlined text-3xl">groups</span>
              </div>
              <div>
                <h4 className="font-headline text-2xl font-black uppercase tracking-tighter">Find Teammates</h4>
                <p className="font-medium text-on-surface-variant">Connect in the Arena</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-tertiary-container">
                <span className="material-symbols-outlined text-3xl">school</span>
              </div>
              <div>
                <h4 className="font-headline text-2xl font-black uppercase tracking-tighter">Pro Mentors</h4>
                <p className="font-medium text-on-surface-variant">24/7 technical guidance</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-container">
                <span className="material-symbols-outlined text-3xl">local_pizza</span>
              </div>
              <div>
                <h4 className="font-headline text-2xl font-black uppercase tracking-tighter">Unlimited Fuel</h4>
                <p className="font-medium text-on-surface-variant">Pizza, Coffee, and Energy</p>
              </div>
            </div>
            <div className="mt-auto pt-6">
              <img
                alt="Creators high-fiving"
                className="h-32 w-full rounded-md object-cover opacity-60"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpfnk1-f6Qk9M_GefVRiI5d5QB1Z31lDiBqTKQoAqOPFf_dtiCayJGqpEkdEmpotybb8nuPK40SabwQhJHF7WMjl141NH2Fv25X373ISDZTLP188vr7vzjx2iKCB0UcqG4DkNqtWLNI3LPyP7rt3MwfOZdg7TfUrAtzyHtUwod9XZ8P7GQYJmiuvv7AaDtRC0E-XX3gYVNa6ni8zv_dgGzX4hvk_gaFZgF_bnL8oFQF2H4tZyzb3O5TTGCRr93ycuWpsMQ5b8alpMC"
              />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />

      <div className="fixed bottom-6 left-1/2 z-50 w-[90%] -translate-x-1/2 md:hidden">
        <div className="flex items-center justify-between rounded-full border-4 border-primary/10 bg-white/80 px-8 py-4 shadow-2xl backdrop-blur-xl">
          <a className="flex flex-col items-center gap-1 text-[#3a264b] opacity-70" href="#">
            <span className="material-symbols-outlined text-2xl">stadium</span>
            <span className="text-[10px] font-black uppercase">Arena</span>
          </a>
          <a className="flex scale-110 flex-col items-center gap-1 text-[#7C3AED]" href="#">
            <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              category
            </span>
            <span className="text-[10px] font-black uppercase">Tracks</span>
          </a>
          <a className="flex flex-col items-center gap-1 text-[#3a264b] opacity-70" href="#">
            <span className="material-symbols-outlined text-2xl">calendar_month</span>
            <span className="text-[10px] font-black uppercase">Dates</span>
          </a>
          <a className="flex flex-col items-center gap-1 text-[#3a264b] opacity-70" href="#">
            <span className="material-symbols-outlined text-2xl">person</span>
            <span className="text-[10px] font-black uppercase">Profile</span>
          </a>
        </div>
      </div>
    </>
  );
}
