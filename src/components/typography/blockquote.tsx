function blockquote(props: React.HtmlHTMLAttributes<HTMLQuoteElement>) {
  return (
    <blockquote
      className="borderl-8 my-4 space-y-4 rounded-r-lg border-l-8 border-light-line bg-light-background p-4 italic dark:border-dark-line dark:bg-dark-background [&>p]:m-0"
      {...props}
    />
  );
}

export default blockquote;
