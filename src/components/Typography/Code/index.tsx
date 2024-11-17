import { Code as Bright } from 'bright';

import { collapse } from '@/components/Typography/Code/Collapse';
import { fold } from '@/components/Typography/Code/Fold';
import { mark } from '@/components/Typography/Code/Mark';
import { titlebar } from '@/components/Typography/Code/Titlebar';

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
