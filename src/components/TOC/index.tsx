'use client';

import { useCallback } from 'react';

import useObserver from '@/hooks/useObserver';
import type { Post } from '@/lib/MDX/types';

interface TOCProps {
  toc: Post['toc'];
}

const paddingVariants: Record<number, string> = {
  2: 'pl-0',
  3: 'pl-4',
};

const TOC = ({ toc }: TOCProps) => {
  const { activeHeadingId } = useObserver();

  const handleHeadingClick = useCallback((id: string) => {
    const element = document.querySelector<HTMLHeadingElement>('#' + id);

    if (!(element instanceof HTMLHeadingElement)) return;

    window.scrollTo({
      top: element.offsetTop + 180,
      behavior: 'smooth',
    });
  }, []);

  return (
    <nav className="absolute left-full hidden h-full xl:block">
      <ul className="sticky top-32 ml-8 flex flex-col gap-1 text-nowrap">
        {toc.map(({ id, text, depth }) => (
          <li
            key={id}
            className={`${paddingVariants[depth]} cursor-pointer ${id === activeHeadingId ? 'link' : ''}`}
            onClick={() => handleHeadingClick(id)}
          >
            {text}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TOC;
