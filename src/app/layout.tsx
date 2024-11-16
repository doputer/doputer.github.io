import '@/static/styles/globals.css';
import 'katex/dist/katex.min.css';

import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';

import type { PropsWithChildren } from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ThemeScript from '@/components/Header/ThemeScript';
import config from '@/configs/config.json';
import { jetbrains, pretendard } from '@/static/fonts';

const RootLayout = ({ children }: Readonly<PropsWithChildren>) => {
  return (
    <html lang="ko-KR" className={`${pretendard.variable} ${jetbrains.variable}`}>
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-screen px-4 py-8 text-dark transition-colors dark:bg-dark dark:text-light">
        <div className="mx-auto max-w-2xl space-y-8">
          <Header />
          <main className="space-y-8">{children}</main>
          <Footer />
        </div>
      </body>
      <GoogleAnalytics gaId={config.gtag} />
    </html>
  );
};

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
  openGraph: {
    siteName: config.title,
    title: config.title,
    description: config.title,
    images: '/api/og',
  },
};

export default RootLayout;
