import { Code as Bright } from 'bright';

import { collapse } from '@/lib/Code/Collapse';
import { fold } from '@/lib/Code/Fold';
import { titlebar } from '@/lib/Code/Titlebar';

Bright.theme = {
  dark: 'one-dark-pro',
  light: 'one-dark-pro',
};

const code = (props: React.HTMLAttributes<HTMLPreElement>) => {
  const extensions = [titlebar, fold, collapse];

  return <Bright className="!rounded-lg" extensions={extensions} {...props} />;
};

export default code;
