'use client';

import { Inter } from 'next/font/google';
import { RecoilRoot } from 'recoil';

import Header from '@/app/components/header';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        <RecoilRoot>
          <main>{children}</main>
        </RecoilRoot>
      </body>
    </html>
  );
}
