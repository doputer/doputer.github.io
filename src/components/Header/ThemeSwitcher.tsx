'use client';

import { useEffect, useState } from 'react';

import { Moon, Sun } from 'lucide-react';

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
      <Sun className="hidden size-6 dark:block" />
      <Moon className="size-6 dark:hidden" />
    </button>
  );
};

export default SetTheme;
