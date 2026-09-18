'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const filters = [
  { href: '/projects', label: 'All Projects' },
  { href: '/projects/school', label: 'School' },
  { href: '/projects/opensource', label: 'Open Source' },
];

export default function ProjectFilter() {
  const pathname = usePathname();

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {filters.map(({ href, label }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${isActive
                ? 'bg-slate-900 text-white border-slate-900'
                : 'bg-white text-slate-600 border-slate-300 hover:border-slate-500 hover:text-slate-900'
              }`}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}
