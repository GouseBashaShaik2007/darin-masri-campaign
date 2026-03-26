import { Link } from 'react-router-dom';

const socialLinks = [
  {
    name: 'Facebook',
    href: '#',
    disabled: true,
    icon: <path d="M22 12.07C22 6.51 17.52 2 12 2S2 6.51 2 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.02H7.9v-2.9h2.54V9.86c0-2.5 1.48-3.89 3.76-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.9h-2.34V22c4.78-.75 8.44-4.91 8.44-9.93Z" />,
  },
  {
    name: 'Instagram',
    href: '#',
    disabled: true,
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
    icon: <path d="M4 4h4.6l4.1 5.53L17.4 4H20l-6.14 7.03L20 20h-4.6l-4.45-5.99L5.7 20H3l6.33-7.25L4 4Z" />,
    disabled: true,
  },
  {
    name: 'TikTok',
    href: '#',
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

export default function Footer() {
  return (
    <footer className="mt-24 bg-primary-900 text-white">
      <div className="section-padding">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-primary-900">
                <span className="text-base font-bold tracking-[0.2em]">DM</span>
              </div>
              <div>
                <h3 className="text-xl font-bold uppercase tracking-[0.12em]">Darin Masri</h3>
                <p className="text-sm uppercase tracking-[0.18em] text-primary-100">
                  State Committee for Erie
                </p>
              </div>
            </div>
            <p className="max-w-sm text-sm leading-7 text-primary-100/90">
              Bringing accountability, transparency, and stronger Democratic leadership to Erie and
              across Pennsylvania.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-primary-100">
              Quick Links
            </h4>
            <div className="space-y-3 text-sm">
              <Link to="/" className="block hover:text-accent-100">
                Home
              </Link>
              <Link to="/about" className="block hover:text-accent-100">
                About
              </Link>
              <Link to="/issues" className="block hover:text-accent-100">
                Issues
              </Link>
              <Link to="/get-involved" className="block hover:text-accent-100">
                Get Involved
              </Link>
              <Link to="/donate" className="block hover:text-accent-100">
                Donate
              </Link>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-primary-100">
              Contact
            </h4>
            <div className="space-y-3 text-sm text-primary-100/90">
              <p>DarinMasriForPA@gmail.com</p>
              <a href="tel:+18144497968" className="block hover:text-accent-100">
                +1 (814) 449-7968
              </a>
              <div className="flex flex-wrap gap-3 pt-2">
                {socialLinks.map((social) => {
                  const classes = social.disabled
                    ? 'border-white/15 bg-white/5 text-white/40 cursor-default'
                    : 'border-white/15 bg-white/10 text-white hover:border-white/30 hover:bg-white/15';

                  return (
                    <a
                      key={social.name}
                      href={social.disabled ? undefined : social.href}
                      target={social.disabled ? undefined : '_blank'}
                      rel={social.disabled ? undefined : 'noreferrer'}
                      aria-label={social.name}
                      className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition ${classes}`}
                      title={social.disabled ? `${social.name} coming soon` : social.name}
                    >
                      <SocialIcon>{social.icon}</SocialIcon>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.16em] text-primary-100/75">
          Paid for by Darin Masri Campaign. © 2026 Darin Masri for Pennsylvania Democratic State
          Committee.
        </div>
      </div>
    </footer>
  );
}
