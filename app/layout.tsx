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
  description:
    "Puppy - Coinbase's tiny dog, the image of Puppy has been shared on the official Coinbase account. Puppy was shared on Coinbase's Instagram in February 2015 and has become Coinbase's only tiny dog.",
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
