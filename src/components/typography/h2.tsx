function h2(props: React.HtmlHTMLAttributes<HTMLHeadingElement>) {
  return <h2 className="mb-4 text-2xl font-bold [&:not(:first-child)]:mt-4" {...props} />;
}

export default h2;
