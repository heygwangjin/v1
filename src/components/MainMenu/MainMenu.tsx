'use client';

import { cn } from '@/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import MenuWrapper from '@/components/MenuWrapper';

function MainMenu() {
  const links: { href: string; label: string }[] = [
    {
      href: '/',
      label: 'Home',
    },
    {
      href: '/about',
      label: 'About',
    },
  ];

  const path = usePathname();

  const activeLink = links.find(({ href }) => href === path);

  return (
    <MenuWrapper>
      <ul className="flex items-center justify-between rounded-full w-full sm:w-fit">
        {links.map(({ href, label }) => (
          <li key={href} className="py-3 px-4">
            <Link
              href={href}
              className={cn(
                'hover:text-neutral-950 dark:hover:text-neutral-50 focus-visible:text-neutral-950 dark:focus-visible:text-neutral-50 duration-300 transition-colors rounded-full group outline-none',
                activeLink?.href === href
                  ? 'text-neutral-950 dark:text-neutral-50 font-semibold'
                  : 'text-neutral-500 dark:text-neutral-400'
              )}
            >
              <span
                className={cn(
                  'text-sm sm:text-sm z-30',
                  '[text-shadow:_0_0_1.25rem_rgba(10,10,10,0)] dark:[text-shadow:0_0_0.75rem_rgba(250,250,250,0)]',
                  'group-hover:[text-shadow:_0_0_1.25rem_rgba(10,10,10,1)] dark:group-hover:[text-shadow:0_0_0.75rem_rgba(250,250,250,1)]',
                  'group-focus:[text-shadow:_0_0_1.25rem_rgba(10,10,10,1)] dark:group-focus:[text-shadow:0_0_0.75rem_rgba(250,250,250,1)]',
                  'transition-[text-shadow] duration-300',
                  activeLink?.href === href &&
                    '[text-shadow:_0_0_1.25rem_rgba(10,10,10,1)] dark:[text-shadow:0_0_0.75rem_rgba(250,250,250,1)]'
                )}
              >
                {label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </MenuWrapper>
  );
}

export default MainMenu;
