import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { metaData } from '@/data/contentConfig';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: metaData.title,
  description: metaData.description,
  keywords: metaData.keywords,
  authors: [{ name: metaData.author }],
  openGraph: {
    ...metaData.openGraph
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
