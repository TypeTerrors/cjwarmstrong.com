import type { Metadata } from "next";
import {
  Bebas_Neue,
  Cormorant_Garamond,
  Inter,
} from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cjwarmstrong.com";
const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});
const display = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-display",
  weight: "400",
});
const serif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "C. J. W. Armstrong",
    template: "%s | C. J. W. Armstrong",
  },
  description:
    "C. J. W. Armstrong, author of Pneumanauts and The Pneumanaut on Substack.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "C. J. W. Armstrong",
    description:
      "Author of Pneumanauts and The Pneumanaut on Substack.",
    url: "/",
    siteName: "C. J. W. Armstrong",
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
    <html data-scroll-behavior="smooth" lang="en">
      <body className={`${sans.variable} ${display.variable} ${serif.variable}`}>
        {children}
      </body>
    </html>
  );
}
