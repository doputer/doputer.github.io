function ol(props: React.OlHTMLAttributes<HTMLOListElement>) {
  return (
    <ol
      className="my-4 list-inside list-decimal leading-8 [&_ol]:my-0 [&_ol]:ml-4 [&_ul]:my-0 [&_ul]:ml-4"
      {...props}
    />
  );
}

export default ol;
