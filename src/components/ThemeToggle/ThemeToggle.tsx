'use client';
import Cookies from 'js-cookie';
import React from 'react';
import { Moon, Sun } from 'react-feather';

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
    <button
      className="flex justify-center items-center w-16 h-16 border-none rounded-full bg-transparent text-inherit cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800/30"
      aria-label="Toggle dark / light mode"
      onClick={handleClick}
    >
      {theme === 'light' ? <Sun size="1.5rem" /> : <Moon size="1.5rem" />}
      <VisuallyHidden>Toggle dark / light mode</VisuallyHidden>
    </button>
  );
}

export default ThemeToggle;
