const priorities = [
  {
    title: 'Accountability',
    description: 'Democratic leadership must answer to its members and operate with integrity.',
  },
  {
    title: 'Transparency',
    description: 'Party decisions should be open, clear, and accessible, not behind closed doors.',
  },
  {
    title: 'Working Families',
    description: 'Support policies that strengthen wages, small businesses, and economic opportunity.',
  },
  {
    title: 'Protecting Rights',
    description: 'Defend reproductive rights, civil rights, and voting access.',
  },
  {
    title: 'Local Representation',
    description: 'Erie Democrats deserve a stronger voice at the state level.',
  },
];

export default function Issues() {
  return (
    <div>
      <section className="section-padding">
        <div className="panel p-8 md:p-12">
          <p className="eyebrow mb-4">Issues</p>
          <h1 className="max-w-4xl text-4xl font-bold uppercase leading-tight text-primary-900 md:text-6xl">
            Priorities for Erie and Pennsylvania Democrats
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-600">
            This campaign is centered on progress inside the party and a stronger local voice in
            state-level decisions.
          </p>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {priorities.map((priority, index) => (
            <article key={priority.title} className="panel p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent-600">
                Priority 0{index + 1}
              </p>
              <h2 className="mt-4 text-3xl font-bold text-primary-900">{priority.title}</h2>
              <p className="mt-4 text-base leading-8 text-neutral-600">{priority.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="rounded-[2.5rem] border border-accent-100 bg-accent-100/60 px-8 py-12 md:px-12">
          <h2 className="text-3xl font-bold uppercase text-primary-900 md:text-4xl">
            Erie Democrats deserve a stronger voice
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-neutral-600">
            The goal is straightforward: a Democratic Party that communicates clearly, represents
            members fairly, and works harder for the people who power it.
          </p>
        </div>
      </section>
    </div>
  );
}
