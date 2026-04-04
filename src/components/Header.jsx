import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import donkeyImage from '../assets/donkey.png';

const navItems = [
  { to: '/', label: 'Home1' },
  { to: '/about', label: 'Meet Darin' },
  { to: '/issues', label: 'Issues' },
  { to: '/get-involved', label: 'Get Involved' },
  { to: '/contact?reason=endorsement', label: 'Endorse' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50  bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <Link to="/" className="flex items-center gap-4">
          <div className="relative flex items-center gap-4 overflow-hidden rounded-[1.75rem]  ">
            <div className="absolute inset-y-0 left-[5.25rem] w-10 -skew-x-[24deg] " />
            {/* <img
              src={donkeyImage}
              alt="Democratic donkey logo"
              className="relative h-12 w-12 rounded-xl bg-white/85 p-1.5 shadow-md md:h-14 md:w-14"
            /> */}
            <div className="relative">
              <img
                src={donkeyImage}
                alt=""
                aria-hidden="true"
                className="absolute  top-1/2 h-14 w-14 -translate-y-1/2 object-contain opacity-10 md:h-16 md:w-16"
              />
              <p className="relative text-xl font-black uppercase tracking-[0.2em] text-primary-900 md:text-2xl">
                <span className="text-primary-900">Darin</span>{' '}
                <span className="text-accent-600">Masri</span>
              </p>
              {/* <p className="relative mt-1 text-[0.58rem] font-semibold uppercase tracking-[0.32em] text-white md:text-[0.66rem]">
                Pennsylvania Democratic State Committee
              </p> */}
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] transition ${
                  isActive
                    ? 'bg-primary-900 text-white'
                    : 'text-primary-900 hover:bg-primary-50 hover:text-primary-700'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          {/* <NavLink
            to="/donate"
            className={({ isActive }) =>
              `ml-2 rounded-full px-5 py-2.5 text-sm font-bold uppercase tracking-[0.2em] transition ${
                isActive
                  ? 'bg-accent-700 text-white shadow-lg shadow-accent-700/30'
                  : 'bg-accent-600 text-white shadow-lg shadow-accent-700/20 hover:-translate-y-0.5 hover:bg-accent-700'
              }`
            }
          >
            Donate
          </NavLink> */}
        </nav>

        <button
          type="button"
          className="rounded-xl border border-primary-100 p-3 text-primary-900 md:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <nav className="border-t border-primary-100 bg-white px-4 py-3 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.16em] transition ${
                    isActive
                      ? 'bg-primary-900 text-white'
                      : 'text-primary-900 hover:bg-primary-50'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink
              to="/donate"
              className={({ isActive }) =>
                `rounded-2xl px-4 py-3 text-sm font-bold uppercase tracking-[0.18em] transition ${
                  isActive ? 'bg-accent-700 text-white' : 'bg-accent-600 text-white hover:bg-accent-700'
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Donate
            </NavLink>
          </div>
        </nav>
      )}
    </header>
  );
}
