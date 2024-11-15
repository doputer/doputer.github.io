import type { Extension } from 'bright';

const TitleBarContent: Extension['TitleBarContent'] = (props) => {
  const { title } = props;

  return (
    <div className="w-full bg-light-background-pre px-4 py-2 dark:bg-dark-background-pre">
      {title}
    </div>
  );
};

export const titlebar: Extension = {
  name: 'titlebar',
  TitleBarContent,
};
