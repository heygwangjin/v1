'use client';

import { cn } from '@/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function MainMenu() {
  const links: { href: string; label: string }[] = [
    {
      href: '/',
      label: 'Home',
    },
    {
      href: '#about',
      label: 'About',
    },
  ];

  const path = usePathname();

  const activeLink = links.find(({ href }) => href === path);

  return (
    <ul className="flex items-center justify-between rounded-full w-full sm:w-fit">
      {links.map(({ href, label }) => (
        <li key={href}>
          <Link
            href={href}
            className={cn(
              'px-4 hover:text-neutral-950 dark:hover:text-neutral-50 focus-visible:text-neutral-950 dark:focus-visible:text-neutral-50 duration-300 transition-colors rounded-full outline-none',
              activeLink?.href === href
                ? 'text-neutral-950 dark:text-neutral-50'
                : 'text-neutral-500 dark:text-neutral-400'
            )}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default MainMenu;
