function p(props: React.HtmlHTMLAttributes<HTMLParagraphElement>) {
  return <p className="mb-4 leading-loose [&:not(:first-child)]:mt-4" {...props} />;
}

export default p;
