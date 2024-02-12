function code(props: React.HTMLAttributes<HTMLElement>) {
  return (
    <code
      className="rounded bg-light-code-background px-1 py-0.5 font-sans text-light-code dark:bg-dark-code-background dark:text-dark-code"
      {...props}
    />
  );
}

export default code;
