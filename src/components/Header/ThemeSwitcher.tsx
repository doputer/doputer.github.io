'use client';

import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

import useTheme from '@/hooks/useTheme';

const ThemeSwitcher = () => {
  const toggleTheme = useTheme();

  return (
    <button onClick={toggleTheme} aria-label="Theme Button">
      <SunIcon className="hidden size-6 dark:block" />
      <MoonIcon className="size-6 dark:hidden" />
    </button>
  );
};

export default ThemeSwitcher;
