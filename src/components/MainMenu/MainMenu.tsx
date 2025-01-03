'use client';

import { cn } from '@/lib/utils';
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
      href: '/blog',
      label: 'Blog',
    },
  ];

  const pathname = usePathname();

  const activeLink = links.find(
    ({ href }) => href === `/${pathname.split('/')[1]}`,
  );

  return (
    <MenuWrapper>
      <ul
        className="flex w-full items-center justify-between rounded-full
          sm:w-fit"
      >
        {links.map(({ href, label }) => (
          <li key={href} className="px-4 py-3">
            <Link
              href={href}
              className={cn(
                `group rounded-full outline-none transition-colors duration-300
                hover:text-foreground focus-visible:text-foreground
                dark:hover:text-foreground dark:focus-visible:text-foreground`,
                activeLink?.href === href
                  ? 'font-semibold text-foreground'
                  : 'text-muted-foreground',
              )}
            >
              <span
                className={cn(
                  'z-30 text-sm sm:text-sm',
                  `[text-shadow:_0_0_1.25rem_rgba(10,10,10,0)]
                  dark:[text-shadow:0_0_0.75rem_rgba(250,250,250,0)]`,
                  `group-hover:[text-shadow:_0_0_1.25rem_rgba(10,10,10,1)]
                  dark:group-hover:[text-shadow:0_0_0.75rem_rgba(250,250,250,1)]`,
                  `group-focus:[text-shadow:_0_0_1.25rem_rgba(10,10,10,1)]
                  dark:group-focus:[text-shadow:0_0_0.75rem_rgba(250,250,250,1)]`,
                  'transition-[text-shadow] duration-300',
                  activeLink?.href === href &&
                    `[text-shadow:_0_0_1.25rem_rgba(10,10,10,1)]
                    dark:[text-shadow:0_0_0.75rem_rgba(250,250,250,1)]`,
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
