import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { metaData, siteUrl } from "@/data/contentConfig";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: metaData.title,
  description: metaData.description,
  keywords: metaData.keywords,
  authors: [{ name: metaData.author }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: metaData.siteName,
    title: metaData.title,
    description: metaData.description,
    images: [metaData.ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: metaData.title,
    description: metaData.description,
    images: [metaData.ogImage.url],
  },
};

export const viewport: Viewport = {
  themeColor: "#06091F",
};

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
