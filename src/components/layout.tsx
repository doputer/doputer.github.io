import Header from '@/components/header';

interface LayoutProps {
  children: JSX.Element;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="text-dark dark:bg-dark dark:text-light min-h-screen w-screen px-8 pt-8 transition-colors">
      <div className="mx-auto my-0 max-w-3xl">
        <Header />
        <div className="mt-8 pb-8">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
