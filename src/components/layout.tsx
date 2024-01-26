import Footer from '@/components/footer';
import Header from '@/components/header';

interface LayoutProps {
  children: JSX.Element;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen w-screen p-8 text-dark transition-colors dark:bg-dark dark:text-light">
      <div className="mx-auto my-0 max-w-2xl">
        <Header />
        <main className="my-8">{children}</main>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
