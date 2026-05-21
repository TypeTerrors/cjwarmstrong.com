import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cjwarmstrong.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CJW Armstrong",
    template: "%s | CJW Armstrong",
  },
  description: "The official website for CJW Armstrong.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "CJW Armstrong",
    description: "The official website for CJW Armstrong.",
    url: "/",
    siteName: "CJW Armstrong",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
