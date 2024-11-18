import clsx from 'clsx/lite';

// Base
const HEADING = clsx('mb-4 mt-8 scroll-mt-4 font-semibold');
const LIST = clsx('my-4 list-inside leading-8 [&_ol]:my-0 [&_ol]:ml-4 [&_ul]:my-0 [&_ul]:ml-4');

// Element
export const h2 = clsx(HEADING, 'text-2xl');
export const h3 = clsx(HEADING, 'text-xl');
export const blockquote = clsx('my-4 space-y-4 rounded-lg bg-surface p-4 [&>p]:m-0');
export const code = clsx('rounded bg-accent px-1 py-0.5 text-sm');
export const ol = clsx(LIST, 'list-decimal');
export const ul = clsx(LIST, 'list-disc');
export const p = clsx('my-4 leading-8');
export const table = clsx('w-full divide-y divide-line text-left');
export const th = clsx('p-2');
export const td = clsx('p-2');
export const a = clsx('font-medium text-secondary underline underline-offset-4');
export const strong = clsx('font-semibold');
export const pre = clsx('!rounded-lg border border-line font-mono text-sm leading-6 [&_*]:z-0');
export const img = clsx('m-auto my-4 h-auto w-fit rounded');
