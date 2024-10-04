'use client';
import Cookies from 'js-cookie';
import React from 'react';

import ThemeIcon from '@/components/ThemeIcon';
import VisuallyHidden from '@/components/VisuallyHidden';

interface ThemeToggleProps {
  initialTheme: 'light' | 'dark';
}

function ThemeToggle({ initialTheme }: ThemeToggleProps) {
  const [theme, setTheme] = React.useState(initialTheme);

  function handleClick(): void {
    const nextTheme = theme === 'light' ? 'dark' : 'light';

    Cookies.set('color-theme', nextTheme, {
      expires: 1000,
    });

    const root = document.documentElement;

    root.setAttribute('data-color-theme', nextTheme);

    if (nextTheme === 'dark') {
      root.classList.remove('light');
      root.classList.add('dark');
    } else {
      root.removeAttribute('class');
    }

    setTheme(nextTheme);
  }

  return (
    <div className="relative z-0 shrink-0 rounded-full bg-neutral-200 p-px shadow-sm shadow-neutral-400 dark:border dark:border-neutral-600 dark:bg-neutral-800 dark:shadow-black">
      <button
        className="group relative z-20 rounded-full bg-gradient-to-tl from-neutral-50 via-neutral-200 to-neutral-50 p-2 outline-none ring-neutral-950 focus-visible:ring-1  dark:from-neutral-925 dark:via-neutral-900 dark:to-neutral-925 dark:ring-neutral-50"
        aria-label="Theme Control"
        onClick={handleClick}
      >
        <ThemeIcon theme={theme} />
        <VisuallyHidden>Toggle dark / light mode</VisuallyHidden>
      </button>
      <div className="absolute left-0 top-0 -z-10 h-full w-full rounded-full bg-gradient-to-br from-transparent from-30% via-neutral-300 to-transparent to-60% dark:via-neutral-750" />
    </div>
  );
}

export default ThemeToggle;
