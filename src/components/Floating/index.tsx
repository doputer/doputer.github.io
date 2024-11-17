'use client';

import clsx from 'clsx';
import { TableOfContents, X } from 'lucide-react';

import useMenu from '@/hooks/useMenu';
import useScroll from '@/hooks/useScroll';
import type { Post } from '@/lib/MDX/types';

interface FloatingProps {
  toc: Post['toc'];
}

const Floating = ({ toc }: FloatingProps) => {
  const scrollToTarget = useScroll();
  const [open, toggleMenu] = useMenu();

  return (
    <div className="fixed bottom-4 right-2 space-y-2 xs:hidden">
      <div className="relative">
        {open && (
          <>
            <div className="fixed left-0 top-0 z-10 h-full w-full bg-black/40 backdrop-blur-sm" />
            <button
              className="absolute bottom-0 right-0 z-20 rounded-full border border-line bg-white p-2"
              onClick={toggleMenu}
            >
              <X className="size-5" />
            </button>
            <div className="absolute bottom-full right-0 z-20 mb-4 rounded-lg bg-white p-2">
              <ul className="text-nowrap text-sm">
                <li className="px-4 py-2 font-medium">On this page</li>
                {toc.map(({ id, text, depth }) => (
                  <li
                    key={id}
                    className={clsx('cursor-pointer px-4 py-2 font-light', {
                      'pl-8': depth === 3,
                    })}
                    onClick={() => scrollToTarget({ id })}
                  >
                    {text}
                  </li>
                ))}
                <hr className="px-4" />
                <li className="px-4 py-2" onClick={() => scrollToTarget({ toTop: true })}>
                  위로
                </li>
              </ul>
            </div>
          </>
        )}
        <button
          className="rounded-full border border-line bg-white p-2 text-muted dark:bg-black"
          onClick={toggleMenu}
          aria-label="TOC Button"
        >
          <TableOfContents className="size-5" />
        </button>
      </div>
    </div>
  );
};

export default Floating;
