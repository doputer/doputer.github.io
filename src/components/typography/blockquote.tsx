function blockquote(props: React.HtmlHTMLAttributes<HTMLQuoteElement>) {
  return (
    <blockquote className="mt-4 border-l-2 border-dark pl-4 italic dark:border-light" {...props} />
  );
}

export default blockquote;
