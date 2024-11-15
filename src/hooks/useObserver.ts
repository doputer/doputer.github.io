import { useEffect, useState } from 'react';

const useObserver = () => {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveId(entry.target.id);
      });
    };

    const headings = Array.from(document.querySelectorAll('h2, h3'));
    const options = { root: null, rootMargin: `-32px 0px -80% 0px` };
    const observer = new IntersectionObserver(handleObserver, options);

    headings.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return activeId;
};

export default useObserver;
