function ul(props: React.HTMLAttributes<HTMLUListElement>) {
  return <ul className="my-4 list-inside list-disc text-lg [&_ul]:my-0 [&_ul]:ml-4" {...props} />;
}

export default ul;
