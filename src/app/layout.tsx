'use client';

import { Inter } from 'next/font/google';
import { RecoilRoot } from 'recoil';

import './globals.css';

import Header from '@/app/components/Header';

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
