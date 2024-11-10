import { Code as Bright } from 'bright';

Bright.theme = {
  dark: 'one-dark-pro',
  light: 'one-dark-pro',
};

const code = (props: React.HTMLAttributes<HTMLPreElement>) => {
  return <Bright className="!rounded-lg" {...props} />;
};

export default code;
