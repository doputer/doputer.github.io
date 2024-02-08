import { Slice } from 'gatsby';

interface LayoutProps {
  children: JSX.Element;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen p-8 text-dark transition-colors dark:bg-dark dark:text-light">
      <div className="mx-auto my-0 max-w-2xl">
        <Slice alias="header" />
        <main className="my-8">{children}</main>
        <Slice alias="footer" />
      </div>
    </div>
  );
}

export default Layout;
