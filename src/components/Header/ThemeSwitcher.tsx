'use client';

import { useEffect, useState } from 'react';

import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

const SetTheme = () => {
  const [theme, setTheme] = useState(global.window?.__theme || 'light');

  const toggleTheme = () => {
    global.window?.__setPreferredTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    global.window.__setTheme = setTheme;
  }, []);

  return (
    <button onClick={toggleTheme}>
      <SunIcon className="hidden size-6 dark:block" />
      <MoonIcon className="size-6 dark:hidden" />
    </button>
  );
};

export default SetTheme;
