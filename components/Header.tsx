'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="header-nav sticky top-0 z-50">
      <div className="container-main py-3 flex-between">
        {/* Logo */}
        <Link
          href="/"
          className="header-title hover:opacity-80 transition-opacity"
          onClick={() => setOpen(false)}
        >
          Akumu Maria Paris
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:block">
          <ul className="flex gap-1">
            {links.map(({ href, label }) => {
              const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`nav-link-white ${isActive ? 'bg-slate-700' : ''}`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Hamburger button — mobile only */}
        <button
          className="sm:hidden flex flex-col gap-1.5 p-2 rounded-md hover:bg-slate-800 transition-colors cursor-pointer"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <nav className="sm:hidden bg-slate-800 border-t border-slate-700 px-4 pb-4">
          <ul className="flex flex-col gap-1 pt-3">
            {links.map(({ href, label }) => {
              const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`block px-4 py-3 rounded-md text-sm font-medium text-white transition-colors ${isActive ? 'bg-slate-700' : 'hover:bg-slate-700'
                      }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
