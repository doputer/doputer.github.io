'use client';

import { useCallback } from 'react';

import clsx from 'clsx';

import useObserver from '@/hooks/useObserver';
import type { Post } from '@/lib/MDX/types';

interface TOCProps {
  toc: Post['toc'];
}

const TOC = ({ toc }: TOCProps) => {
  const activeId = useObserver();

  const handleClick = useCallback((id: string) => {
    const element = document.querySelector<HTMLHeadingElement>('#' + id);

    if (!(element instanceof HTMLHeadingElement)) return;

    element.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <nav className="absolute left-full hidden h-full xl:block">
      <ul className="sticky top-32 ml-8 flex flex-col text-nowrap border-l border-light-line pl-4 text-sm">
        <li className="py-1 font-medium">On this page</li>
        {toc.map(({ id, text, depth }) => (
          <li
            key={id}
            className={clsx('cursor-pointer py-1 font-light', {
              link: id === activeId,
              'pl-4': depth === 3,
            })}
            onClick={() => handleClick(id)}
          >
            {text}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TOC;
