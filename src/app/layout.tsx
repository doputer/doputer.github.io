import '@/static/styles/globals.css';
import 'katex/dist/katex.min.css';

import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';

import type { PropsWithChildren } from 'react';

import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ThemeScript from '@/components/ThemeSwitch/ThemeScript';
import config from '@/configs/config.json';
import { jetbrains, pretendard } from '@/static/fonts';

const RootLayout = ({ children }: Readonly<PropsWithChildren>) => {
  return (
    <html lang="ko-KR" className={`${pretendard.variable} ${jetbrains.variable}`}>
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-screen px-4 py-8 transition-colors">
        <div className="mx-auto max-w-2xl space-y-8">
          <Header />
          <main className="space-y-8">{children}</main>
          <Footer />
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
      <GoogleAnalytics gaId={config.gtag} />
    </html>
  );
};

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
  openGraph: {
    images: '/api/og',
    siteName: config.title,
    title: config.title,
    description: config.description,
    url: config.siteUrl,
  },
};

export default RootLayout;
