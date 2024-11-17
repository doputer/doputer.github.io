import type { PropsWithChildren } from 'react';

import { cn } from '@/utils/cn';

interface CalloutProps {
  type?: 'tip';
  className?: string | undefined;
}

const calloutClasses = {
  default: 'bg-[#eab30824]',
  tip: 'bg-[#2d9cdb24]',
} as const;

const Callout = (props: PropsWithChildren<CalloutProps>) => {
  const className = cn(props.className, calloutClasses[props.type ?? 'default']);

  return <div {...props} className={className} />;
};

export default Callout;
