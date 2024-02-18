import { useEffect, useState } from 'react';

import Giscus from '@giscus/react';

import useSiteMetadata from '@/hooks/useSiteMetadata';

export default function Comment() {
  const siteMetadata = useSiteMetadata();
  const [theme, setTheme] = useState('');

  useEffect(() => {
    setTheme(window.__theme);

    const handleStorageChange = (event: StorageEvent) => {
      setTheme(event.key || window.__theme);
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <div>
      <Giscus
        id="comments"
        repo={siteMetadata.comment.repo}
        repoId={siteMetadata.comment.repoId}
        category={siteMetadata.comment.category}
        categoryId={siteMetadata.comment.categoryId}
        mapping="title"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={theme}
        lang="ko"
        loading="lazy"
      />
    </div>
  );
}
