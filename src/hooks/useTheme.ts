import { useEffect, useState } from 'react';

declare global {
  interface Window {
    __theme: string;
    __setTheme: (theme: string) => void;
  }
}

const useTheme = (): [() => void] => {
  const [theme, setTheme] = useState('');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    window.__setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    setTheme(window.__theme);
  }, []);

  return [toggleTheme];
};

export default useTheme;
