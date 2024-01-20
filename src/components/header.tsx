import { GitHubLogoIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons';

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
          <SunIcon width={20} height={20} className="hidden dark:block" />
          <MoonIcon width={20} height={20} className="dark:hidden" />
        </button>
        <a
          href="https://github.com/doputer"
          target="_blank"
          rel="noreferrer"
          aria-label="github_anchor"
        >
          <GitHubLogoIcon width={20} height={20} />
        </a>
      </div>
    </header>
  );
}

export default Header;
