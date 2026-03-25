export default function Donate() {
  return (
    <div>
      <section className="section-padding">
        <div className="panel overflow-hidden p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="eyebrow mb-4">Donate</p>
              <h1 className="text-4xl font-bold uppercase leading-tight text-primary-900 md:text-6xl">
                Support Darin Masri
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
                Your contribution helps us reach voters, build momentum, and bring real change to
                our Democratic Party.
              </p>
            </div>
            <div className="rounded-[2rem] bg-accent-600 p-8 text-white shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent-100">
                ActBlue
              </p>
              <p className="mt-4 text-base leading-8 text-white/90">
                Use ActBlue for campaign donations. It’s a secure, trusted platform that helps us raise the funds we need to win.
              </p>
              <a
                href="https://actblue.com"
                target="_blank"
                rel="noreferrer"
                className="btn-light mt-8"
              >
                Donate via ActBlue
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="grid gap-6 md:grid-cols-3">
          <article className="panel p-8">
            <h2 className="text-2xl font-bold text-primary-900">Reach More Democrats</h2>
            <p className="mt-4 text-base leading-8 text-neutral-600">
              Contributions help fund outreach, campaign materials, and member contact across Erie.
            </p>
          </article>
          <article className="panel p-8">
            <h2 className="text-2xl font-bold text-primary-900">Build Momentum</h2>
            <p className="mt-4 text-base leading-8 text-neutral-600">
              Early support helps demonstrate serious backing for progress-minded leadership.
            </p>
          </article>
          <article className="panel p-8">
            <h2 className="text-2xl font-bold text-primary-900">Invest in Change</h2>
            <p className="mt-4 text-base leading-8 text-neutral-600">
              Every dollar supports a more accountable, transparent, and effective Democratic Party.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
