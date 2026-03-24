const updateChannels = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/share/18R6FWj7oy/?mibextid=wwXIfr',
    description: 'Campaign announcements, local events, and supporter updates.',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/beinggouse?igsh=ZjF5cm9vMHlzYXY4&utm_source=qr',
    description: 'Photos, campaign moments, and visual updates from the trail.',
  },
];

export default function Updates() {
  return (
    <div>
      <section className="section-padding">
        <div className="panel p-8 md:p-12">
          <p className="eyebrow mb-4">Updates</p>
          <h1 className="max-w-4xl text-4xl font-bold uppercase leading-tight text-primary-900 md:text-6xl">
            Stay up to date with the campaign
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-600">
            Follow Darin Masri on social media for campaign announcements, local updates, and
            community activity.
          </p>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="grid gap-6 md:grid-cols-2">
          {updateChannels.map((channel) => (
            <article key={channel.name} className="panel p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary-700">
                Social Channel
              </p>
              <h2 className="mt-3 text-3xl font-bold uppercase text-primary-900">
                {channel.name}
              </h2>
              <p className="mt-4 text-base leading-8 text-neutral-600">{channel.description}</p>
              <a
                href={channel.href}
                target="_blank"
                rel="noreferrer"
                className="btn-primary mt-8"
              >
                Open {channel.name}
              </a>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
