import { Link } from 'react-router-dom';

const actions = [
  {
    title: 'Volunteer',
    description: 'Help with outreach, events, and member-to-member organizing across Erie.',
    cta: 'Volunteer',
    to: '/contact',
    style: 'btn-primary',
  },
  {
    title: 'Request a Yard Sign',
    description: 'Show visible support in your neighborhood and help build momentum locally.',
    cta: 'Request Sign',
    to: '/contact',
    style: 'btn-light',
  },
  {
    title: 'Endorse Darin',
    description: 'Add your name and support to a campaign focused on accountability and progress.',
    cta: 'Endorse Darin',
    to: '/contact',
    style: 'btn-accent',
  },
  {
    title: 'Join Email List',
    description: 'Get updates on campaign news, events, and ways to help reach party members.',
    cta: 'Join Email List',
    to: '/contact',
    style: 'btn-primary',
  },
];

export default function GetInvolved() {
  return (
    <div>
      <section className="section-padding">
        <div className="panel overflow-hidden p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="eyebrow mb-4">Get Involved</p>
              <h1 className="text-4xl font-bold uppercase leading-tight text-primary-900 md:text-6xl">
                Join Darin&apos;s Campaign
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
                This campaign is powered by people like you. Whether you want to volunteer,
                endorse, or help spread the word, we need you.
              </p>
            </div>
            <div className="rounded-[2rem] bg-primary-900 p-8 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary-100">
                Campaign Strategy
              </p>
              <p className="mt-4 text-base leading-8 text-primary-100/90">
                This race is aimed at party members and grassroots supporters who want progress,
                stronger accountability, and a louder Erie voice in party leadership.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="grid gap-6 md:grid-cols-2">
          {actions.map((action) => (
            <article key={action.title} className="panel p-8">
              <h2 className="text-3xl font-bold text-primary-900">{action.title}</h2>
              <p className="mt-4 text-base leading-8 text-neutral-600">{action.description}</p>
              <Link to={action.to} className={`${action.style} mt-8`}>
                {action.cta}
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
