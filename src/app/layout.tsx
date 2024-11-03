import '@/app/globals.css';

import type { Metadata } from 'next';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ThemeScript from '@/components/Header/ThemeScript';
import meta from '@/configs/metadata.json';

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-screen px-4 py-8 text-dark transition-colors dark:bg-dark dark:text-light">
        <main className="mx-auto max-w-2xl space-y-8">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
