import type { Extension } from 'bright';

const TitleBarContent: Extension['TitleBarContent'] = (props) => {
  const { title } = props;

  return <div className="w-full px-4 py-2">{title}</div>;
};

export const titlebar: Extension = {
  name: 'title',
  TitleBarContent,
  beforeHighlight: (props, annotations) => {
    if (annotations.length > 0) return { ...props, title: annotations[0].query };
  },
};
