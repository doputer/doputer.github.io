'use client';

import { useEffect, useState } from 'react';

import Giscus from '@giscus/react';

import meta from '@/configs/metadata.json';

function Comment() {
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
        repo={meta.comment.repo as `${string}/${string}`}
        repoId={meta.comment.repoId}
        category={meta.comment.category}
        categoryId={meta.comment.categoryId}
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

export default Comment;
