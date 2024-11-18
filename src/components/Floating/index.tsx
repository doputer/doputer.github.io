'use client';

import { ArrowUpIcon, TagIcon, XMarkIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';

import useMenu from '@/hooks/useMenu';
import useObserver from '@/hooks/useObserver';
import useScroll from '@/hooks/useScroll';
import type { Post } from '@/lib/MDX/types';

interface FloatingProps {
  toc: Post['toc'];
}

const Floating = ({ toc }: FloatingProps) => {
  const activeId = useObserver();
  const scrollToTarget = useScroll();
  const [open, toggleMenu] = useMenu();

  return (
    <div className="fixed bottom-4 right-4 space-y-2 xs:hidden">
      <div className="relative">
        <button
          className="rounded-full border border-line bg-white p-2 text-muted dark:bg-black"
          onClick={toggleMenu}
          aria-label="Open TOC Button"
        >
          <TagIcon className="size-5 text-muted" />
        </button>

        {open && (
          <div className="pointer-events-auto fixed left-0 top-0 z-10 h-full w-full bg-black/40 backdrop-blur-sm" />
        )}

        {open && (
          <button
            className="absolute bottom-0 right-0 z-20 rounded-full border border-line bg-white p-2 dark:bg-black"
            onClick={toggleMenu}
            aria-label="Close TOC Button"
          >
            <XMarkIcon className="size-5 text-muted" />
          </button>
        )}

        {open && (
          <div className="absolute bottom-full right-0 z-20 mb-2 rounded-lg border border-line bg-background py-2">
            {toc.length > 0 && (
              <ul className="max-h-96 overflow-y-scroll text-nowrap text-sm">
                <li className="px-6 py-2 font-medium">On this page</li>
                {toc.map(({ id, text, depth }) => (
                  <li
                    key={id}
                    className={clsx('px-6 py-2 font-light', {
                      'text-secondary': id === activeId,
                      'pl-10': depth === 3,
                    })}
                    onClick={() => scrollToTarget({ id })}
                  >
                    {text}
                  </li>
                ))}
              </ul>
            )}
            <div className="flex justify-end px-6 py-2">
              <button className="" onClick={() => scrollToTarget({ toTop: true })}>
                <ArrowUpIcon className="size-5 text-muted" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Floating;
