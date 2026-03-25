import darinImage from '../assets/darin5.jpeg';

export default function About() {
  return (
    <div className="section-padding">
      <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
        <aside className="panel overflow-hidden">
          <div className="bg-[linear-gradient(160deg,#0f3b7a_0%,#184f95_58%,#ffe3df_100%)] p-5">
            <div className="overflow-hidden rounded-[2rem] bg-white shadow-soft">
              <img
                src={darinImage}
                alt="Darin Masri"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>
          <div className="p-8 md:p-10">
            <p className="eyebrow mb-4">Meet Darin</p>
            <h1 className="text-4xl font-bold uppercase leading-tight text-primary-900 md:text-5xl">
              Woman leader. Entrepreneur. Erie Democrat.
            </h1>
            <div className="mt-8 rounded-[1.75rem] bg-primary-900 p-6 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary-100">
                Campaign Focus
              </p>
              <p className="mt-3 text-base leading-8 text-primary-100/90">
                Transparency, accountability, and stronger grassroots representation for Erie
                Democrats.
              </p>
            </div>
          </div>
        </aside>

        <section className="panel p-8 md:p-12">
          <p className="text-lg leading-8 text-neutral-600">
            Darin Masri is a small business owner, community advocate, and candidate for
            Pennsylvania Democratic State Committee representing Erie.
          </p>
          <p className="mt-6 text-lg leading-8 text-neutral-600">
            As a woman leader and entrepreneur, Darin has spent over a decade building and
            operating local businesses in Erie, creating jobs and serving the community. Through
            her experience, she understands the challenges facing working families, small business
            owners, and women in leadership.
          </p>
          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Darin is running for State Committee to bring transparency, accountability, and
            stronger grassroots representation to the Democratic Party. She believes leadership
            should be open, responsive, and focused on delivering real results.
          </p>
          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Her campaign is rooted in the belief that every Democrat deserves a voice, and that the
            party must continue to stand up for fairness, opportunity, and working people.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-[1.75rem] border border-primary-100 bg-primary-50 p-6">
              <h2 className="text-xl font-bold text-primary-900">Small Business Experience</h2>
              <p className="mt-3 text-sm leading-7 text-neutral-600">
                Years of building local businesses have shaped Darin’s practical approach to
                leadership and economic opportunity.
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-primary-100 bg-white p-6">
              <h2 className="text-xl font-bold text-primary-900">Grassroots Representation</h2>
              <p className="mt-3 text-sm leading-7 text-neutral-600">
                Darin is focused on making sure Erie Democrats are heard in party decisions at the
                state level.
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-accent-100 bg-accent-100/60 p-6">
              <h2 className="text-xl font-bold text-primary-900">Real Accountability</h2>
              <p className="mt-3 text-sm leading-7 text-neutral-600">
                The campaign is centered on leadership that is transparent, responsive, and ready
                to deliver results.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
