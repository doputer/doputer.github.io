'use client';

import Link from 'next/link';

import { useEffect, useState } from 'react';

import type { Nav } from '@/components/Header';

import { AlignJustify, X } from 'lucide-react';

interface MenuProps {
  links: Nav[];
}

const Menu = ({ links }: MenuProps) => {
  const [, ...restLinks] = links;
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'visible';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  return (
    <div className="relative z-10 xs:hidden">
      {open ? (
        <>
          <div className="fixed left-0 top-0 h-full w-full bg-dimmed backdrop-blur-sm"></div>
          <div className="relative">
            <button className="flex items-center" onClick={toggleMenu} aria-label="Close">
              <X className="size-6 text-white" />
            </button>
            <ul className="absolute right-0 top-full mt-2 flex min-w-48 flex-col rounded-lg bg-white p-2 dark:text-dark">
              {restLinks.map(({ name, href }) => (
                <li key={name} className="text-lg" onClick={toggleMenu}>
                  <Link
                    href={href}
                    className="block w-full rounded-lg px-4 py-2 capitalize hover:bg-light-background"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <button className="flex items-center" onClick={toggleMenu} aria-label="Open">
          <AlignJustify className="size-6" />
        </button>
      )}
    </div>
  );
};

export default Menu;
