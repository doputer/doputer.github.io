function table(props: React.HtmlHTMLAttributes<HTMLTableElement>) {
  return (
    <div className="my-4 w-full overflow-y-auto">
      <table
        className="w-full divide-y divide-light-line text-lg dark:divide-dark-line [&_td[align=center]]:text-center [&_td[align=right]]:text-right [&_td]:p-2 [&_td]:text-left [&_th[align=center]]:text-center [&_th[align=right]]:text-right [&_th]:p-2 [&_th]:text-left"
        {...props}
      />
    </div>
  );
}

export default table;
