import { Fragment, useCallback } from 'react';

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
        {mdx.tableOfContents.items?.map((h1) => (
          <Fragment key={h1.url}>
            <li
              className={`cursor-pointer ${h1.url === activeHeadingId ? 'link' : ''}`}
              onClick={() => handleHeadingClick(h1.url)}
            >
              {h1.title}
            </li>
            {Object.prototype.hasOwnProperty.call(h1, 'items') &&
              h1.items.map((h2) => (
                <li
                  key={h2.url}
                  className={`cursor-pointer pl-4 ${h2.url === activeHeadingId ? 'link' : ''}`}
                  onClick={() => handleHeadingClick(h2.url)}
                >
                  {h2.title}
                </li>
              ))}
          </Fragment>
        ))}
      </ul>
    </nav>
  );
}

export default TOC;
