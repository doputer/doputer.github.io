import { Code as Bright } from 'bright';

import { collapse } from '@/lib/Code/Collapse';
import { fold } from '@/lib/Code/Fold';
import { mark } from '@/lib/Code/Mark';
import { titlebar } from '@/lib/Code/Titlebar';

Bright.theme = { light: 'github-light', dark: 'github-dark-dimmed' };

const code = (props: React.HTMLAttributes<HTMLPreElement>) => {
  const extensions = [titlebar, mark, fold, collapse];

  return (
    <Bright
      className="!rounded-lg border border-light-line font-mono text-sm leading-6 dark:border-dark-line"
      extensions={extensions}
      {...props}
    />
  );
};

export default code;
