export default function OrganizersSection() {
  const organizers = [
    {
      name: 'Alex Volkov',
      role: 'Founder & Lead Architect',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBT7Hxb92WBRt8RBvrQ7T1IGyORVCNRcqNQm-0vcllCyJmJ_kcIEQKX2XAM0JXdbXzpJUWYc5M03JypsgQtDYZM4ltkGtOedRXYLREBzLfBChZ8712YMAghTepriZAgK8f30-0qW-MupxIKT5_WpoCI3nq6pG5YPKqPt1Lh9qcZjn5EFX2aUYcxC9xQcjc6wxLbSIJTkUhCYwvPKdWlt-iajCjfsBGcQ2Mr97EQm4RCeXZbGjGdWtCyHw9mWUmzCtU40HY-S3WA9q4',
      alt: 'professional portrait of a tech visionary, futuristic minimalist attire, soft purple studio lighting, high fashion photography style',
    },
    {
      name: 'Elena Chen',
      role: 'Ecosystem Growth',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQWwqlGAkr9kU9l-AfZKc4kFRdEUeGThaJvtz1RdjCSC640cA2hu3rLlu1N6ACaoJi4sp8CGkiQOBKU24g33Nq-x9Ladq3uusGxS6WIJoUyhuQSAvOF7NMNQOybWQE1RY9UL8D26DnRp5uWeoF4tP8HVGMmYtCxrVhcPwbOllj6_BQTkxt4NJ0_ttP4A0wrwEK8BdrK-Lrl9ZwOjjRCzVkhYQar0dOqDhC6_D1KsvQKeLkIRdoWMGkkX3CKuGNqQn7nmjLdv8vIwg',
      alt: 'close-up portrait of a woman tech leader, confident expression, neon lighting reflected on glasses, high contrast cinematic style',
    },
    {
      name: 'Marcus Thorne',
      role: 'Technical Operations',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtCpxeNf7MTLMhFQ9MqQEBqxVMNdw9RtqF3KQ_ynXbVl3BumrWYutH8U2Wenk9ujVJYrKrEsMR9QwO-5Gxz6NnlR2lvOKETMaJsXg5tNLhs5Qqfa4LGPryx0el3MQ-6OgY5cC6qmlXpnr6EISgynorXaUDdDdSEb2RJsNlpl69EPuwcj-D1vKCCC_rcXkm0gafTv-hFNEP1ZQ9sY3vDogdTeUe__TPKDxSQUUSOzbrLDLC-cpbcYqIhl-AJmjxUD5r9hSLV5gslAU',
      alt: 'portrait of a young engineer in a dark techwear jacket, subtle glowing purple elements in background, professional lighting',
    },
    {
      name: 'Sasha Gray',
      role: 'Experience Design',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0BKM2dJ5Di8t7SPFJD6rJHjJqUcfpmU0uu4tSP-RZhPDbobABgKOyck0z8cEtmsWgFnCCMGmBopaAGaGuDiKdnRqyA9yt_OJbljoAxh8bzaL-Eom7MChTvsQ3gOqOUwXLJl4cRJZ8wWYoC-CVqvKJos_HHiIayiK4CXoygQB0LA8HuCzLV9OK5kfX6xrL6gkBsnQ1y1yV8vClzjg72E3LwnqhOLLBq7DGR3lCYad7OJfUMImIK7khiysCJEwEvgffSbcDj9ihaZc',
      alt: 'artistic portrait of a digital artist, neon glow highlights on hair, creative studio background with soft bokeh',
    },
  ];

  return (
    <section className="py-32 bg-surface-container-lowest" id="organizers">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-headline font-bold text-5xl mb-16 text-center">
          Architects of the <span className="text-secondary">Void</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {organizers.map((organizer, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-xl opacity-20 group-hover:opacity-100 blur-sm transition-opacity duration-500"></div>
              <div className="relative glass-card p-6 rounded-xl flex flex-col items-center text-center h-full">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-surface-container">
                  <img
                    className="w-full h-full object-cover"
                    data-alt={organizer.alt}
                    src={organizer.image}
                    alt={organizer.alt}
                  />
                </div>
                <h4 className="font-headline font-bold text-xl text-white">{organizer.name}</h4>
                <span className="text-primary font-medium text-sm mb-4">{organizer.role}</span>
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-slate-400 hover:text-white cursor-pointer" data-icon="link">
                    link
                  </span>
                  <span className="material-symbols-outlined text-slate-400 hover:text-white cursor-pointer" data-icon="alternate_email">
                    alternate_email
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
