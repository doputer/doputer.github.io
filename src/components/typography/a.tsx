function p(props: React.HtmlHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className="font-medium text-link underline underline-offset-4" target="_blank" {...props} />
  );
}

export default p;
