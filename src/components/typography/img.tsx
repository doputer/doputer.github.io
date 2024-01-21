function img(props: React.HtmlHTMLAttributes<HTMLImageElement>) {
  return <img className="m-auto mb-4 [&:not(:first-child)]:mt-4" {...props} />;
}

export default img;
