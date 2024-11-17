import clsx from 'clsx/lite';

// Base
const HEADING = 'mb-4 mt-8 scroll-mt-4 font-semibold';
const LIST = 'my-4 list-inside leading-8 [&_ol]:my-0 [&_ol]:ml-4 [&_ul]:my-0 [&_ul]:ml-4';

// Element
export const h2 = clsx(HEADING, 'text-2xl');
export const h3 = clsx(HEADING, 'text-xl');
export const blockquote = 'box my-4 space-y-4 p-4 [&>p]:m-0';
export const code = 'rounded bg-light-code-inline px-1 py-0.5 text-sm dark:bg-dark-code-inline';
export const ol = clsx(LIST, 'list-decimal');
export const ul = clsx(LIST, 'list-disc');
export const p = 'my-4 leading-8';
export const table = 'w-full divide-y divide-light-line dark:divide-dark-line text-left';
export const th = 'p-2';
export const td = 'p-2';
export const a = 'font-medium text-light-link underline underline-offset-4 dark:text-dark-link';
export const strong = 'font-semibold';
export const img = 'm-auto my-4 h-auto w-fit';
