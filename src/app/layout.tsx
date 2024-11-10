import '@/static/styles/globals.css';
import 'katex/dist/katex.min.css';

import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ThemeScript from '@/components/Header/ThemeScript';
import meta from '@/configs/metadata.json';
import { jetbrains, pretendard } from '@/static/fonts';

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html className={`${pretendard.variable} ${jetbrains.variable}`}>
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
      <GoogleAnalytics gaId={meta.gtag} />
    </html>
  );
};

export default RootLayout;
