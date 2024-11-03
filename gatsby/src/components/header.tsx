import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { Link } from 'gatsby';

import Menu from '@/components/menu';
import useSiteMetadata from '@/hooks/useSiteMetadata';
import useTheme from '@/hooks/useTheme';

function Header() {
  const siteMetadata = useSiteMetadata();
  const [toggleTheme] = useTheme();
  const links = ['About', 'Tags'];

  return (
    <header className="flex items-center justify-between">
      <Link to="/" className="text-xl font-bold tracking-tight">
        {siteMetadata.title}
      </Link>
      <nav className="flex gap-4">
        {links.map((link) => (
          <Link key={link} to={`/${link.toLowerCase()}`} className="hidden xs:block">
            {link}
          </Link>
        ))}
        <button className="flex items-center" onClick={toggleTheme} aria-label="theme_button">
          <SunIcon className="hidden size-6 dark:block" />
          <MoonIcon className="size-6 dark:hidden" />
        </button>
        <Menu links={links} />
      </nav>
    </header>
  );
}

export default Header;
