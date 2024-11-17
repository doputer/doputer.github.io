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
  const [link, ...restLinks] = links;

  return (
    <nav className="flex gap-4 font-medium text xs:text-muted">
      <Link
        key={link.name}
        href={link.href}
        className={linkClasses(restLinks.every(({ href }) => href !== pathname))}
      >
        {link.name}
      </Link>
      {restLinks.map(({ name, href }) => (
        <Link
          key={name}
          href={href}
          className={clsx('hidden xs:block', linkClasses(href === pathname))}
        >
          {name}
        </Link>
      ))}
    </nav>
  );
};

export default GNB;
