function code(props: React.HtmlHTMLAttributes<HTMLElement>) {
  return (
    <code
      className="rounded bg-background-light px-1 py-0.5 font-sans text-base font-semibold dark:text-dark"
      {...props}
    />
  );
}

export default code;
