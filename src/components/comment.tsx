import { useEffect, useState } from 'react';

import Giscus from '@giscus/react';
import { graphql, useStaticQuery } from 'gatsby';

export default function Comment() {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          comment {
            repo
            repoId
            category
            categoryId
          }
        }
      }
    }
  `);
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
      repo={siteMetadata.comment.repo}
      repoId={siteMetadata.comment.repoId}
      category={siteMetadata.comment.category}
      categoryId={siteMetadata.comment.categoryId}
      mapping="og:title"
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
