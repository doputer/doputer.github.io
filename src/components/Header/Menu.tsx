'use client';

import { useEffect, useState } from 'react';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

interface MenuProps {
  links: string[];
}

function Menu({ links }: MenuProps) {
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
            <button className="flex items-center" onClick={toggleMenu} aria-label="close_button">
              <XMarkIcon className="size-6 text-white" />
            </button>
            <ul className="absolute right-0 top-full mt-2 flex min-w-48 flex-col rounded-lg bg-white p-2 dark:text-dark">
              {links.map((link) => (
                <li key={link} className="text-lg" onClick={toggleMenu}>
                  <Link
                    href={`/${link.toLowerCase()}`}
                    className="block w-full rounded-lg px-4 py-2 hover:bg-light-background"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <button className="flex items-center" onClick={toggleMenu} aria-label="menu_button">
          <Bars3Icon className="size-6" />
        </button>
      )}
    </div>
  );
}

export default Menu;
