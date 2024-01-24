import Header from '@/components/header';

interface LayoutProps {
  children: JSX.Element;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen w-screen px-8 pt-8 text-dark transition-colors dark:bg-dark dark:text-light">
      <div className="mx-auto my-0 max-w-3xl">
        <Header />
        <main className="mt-8 pb-8">{children}</main>
      </div>
    </div>
  );
}

export default Layout;
