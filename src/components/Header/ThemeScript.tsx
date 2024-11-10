type Theme = 'light' | 'dark';

declare global {
  interface Window {
    __theme: Theme;
    __setTheme: (theme: Theme) => void;
    __setPreferredTheme: (theme: Theme) => void;
  }
}

const script = function () {
  window.__setTheme = function () {};

  function setTheme(newTheme: Theme) {
    window.__theme = newTheme;
    preferredTheme = newTheme;
    document.documentElement.dataset.theme = newTheme;
    window.__setTheme(newTheme);
  }

  let preferredTheme: Theme;

  try {
    preferredTheme = localStorage.getItem('theme') as Theme;
  } catch (error) {
    console.error(error);
    return;
  }

  window.__setPreferredTheme = function (newTheme) {
    setTheme(newTheme);

    try {
      localStorage.setItem('theme', newTheme);
    } catch (error) {
      console.error(error);
    }
  };

  const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

  darkQuery.addEventListener('change', function (e) {
    window.__setPreferredTheme(e.matches ? 'dark' : 'light');
  });

  setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
};

const ThemeScript = () => {
  return <script dangerouslySetInnerHTML={{ __html: `(${script})();` }}></script>;
};

export default ThemeScript;
