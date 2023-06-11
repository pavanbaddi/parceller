import './globals.css';
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable:"--font-roboto"
})

export const metadata = {
  title: 'Parceller',
  description: 'Package tracking app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable}`} >{children}</body>
    </html>
  );
}
