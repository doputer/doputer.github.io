'use client';

import { useEffect, useState } from 'react';

import Giscus from '@giscus/react';

import meta from '@/configs/metadata.json';

const Comment = () => {
  const [theme, setTheme] = useState(global.window?.__theme || 'light');

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
          setTheme(global.window?.__theme);
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => {
      observer.disconnect();
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
};

export default Comment;
