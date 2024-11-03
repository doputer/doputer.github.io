import { useEffect, useState } from 'react';

const useTheme = (): [() => void] => {
  const [theme, setTheme] = useState('');

  const next = (theme: string) => (theme === 'light' ? 'dark' : 'light');

  const toggleTheme = () => {
    setTheme(next(theme));
    window.__setTheme(next(theme));
    window.dispatchEvent(new StorageEvent('storage', { key: next(theme) }));
  };

  useEffect(() => {
    setTheme(window.__theme);
  }, []);

  return [toggleTheme];
};

export default useTheme;
