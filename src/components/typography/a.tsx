function a(props: React.HtmlHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className="font-medium text-light-link underline underline-offset-4 dark:text-dark-link"
      target="_blank"
      {...props}
    />
  );
}

export default a;
