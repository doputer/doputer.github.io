function blockquote(props: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) {
  return <blockquote className="box my-4 space-y-4 p-4 italic [&>p]:m-0" {...props} />;
}

export default blockquote;
