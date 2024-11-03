import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

import Menu from '@/components/menu';
import meta from '@/configs/metadata.json';

const LINKS = ['About', 'Tags'];

function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link href="/" className="text-xl font-bold tracking-tight">
        {meta.title}
      </Link>
      <nav className="flex gap-4">
        {LINKS.map((link) => (
          <Link key={link} href={`/${link.toLowerCase()}`} className="hidden xs:block">
            {link}
          </Link>
        ))}
        <button className="flex items-center" aria-label="theme_button">
          <SunIcon className="hidden size-6 dark:block" />
          <MoonIcon className="size-6 dark:hidden" />
        </button>
        <Menu links={LINKS} />
      </nav>
    </header>
  );
}

export default Header;
