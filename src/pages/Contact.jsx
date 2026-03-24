import { useSearchParams } from 'react-router-dom';

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/share/18R6FWj7oy/?mibextid=wwXIfr',
    label: 'Campaign Facebook',
    icon: (
      <path d="M22 12.07C22 6.51 17.52 2 12 2S2 6.51 2 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.02H7.9v-2.9h2.54V9.86c0-2.5 1.48-3.89 3.76-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.9h-2.34V22c4.78-.75 8.44-4.91 8.44-9.93Z" />
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/beinggouse?igsh=ZjF5cm9vMHlzYXY4&utm_source=qr',
    label: 'Campaign Instagram',
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
        <path d="M8 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z" />
        <path d="M17.5 6.5h.01" />
      </>
    ),
  },
  {
    name: 'X',
    href: '#',
    label: 'Twitter/X coming soon',
    icon: <path d="M4 4h4.6l4.1 5.53L17.4 4H20l-6.14 7.03L20 20h-4.6l-4.45-5.99L5.7 20H3l6.33-7.25L4 4Z" />,
    disabled: true,
  },
  {
    name: 'TikTok',
    href: '#',
    label: 'TikTok coming soon',
    icon: <path d="M14 4c.35 1.85 1.41 3.08 3 3.65V10a6.83 6.83 0 0 1-3-.83v4.85a4.52 4.52 0 1 1-4.52-4.52c.18 0 .35.01.52.03v2.47a2.2 2.2 0 1 0 1.68 2.14V4H14Z" />,
    disabled: true,
  },
];

function SocialIcon({ children }) {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  );
}

export default function Contact() {
  const [searchParams] = useSearchParams();
  const reason = searchParams.get('reason');
  const selectedReason = reason === 'endorsement' ? 'Endorsement' : 'Volunteer';

  return (
    <div className="section-padding">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <section className="panel p-8 md:p-10">
          <p className="eyebrow mb-4">Contact</p>
          <h1 className="text-4xl font-bold uppercase leading-tight text-primary-900 md:text-5xl">
            Contact the campaign
          </h1>
          <div className="mt-8 space-y-8 text-neutral-600">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary-700">
                Email
              </p>
              <a
                href="mailto:DarinMasriForPA@gmail.com"
                className="mt-2 block text-xl font-semibold text-primary-900"
              >
                DarinMasriForPA@gmail.com
              </a>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary-700">
                Phone
              </p>
              <a href="tel:+18144497968" className="mt-2 block text-xl font-semibold text-primary-900">
                +1 (814) 449-7968
              </a>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary-700">
                Social Media
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {socialLinks.map((social) => {
                  const classes = social.disabled
                    ? 'border-neutral-200 bg-neutral-100 text-neutral-400 cursor-default'
                    : 'border-primary-100 bg-primary-50 text-primary-900 hover:border-primary-500 hover:bg-white';

                  return (
                    <a
                      key={social.name}
                      href={social.disabled ? undefined : social.href}
                      target={social.disabled ? undefined : '_blank'}
                      rel={social.disabled ? undefined : 'noreferrer'}
                      aria-label={social.label}
                      className={`inline-flex items-center gap-3 rounded-full border px-4 py-3 text-sm font-semibold uppercase tracking-[0.16em] transition ${classes}`}
                    >
                      <SocialIcon>{social.icon}</SocialIcon>
                      {social.name}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="panel p-8 md:p-10">
          <h2 className="text-3xl font-bold uppercase text-primary-900">Send a message</h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-neutral-600">
            Use this section for volunteer sign-ups, endorsement requests, yard sign requests, or
            general campaign questions.
          </p>

          <form className="mt-8 space-y-6">
            <div>
              <label className="mb-2 block text-sm font-semibold uppercase tracking-[0.16em] text-primary-900">
                Name
              </label>
              <input
                type="text"
                className="w-full rounded-2xl border border-primary-100 bg-primary-50/50 px-4 py-4 text-primary-900 outline-none transition focus:border-primary-500"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold uppercase tracking-[0.16em] text-primary-900">
                Email
              </label>
              <input
                type="email"
                className="w-full rounded-2xl border border-primary-100 bg-primary-50/50 px-4 py-4 text-primary-900 outline-none transition focus:border-primary-500"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold uppercase tracking-[0.16em] text-primary-900">
                Reason for contact
              </label>
              <select
                defaultValue={selectedReason}
                className="w-full rounded-2xl border border-primary-100 bg-primary-50/50 px-4 py-4 text-primary-900 outline-none transition focus:border-primary-500"
              >
                <option>Volunteer</option>
                <option>Endorsement</option>
                <option>Yard Sign</option>
                <option>Email List</option>
                <option>General Question</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold uppercase tracking-[0.16em] text-primary-900">
                Message
              </label>
              <textarea
                rows="6"
                className="w-full rounded-2xl border border-primary-100 bg-primary-50/50 px-4 py-4 text-primary-900 outline-none transition focus:border-primary-500"
              />
            </div>
            <button type="submit" className="btn-primary">
              Send Message
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
