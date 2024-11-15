import localFont from 'next/font/local';

const pretendard = localFont({
  src: './PretendardVariable.woff2',
  display: 'swap',
  variable: '--font-pretendard',
  preload: true,
});

const jetbrains = localFont({
  src: './JetBrainsMono.woff2',
  display: 'swap',
  variable: '--font-jetbrains',
  preload: true,
});

export { pretendard, jetbrains };
