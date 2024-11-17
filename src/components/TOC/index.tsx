'use client';

import clsx from 'clsx';

import useObserver from '@/hooks/useObserver';
import useScroll from '@/hooks/useScroll';
import type { Post } from '@/lib/MDX/types';

interface TOCProps {
  toc: Post['toc'];
}

const TOC = ({ toc }: TOCProps) => {
  const activeId = useObserver();
  const scrollToTarget = useScroll();

  return (
    <aside className="absolute left-full hidden h-full xl:block">
      <ul className="sticky top-32 ml-8 flex flex-col text-nowrap border-l border-line pl-4 text-sm">
        <li className="py-1 font-medium">On this page</li>
        {toc.map(({ id, text, depth }) => (
          <li
            key={id}
            className={clsx('cursor-pointer py-1 font-light', {
              'text-secondary': id === activeId,
              'pl-4': depth === 3,
            })}
            onClick={() => scrollToTarget({ id })}
          >
            {text}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default TOC;
