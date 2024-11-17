import type { Extension } from 'bright';

const TitleBarContent: Extension['TitleBarContent'] = (props) => {
  const { title } = props;

  return (
    <div className="w-full bg-light-code-title px-4 py-2 dark:bg-dark-code-title">{title}</div>
  );
};

export const titlebar: Extension = {
  name: 'titlebar',
  TitleBarContent,
};
