import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

import useTheme from '@/hooks/useTheme';

function Header() {
  const [toggleTheme] = useTheme();

  return (
    <header className="flex items-center justify-between">
      <a href="/">
        <div className="text-xl font-bold tracking-tight">Doputer</div>
      </a>
      <div className="flex items-center gap-4">
        <button onClick={toggleTheme} aria-label="theme_button">
          <SunIcon className="hidden h-6 w-6 dark:block" />
          <MoonIcon className="h-6 w-6 dark:hidden" />
        </button>
      </div>
    </header>
  );
}

export default Header;
