import type {Metadata} from 'next';
import {Gloria_Hallelujah, Nanum_Pen_Script, Chilanka} from 'next/font/google';
import clsx from 'clsx';
import './globals.css';

const font = Gloria_Hallelujah({
  weight: ['400'],
  subsets: ['latin'],
});

const nanumPenFont = Nanum_Pen_Script({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--nanum-pen-font',
});

const chilankaFont = Chilanka({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--chilanka-font',
});

export const metadata: Metadata = {
  title: 'Puppy',
  description: "Coinbase's Tiny Dog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={clsx(
          font.className,
          chilankaFont.variable,
          nanumPenFont.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
