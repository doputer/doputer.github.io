function p(props: React.HtmlHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className="font-medium text-link-light underline underline-offset-4 dark:text-link-dark"
      target="_blank"
      {...props}
    />
  );
}

export default p;
