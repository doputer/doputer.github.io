'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import clsx from 'clsx';

import type { Nav } from '@/components/Header';

interface GNBProps {
  links: Nav[];
}

const linkClasses = (enable: boolean) => clsx('capitalize hover:text', { text: enable });

const GNB = ({ links }: GNBProps) => {
  const pathname = usePathname();
  const [homeLink, postLink, ...restLinks] = links;

  return (
    <nav className="flex gap-4 text-lg font-medium text md:text-muted">
      <Link
        key={homeLink.name}
        href={homeLink.href}
        className={linkClasses(homeLink.href === pathname)}
      >
        {homeLink.name}
      </Link>
      <Link
        key={postLink.name}
        href={postLink.href}
        className={clsx(
          'hidden md:block',
          linkClasses([homeLink, ...restLinks].every(({ href }) => href !== pathname))
        )}
      >
        {postLink.name}
      </Link>
      {restLinks.map(({ name, href }) => (
        <Link
          key={name}
          href={href}
          className={clsx('hidden md:block', linkClasses(href === pathname))}
        >
          {name}
        </Link>
      ))}
    </nav>
  );
};

export default GNB;
