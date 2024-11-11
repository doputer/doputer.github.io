import { Code as Bright } from 'bright';

import { fold } from '@/lib/Code/Fold';
import { titlebar } from '@/lib/Code/Titlebar';

Bright.theme = {
  dark: 'one-dark-pro',
  light: 'one-dark-pro',
};

const code = (props: React.HTMLAttributes<HTMLPreElement>) => {
  return <Bright className="!rounded-lg" extensions={[titlebar, fold]} {...props} />;
};

export default code;
