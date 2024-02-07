import { useEffect, useState } from 'react';

import Giscus from '@giscus/react';

import metaConfig from '../../gatsby-meta-config';

export default function Comment() {
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
    <Giscus
      id="comments"
      repo={metaConfig.comment.repo}
      repoId={metaConfig.comment.repoId}
      category={metaConfig.comment.category}
      categoryId={metaConfig.comment.categoryId}
      mapping="pathname"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={theme}
      lang="ko"
      loading="lazy"
    />
  );
}
