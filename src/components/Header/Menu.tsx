'use client';

import Link from 'next/link';

import clsx from 'clsx';
import { AlignJustify, X } from 'lucide-react';

import type { Nav } from '@/components/Header';
import useMenu from '@/hooks/useMenu';

interface MenuProps {
  links: Nav[];
}

const Menu = ({ links }: MenuProps) => {
  const [, ...restLinks] = links;
  const [open, toggleMenu] = useMenu();

  return (
    <div className="relative xs:hidden">
      <button
        className={clsx('flex items-center', { invisible: open })}
        onClick={toggleMenu}
        aria-label="Open Menu Button"
      >
        <AlignJustify className="size-6" />
      </button>

      {open && (
        <div className="fixed left-0 top-0 z-10 h-full w-full bg-black/40 backdrop-blur-sm" />
      )}

      {open && (
        <button className="absolute top-0 z-20" onClick={toggleMenu} aria-label="Close Menu Button">
          <X className="size-6 text-white" />
        </button>
      )}

      {open && (
        <div className="absolute right-0 top-full z-20 mt-2 min-w-48 rounded-lg border border-line bg-background px-4 py-2">
          <ul>
            {restLinks.map(({ name, href }) => (
              <li key={name} className="p-2 font-light" onClick={toggleMenu}>
                <Link href={href} className="w-full rounded-lg text-sm capitalize hover:bg-surface">
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Menu;
