import darinImage from '../assets/dahrin.jpeg';

const imageCards = [
  {
    title: 'Campaign Portrait',
    subtitle: "Darin's campaign image featured in the about section.",
    accent: 'from-primary-900 via-primary-700 to-primary-500',
  },
  {
    title: 'Community Leadership',
    subtitle: 'A repeated campaign visual for community-focused branding.',
    accent: 'from-accent-600 via-accent-500 to-primary-100',
  },
  {
    title: 'Erie Small Business',
    subtitle: 'A repeated campaign visual reinforcing the Erie message.',
    accent: 'from-primary-700 via-white to-accent-100',
  },
];

export default function About() {
  return (
    <div className="section-padding">
      <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
        <aside className="panel p-8 md:p-10">
          <p className="eyebrow mb-4">About Darin</p>
          <h1 className="text-4xl font-bold uppercase leading-tight text-primary-900 md:text-5xl">
            Business owner. Community leader. Erie Democrat.
          </h1>
          <div className="mt-8 rounded-[2rem] bg-primary-900 p-8 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary-100">
              Campaign Biography
            </p>
            <p className="mt-4 text-base leading-8 text-primary-100/90">
              Darin Masri is running for the Pennsylvania Democratic State Committee to bring
              accountability, transparency, and stronger grassroots representation to Erie.
            </p>
          </div>
        </aside>

        <section className="panel p-8 md:p-12">
          <div className="grid gap-6 md:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="text-lg leading-8 text-neutral-600">
                Darin Masri is a business owner, community leader, and candidate for Pennsylvania
                Democratic State Committee representing Erie.
              </p>
              <p className="mt-6 text-lg leading-8 text-neutral-600">
                For over a decade, Darin has built and operated local businesses, creating jobs and
                serving the Erie community. Through this experience, she has developed a deep
                understanding of the economic challenges facing working families and small business
                owners.
              </p>
              <p className="mt-6 text-lg leading-8 text-neutral-600">
                Darin is running for State Committee to bring accountability, transparency, and
                stronger grassroots representation to the Democratic Party. She believes the party
                must be more responsive to its members and more effective in advocating for
                policies that support working people.
              </p>
              <p className="mt-6 text-lg leading-8 text-neutral-600">
                This campaign is focused on ensuring that every voice is heard, leadership is held
                accountable, and Erie Democrats have a stronger presence in decisions that shape the
                future of the party across Pennsylvania.
              </p>
            </div>

            <div className="space-y-4">
              {imageCards.map((card) => (
                <article
                  key={card.title}
                  className={`overflow-hidden rounded-[1.75rem] bg-gradient-to-br ${card.accent} p-[1px] shadow-soft`}
                >
                  <div className="rounded-[1.7rem] bg-white/95 p-4">
                    <div className="overflow-hidden rounded-[1.35rem]">
                      <img
                        src={darinImage}
                        alt={card.title}
                        className="aspect-[4/5] w-full object-cover"
                      />
                    </div>
                    <div className="mt-4 rounded-[1.1rem] border border-primary-100 bg-white p-4">
                      <h2 className="text-xl font-bold text-primary-900">{card.title}</h2>
                      <p className="mt-2 text-sm leading-6 text-neutral-600">{card.subtitle}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-[1.75rem] border border-primary-100 bg-primary-50 p-6">
              <h2 className="text-xl font-bold text-primary-900">Rooted in Erie</h2>
              <p className="mt-3 text-sm leading-7 text-neutral-600">
                Local business experience and direct ties to the community shape this campaign.
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-primary-100 bg-white p-6">
              <h2 className="text-xl font-bold text-primary-900">Focused on Reform</h2>
              <p className="mt-3 text-sm leading-7 text-neutral-600">
                The goal is a party structure that listens, explains decisions, and delivers.
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-accent-100 bg-accent-100/60 p-6">
              <h2 className="text-xl font-bold text-primary-900">Built for Members</h2>
              <p className="mt-3 text-sm leading-7 text-neutral-600">
                This race is about party members, local voices, and stronger representation.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
