import Link from 'next/link';

import Menu from '@/components/Header/Menu';
import Switcher from '@/components/Header/ThemeSwitcher';
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
        <Switcher />
        <Menu links={LINKS} />
      </nav>
    </header>
  );
}

export default Header;
