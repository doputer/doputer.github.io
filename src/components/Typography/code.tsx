function code(props: React.HTMLAttributes<HTMLElement>) {
  return (
    <code
      className="rounded bg-light-code-inline px-1 py-0.5 font-mono text-sm dark:bg-dark-code-inline"
      {...props}
    />
  );
}

export default code;
