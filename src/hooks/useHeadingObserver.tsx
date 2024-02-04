import { useEffect, useState } from 'react';

const useHeadingObserver = () => {
  const [headings, setHeadings] = useState<HTMLHeadingElement[]>([]);
  const [activeHeadingId, setActiveHeadingId] = useState<string>('');

  useEffect(() => {
    setHeadings(Array.from(document.querySelectorAll('h2')));
  }, []);

  useEffect(() => {
    if (!headings) return;

    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveHeadingId('#' + entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: `-32px 0px -80% 0px`,
    });

    headings.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [headings]);

  return { activeHeadingId };
};

export default useHeadingObserver;
