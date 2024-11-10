import { Code, type Extension } from 'bright';

import CopyButton from '@/lib/Code/Titlebar/CopyButton';
import Language from '@/lib/Code/Titlebar/Language';

const TitleBarContent: Extension['TitleBarContent'] = (props) => {
  const { title, lang } = props;

  if (title === ' ') return <Language lang={lang} />;

  return (
    <div className="relative px-4 py-2 text-light">
      {title}
      <Language lang={lang} />
    </div>
  );
};

const Pre: Extension['Pre'] = (props) => {
  const Pre = Code.Pre as NonNullable<Extension['Pre']>;

  return (
    <div className="relative [&>pre]:!pt-8">
      <CopyButton text={props.code} />
      <Pre {...props} />
    </div>
  );
};

const beforeHighlight: Extension['beforeHighlight'] = (props, annotations) => {
  if (!props.title) props.title = ' ';
  if (!props.lang) props.lang = 'txt';

  if (annotations.length > 0) return { ...props, title: annotations[0].query };
  return { ...props };
};

export const titlebar: Extension = {
  name: 'titlebar',
  TitleBarContent,
  Pre,
  beforeHighlight,
};
