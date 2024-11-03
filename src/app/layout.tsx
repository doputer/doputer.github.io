import '@/app/globals.css';

import Footer from '@/components/footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className="min-h-screen px-4 py-8 text-dark transition-colors dark:bg-dark dark:text-light">
        <main className="mx-auto max-w-2xl space-y-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
