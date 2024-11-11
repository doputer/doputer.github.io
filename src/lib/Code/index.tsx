import { Code as Bright } from 'bright';

import { collapse } from '@/lib/Code/Collapse';
import { fold } from '@/lib/Code/Fold';
import darkTheme from '@/lib/Code/Theme/dark.json';
import lightTheme from '@/lib/Code/Theme/light.json';
import { titlebar } from '@/lib/Code/Titlebar';

Bright.theme = { light: lightTheme, dark: darkTheme };

const code = (props: React.HTMLAttributes<HTMLPreElement>) => {
  const extensions = [titlebar, fold, collapse];

  return <Bright className="!rounded-lg" extensions={extensions} {...props} />;
};

export default code;
