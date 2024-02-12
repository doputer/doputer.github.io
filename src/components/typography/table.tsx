function table(props: React.HtmlHTMLAttributes<HTMLTableElement>) {
  return (
    <table
      className="my-4 w-full divide-y divide-light-line text-lg dark:divide-dark-line [&_td]:p-2 [&_th]:p-2"
      {...props}
    />
  );
}

export default table;
