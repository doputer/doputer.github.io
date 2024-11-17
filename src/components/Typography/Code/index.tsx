import { Code as Bright } from 'bright';

import { collapse } from '@/components/Typography/Code/Collapse';
import { fold } from '@/components/Typography/Code/Fold';
import { mark } from '@/components/Typography/Code/Mark';
import { titlebar } from '@/components/Typography/Code/Titlebar';

Bright.theme = { light: 'github-light', dark: 'github-dark-dimmed' };

const code = (props: React.HTMLAttributes<HTMLPreElement>) => {
  const extensions = [titlebar, mark, fold, collapse];

  return <Bright extensions={extensions} {...props} />;
};

export default code;
