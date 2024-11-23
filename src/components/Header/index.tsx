import GNB from '@/components/Header/GNB';
import Menu from '@/components/Header/Menu';
import Github from '@/components/Icon/github';
import config from '@/configs/config.json';
import ThemeSwitch from '@/components/ThemeSwitch';

export type Nav = { name: string; href: string };

const navList = [
  { name: config.name, href: '/' },
  { name: 'about', href: '/about' },
  { name: 'tags', href: '/tags' },
] satisfies Nav[];

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <GNB links={navList} />
      <div className="flex gap-4">
        <ThemeSwitch position="header" />
        <a href={config.social.github} target="_blank" aria-label="GitHub Link">
          <Github className="size-6" />
        </a>
        <Menu links={navList} />
      </div>
    </header>
  );
};

export default Header;
