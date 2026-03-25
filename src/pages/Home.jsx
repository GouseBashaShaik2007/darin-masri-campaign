import { Link } from 'react-router-dom';
import darinImage from '../assets/dahrin.jpeg';

const priorities = [
  {
    title: 'Accountability in Party Leadership',
    description: 'Leadership should answer to party members and earn trust through integrity.',
  },
  {
    title: 'Transparency & Fair Representation',
    description: 'Party decisions should be open, clear, and accessible, not made behind closed doors.',
  },
  {
    title: 'Protecting Working Families',
    description: 'Working people, small businesses, and neighborhoods deserve practical support and advocacy.',
  },
  {
    title: 'Strengthening Local Democratic Voices',
    description: 'Erie Democrats deserve a stronger and more consistent voice at the state level.',
  },
];

export default function Home() {
  return (
    <div>
      <section className="overflow-hidden">
        <div className="section-padding grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="eyebrow mb-4">Erie Democrats for Progress</p>
            <h1 className="max-w-4xl text-5xl font-bold uppercase leading-[0.92] text-primary-900 md:text-7xl">
              Darin Masri for Pennsylvania Democratic State Committee
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-neutral-600 md:text-2xl">
              Bringing accountability, transparency, and strong leadership to Erie Democrats.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Link to="/get-involved" className="btn-primary">
                Join the Campaign
              </Link>
              <Link to="/contact" className="btn-accent">
                Endorse Darin
              </Link>
              <Link to="/donate" className="btn-light">
                Donate
              </Link>
            </div>
          </div>

          <div className="panel overflow-hidden p-4 md:p-5">
            <img
              src={darinImage}
              alt="Darin Masri campaign graphic for Pennsylvania Democratic Committee"
              className="h-full w-full rounded-[1.75rem] object-cover shadow-soft"
            />
            <div className="rounded-[1.5rem] bg-white px-5 py-5">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary-700">
                Campaign Focus
              </p>
              <p className="mt-3 text-base leading-7 text-neutral-600">
                A focused campaign for party members who want progress, accountability, and a
                stronger Erie voice inside Democratic leadership.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="panel max-w-5xl p-8 md:p-12">
          <p className="eyebrow mb-4">Introduction</p>
          <p className="max-w-4xl text-2xl leading-10 text-primary-900 md:text-3xl">
            I&apos;m Darin Masri, a small business owner and community advocate running to strengthen
            our Democratic Party in Erie and across Pennsylvania.
          </p>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-600">
            It&apos;s time for leadership that listens, includes, and delivers results.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="mb-12 text-center">
          <p className="eyebrow mb-4">Key Priorities</p>
          <h2 className="text-4xl font-bold uppercase text-primary-900 md:text-5xl">
            What this campaign stands for
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {priorities.map((priority, index) => (
            <article key={priority.title} className="panel p-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-900 text-lg font-bold text-white">
                0{index + 1}
              </div>
              <h3 className="text-2xl font-bold text-primary-900">{priority.title}</h3>
              <p className="mt-4 text-base leading-7 text-neutral-600">{priority.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-padding">
        <div className="overflow-hidden rounded-[2.5rem] bg-primary-900 px-8 py-12 text-white shadow-soft md:px-12">
          <p className="eyebrow mb-4 text-accent-100">Call to Action</p>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold uppercase md:text-4xl">
                Be part of the movement to bring real change to Erie Democrats.
              </h2>
              <p className="mt-4 text-lg leading-8 text-primary-100/90">
                This race is about progress, accountability, and making sure local Democrats are
                heard.
              </p>
            </div>
            <Link to="/get-involved" className="btn-accent">
              Join Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
