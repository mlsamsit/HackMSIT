import Link from "next/link";

export default function SiteFooter({ brand = "ELECTRIC SCRIBBLE" }) {
  return (
    <footer className="mt-20 w-full rounded-t-[3rem] bg-[#f5e2ff] p-12 dark:bg-[#1a1221]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
        <div>
          <span className="font-headline text-xl font-black text-[#3a264b] dark:text-white">{brand}</span>
          <p className="mt-2 font-jakarta text-sm font-bold uppercase tracking-widest text-[#3a264b] dark:text-[#edd3ff]">
            © 2024 ELECTRIC SCRIBBLE HACKATHON. BUILT FOR CREATORS.
          </p>
        </div>
        <div className="flex gap-8">
          <Link
            className="font-jakarta text-sm font-bold uppercase tracking-widest text-[#3a264b] transition-all hover:tracking-tighter hover:text-[#702ae1] dark:text-[#edd3ff]"
            href="#"
          >
            Privacy
          </Link>
          <Link
            className="font-jakarta text-sm font-bold uppercase tracking-widest text-[#3a264b] transition-all hover:tracking-tighter hover:text-[#702ae1] dark:text-[#edd3ff]"
            href="#"
          >
            Discord
          </Link>
          <Link
            className="font-jakarta text-sm font-bold uppercase tracking-widest text-[#3a264b] transition-all hover:tracking-tighter hover:text-[#702ae1] dark:text-[#edd3ff]"
            href="#"
          >
            Twitter
          </Link>
          <Link
            className="font-jakarta text-sm font-bold uppercase tracking-widest text-[#3a264b] transition-all hover:tracking-tighter hover:text-[#702ae1] dark:text-[#edd3ff]"
            href="#"
          >
            Sponsors
          </Link>
        </div>
      </div>
    </footer>
  );
}
