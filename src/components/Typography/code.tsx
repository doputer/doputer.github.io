function code(props: React.HTMLAttributes<HTMLElement>) {
  return (
    <code
      className="rounded bg-light-background-code px-1 py-0.5 font-mono text-sm dark:bg-dark-background-code"
      {...props}
    />
  );
}

export default code;
