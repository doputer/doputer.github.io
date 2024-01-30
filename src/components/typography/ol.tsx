function ol(props: React.HtmlHTMLAttributes<HTMLOListElement>) {
  return <ol className="my-4 ml-4 list-decimal text-lg [&>li]:mt-2" {...props} />;
}

export default ol;
