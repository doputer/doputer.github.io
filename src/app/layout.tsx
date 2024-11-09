import '@/app/globals.css';
import 'katex/dist/katex.min.css';

import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ThemeScript from '@/components/Header/ThemeScript';
import meta from '@/configs/metadata.json';

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  display: 'swap',
  variable: '--font-pretendard',
  preload: true,
});

const jetbrains = localFont({
  src: './fonts/JetBrainsMono.woff2',
  display: 'swap',
  variable: '--font-jetbrains',
  preload: false,
});

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
