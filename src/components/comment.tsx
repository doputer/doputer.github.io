import { useEffect, useState } from 'react';

import Giscus from '@giscus/react';

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
      repo="doputer/doputer.github.io"
      repoId="R_kgDOGOk5Dg"
      category="Comments"
      categoryId="DIC_kwDOGOk5Ds4CcufD"
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
