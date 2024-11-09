'use client';

import { useCallback } from 'react';

import useObserver from '@/hooks/useObserver';
import type { Post } from '@/lib/types';

interface TOCProps {
  toc: Post['toc'];
}

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
            className={`pl-${(depth - 2) * 4} cursor-pointer ${id === activeHeadingId ? 'link' : ''}`}
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
