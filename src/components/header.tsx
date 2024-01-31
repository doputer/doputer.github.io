import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { Link } from 'gatsby';

import useTheme from '@/hooks/useTheme';

function Header() {
  const [toggleTheme] = useTheme();

  return (
    <header className="flex items-center justify-between">
      <Link to="/" className="text-xl font-bold tracking-tight">
        Doputer
      </Link>
      <button className="flex items-center gap-4" onClick={toggleTheme} aria-label="theme_button">
        <SunIcon className="hidden h-6 w-6 dark:block" />
        <MoonIcon className="h-6 w-6 dark:hidden" />
      </button>
    </header>
  );
}

export default Header;
