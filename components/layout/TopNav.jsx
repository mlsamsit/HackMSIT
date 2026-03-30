import Link from "next/link";

const links = [
  { label: "Arena", href: "/arena", key: "arena" },
  { label: "Schedule", href: "/schedule", key: "schedule" },
  { label: "Tracks", href: "/tracks", key: "tracks" },
  { label: "Rules", href: "/rules-faq", key: "rules" }
];

export default function TopNav({ active }) {
  return (
    <nav className="fixed top-0 z-50 w-full px-6 py-4">
      <div className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-full bg-white/50 px-8 py-4 shadow-[0_20px_40px_rgba(58,38,75,0.08)] backdrop-blur-xl dark:bg-black/20">
        <Link
          className="font-headline text-2xl font-black uppercase tracking-tighter text-[#7C3AED] transition-transform hover:rotate-2"
          href="/arena"
        >
          HackMSIT
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const isActive = active === link.key;
            return (
              <Link
                key={link.key}
                className={
                  isActive
                    ? "font-headline border-b-4 border-[#7C3AED] pb-1 text-sm font-black uppercase tracking-widest text-[#7C3AED]"
                    : "font-headline text-sm font-black uppercase tracking-widest text-[#3a264b] opacity-70 transition-all duration-300 hover:-rotate-2 hover:scale-110"
                }
                href={link.href}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        <button className="rounded-xl bg-primary px-8 py-3 font-headline text-sm font-black uppercase tracking-widest text-on-primary shadow-lg transition-all hover:scale-105 active:translate-y-1">
          Register Now
        </button>
      </div>
    </nav>
  );
}
