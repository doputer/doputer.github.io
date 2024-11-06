import { Code } from 'bright';

Code.theme = {
  dark: 'dracula-soft',
  light: 'dracula-soft',
};

const pre = (props: React.HTMLAttributes<HTMLPreElement>) => {
  return <Code {...props} />;
};

export default pre;
