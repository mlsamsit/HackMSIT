export default function SponsorsSection() {
  const sponsors = [
    {
      alt: 'abstract minimalist tech logo icon, clean vector style, white on transparent',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVcd5k-69g0wnjfO71sjZdjz-YsB17bo93L0HiPcOlPDsndnhFW8YBXljVH8bPJaSCuHLbZZtMKlcr48i-Y4HalIKgVH2heJ-u08cl_TNdvzO4pq-J03NlUKHosk93Dzo3V52jY3E44Fd6DGnO1FW8XPQWeVLS8fZTIAKOKT7-YakphefilFXZ37mCBmW5GaFlgW3zGYYa_E1r2SqrzsbwQZA0jGuBHPAGI2pLo1wkBsEF-Rexa5mw6hNJ_a2TajUiZHzoCk1okME',
      h: 'h-12',
    },
    {
      alt: 'minimalist geometric company logo, sharp lines, professional monochrome',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2Q4Lx0AGqHeWGxx6CktYDd9vH5e5_RDt7-12XzjIEQ7qsycryTKXcGmkNq8aAhBI_z7qn1g8RNJuGTgApifJH8AJdAg29RSpUuprqOQpMIl13stnkBlBMYajN_cI5GlM7dlfT0B-M1XxGpGRy5K7kQguMp-pfAreVyEdAgU-UVnEryzGr5ZfXUOpjsOwOtymtpt7AOkFAiyXyIodwzy-E9eBMgK-klvk1I6h3E8GsGbOLfWL6m2ljoi259hpeR5jRcJaFAOVD_b8',
      h: 'h-10',
    },
    {
      alt: 'futuristic corporate emblem logo, symmetrical design, white silhouette',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMNWN0t9S7-5sSymcG4IqAkzqpg1N-8ZGtptazsi-MTNgjVoCO_1RXAoIr39ZzHIWIgg3mJlKCM9jbP6gzfZkg8dDGr83EL7cdEHqpSQy11842LnP_TJ6tOdIVf6CPgG8QZCb801wNInAwO919zaXuYOL9Bf9plsolvDVJDPtP8SxWy9yVw_JO8A1KPuW_M8fMMrZTAOjHIr9Eju67Gnv6cwemlz3n5aFVBvYYTh-swZ8coqBsCVM7vFXhzX9DAeLOeCptFL8-_sY',
      h: 'h-12',
    },
    {
      alt: 'modern software brand logo, simple typography and abstract icon, clean white',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKOY6ombfLlnlKkKaBSdVCdyUKDU-j30enKdKfAIC5aPXn33wiVvbIrrK9WIKu9VGZQ5YMKUO8Y0p5V7DyH6B_nZVM_TPQ-xc6cO2kX3yA5nfi76civ4Spk1fGhEy_IjMyFQVd5XRa8lMx8VS3hs9w--IwhBnTIAB0Q-NibI2UwN_gceIlG5FksNwcqg64WGNlz6V0JxtfRYWChCQi2sb3St5qGT2AvVTvsXm7iViGHgg59tFAy-fluM-hhN71r6WKuMF2LAJDvu4',
      h: 'h-10',
    },
    {
      alt: 'high-tech venture logo icon, sleek and minimalist, vector silhouette',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5q0OX7x1c53p5Ql2XO6Co2wwbtNt-TxYgMeNyNGiA_99pKy0-TXsCdJkCo_Oywxk50LOan9bkQgkIaaQTPhNshZVhhXLCVtq4nluah3s36Eua5gXb0jnhrA4MKL0QJjQXnoYPKv1Q47o0JRWUaaGlPpfUXC0l4w0NquF_WC-9d1WXCldIL2YBAxE86qzmZ2sVsrx-_l580YicCl0kCy_-sQyj_iXiWQY2CE1qkppCvG0q8wIqVvxr-GXzukYQ0fc2BUTjY9F_H98',
      h: 'h-11',
    },
    {
      alt: 'blockchain startup logo, connected nodes icon, clean white minimalist',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCF328fqjXH8F2QUdDbFnmub89qAc_a_jj07qhxIG6XzdKgG-QJKKwCpoFBZ8X3vkMt2cRPPa8xJ6P3HSifH45zlo49-lk-2GbOh2LUQNxKFMI8oeiCUUq8Q_YorsGbKmxNxVkC_gpaJasi_xnaPp7KLix3A2qOyyuPVF8tiPl38w-_9VfXpMyncT_3G7nB9fiuo9-WFBW7M2unooXmdQ4emveMiphmMXjNaHxzBNtFG9ImNTQKMxuRK02-dVyUjFpsUUHtM10u4TM',
      h: 'h-9',
    },
  ];

  return (
    <section className="py-24 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-bold tracking-[0.3em] text-slate-500 uppercase mb-12">Empowered By</p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 items-center justify-items-center opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
          {sponsors.map((sponsor, idx) => (
            <img key={idx} className={`${sponsor.h} w-auto`} data-alt={sponsor.alt} src={sponsor.src} alt={sponsor.alt} />
          ))}
        </div>
      </div>
    </section>
  );
}
