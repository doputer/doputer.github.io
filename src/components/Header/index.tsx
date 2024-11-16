import dynamic from 'next/dynamic';

import GNB from '@/components/Header/GNB';
import Menu from '@/components/Header/Menu';
import config from '@/configs/config.json';
import Github from '@/components/Icon/github';

const ThemeSwitcher = dynamic(() => import('@/components/Header/ThemeSwitcher'));

export type Nav = { name: string; href: string };

const navList = [
  { name: config.title, href: '/' },
  { name: 'about', href: '/about' },
  { name: 'tags', href: '/tags' },
] satisfies Nav[];

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <GNB links={navList} />
      <div className="flex gap-4">
        <ThemeSwitcher />
        <a href={config.social.github} target="_blank">
          <Github className="size-6" />
        </a>
        <Menu links={navList} />
      </div>
    </header>
  );
};

export default Header;
