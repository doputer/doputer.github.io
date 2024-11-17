import type { Extension } from 'bright';

const TitleBarContent: Extension['TitleBarContent'] = (props) => {
  const { title } = props;

  return <div className="w-full px-4 py-2">{title}</div>;
};

export const titlebar: Extension = {
  name: 'titlebar',
  TitleBarContent,
};
