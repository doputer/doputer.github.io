function blockquote(props: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) {
  return (
    <blockquote
      className="borderl-8 box my-4 space-y-4 border-l-8 border-light-line p-4 italic dark:border-dark-line [&>p]:m-0"
      {...props}
    />
  );
}

export default blockquote;
