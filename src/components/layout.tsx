import { Slice } from 'gatsby';

interface LayoutProps {
  children: JSX.Element;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen p-8 text-dark transition-colors dark:bg-dark dark:text-light">
      <div className="mx-auto max-w-2xl space-y-8">
        <Slice alias="header" />
        <main className="space-y-8">{children}</main>
        <Slice alias="footer" />
      </div>
    </div>
  );
}

export default Layout;
