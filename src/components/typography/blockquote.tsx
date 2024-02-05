function blockquote(props: React.HtmlHTMLAttributes<HTMLQuoteElement>) {
  return (
    <blockquote
      className="my-4 rounded-lg bg-background-light p-4 italic dark:bg-background-dark [&>p:not(:last-child)]:mb-4 [&>p]:m-0"
      {...props}
    />
  );
}

export default blockquote;
