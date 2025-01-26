import './globals.css';
import { Inter } from 'next/font/google';
import Nav from '@/components/nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'PulsionAI - Advanced AI Solutions',
  description: 'Transform your business with advanced AI solutions',
  metadataBase: new URL('https://pulsion.ai'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}