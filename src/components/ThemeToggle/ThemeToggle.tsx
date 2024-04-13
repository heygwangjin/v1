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
    <div className="bg-neutral-200 dark:bg-neutral-800 p-px rounded-full relative shadow-sm shadow-neutral-400 dark:shadow-black z-0 shrink-0">
      <button
        className="bg-gradient-to-tl from-neutral-50 dark:from-neutral-925 via-neutral-200 dark:via-neutral-900 to-neutral-50 dark:to-neutral-925 p-2 rounded-full relative z-20 group  outline-none focus-visible:ring-1 ring-neutral-950 dark:ring-neutral-50"
        aria-label="Theme Control"
        onClick={handleClick}
      >
        <ThemeIcon theme={theme} />
        <VisuallyHidden>Toggle dark / light mode</VisuallyHidden>
      </button>
      <div className="absolute top-0 left-0 h-full w-full rounded-full bg-gradient-to-br from-transparent from-30% via-neutral-300 dark:via-neutral-750 to-60% to-transparent -z-10" />
    </div>
  );
}

export default ThemeToggle;
