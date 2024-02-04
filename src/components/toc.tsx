import { useCallback } from 'react';

import useHeadingObserver from '@/hooks/useHeadingObserver';

function TOC({ mdx }: Queries.PostQuery) {
  const { activeHeadingId } = useHeadingObserver();

  const handleHeadingClick = useCallback((id: string) => {
    const element = document.querySelector<HTMLHeadingElement>(id);

    if (!(element instanceof HTMLHeadingElement)) return;

    window.scrollTo({
      top: element.offsetTop + 180,
      behavior: 'smooth',
    });
  }, []);

  return (
    <nav className="absolute left-full hidden h-full xl:block">
      <ul className="sticky top-32 ml-8 flex flex-col gap-1 text-nowrap">
        {mdx.tableOfContents.items.map((el) => (
          <li
            key={el.url}
            className={`cursor-pointer ${el.url === activeHeadingId ? 'text-link-light dark:text-link-dark' : ''}`}
            onClick={() => handleHeadingClick(el.url)}
          >
            {el.title}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default TOC;
