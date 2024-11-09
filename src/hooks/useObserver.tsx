import { useEffect, useState } from 'react';

const useObserver = () => {
  const [headings, setHeadings] = useState<HTMLHeadingElement[]>([]);
  const [activeHeadingId, setActiveHeadingId] = useState('');

  useEffect(() => {
    setHeadings(Array.from(document.querySelectorAll('h2, h3')));
  }, []);

  useEffect(() => {
    if (!headings.length) return;

    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveHeadingId(entry.target.id);
      });
    };
    const options = { root: null, rootMargin: `-32px 0px -80% 0px` };
    const observer = new IntersectionObserver(handleObserver, options);

    headings.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [headings]);

  return { activeHeadingId };
};

export default useObserver;
