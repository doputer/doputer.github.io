declare global {
  interface Window {
    __theme: string;
    __setTheme: (theme: string) => void;
  }
}

const script = () => {
  try {
    window.addEventListener('DOMContentLoaded', () => {
      const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const theme = localStorage.getItem('theme') || (darkQuery.matches ? 'dark' : 'light');

      window.__setTheme = (newTheme) => {
        if (newTheme === 'dark') document.body.classList.add('dark');
        else document.body.classList.remove('dark');

        localStorage.setItem('theme', newTheme);

        window.__theme = newTheme;
      };

      darkQuery.addEventListener('change', (event) => {
        window.__setTheme(event.matches ? 'dark' : 'light');
      });

      window.__setTheme(theme);
    });
  } catch (error) {
    console.log(error);
  }
};

const ThemeScript = () => {
  return <script dangerouslySetInnerHTML={{ __html: `(${script})();` }}></script>;
};

export default ThemeScript;
