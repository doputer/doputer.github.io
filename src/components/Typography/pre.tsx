import { Code } from 'bright';

Code.theme = {
  dark: 'one-dark-pro',
  light: 'one-dark-pro',
};

const pre = (props: React.HTMLAttributes<HTMLPreElement>) => {
  return <Code className="!rounded-lg" {...props} />;
};

export default pre;
