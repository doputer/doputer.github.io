function ul(props: React.HTMLAttributes<HTMLUListElement>) {
  return (
    <ul
      className="my-4 list-inside list-disc leading-8 [&_ol]:my-0 [&_ol]:ml-4 [&_ul]:my-0 [&_ul]:ml-4"
      {...props}
    />
  );
}

export default ul;
