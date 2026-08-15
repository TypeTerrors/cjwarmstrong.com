import type { Metadata } from "next";

type PageMetadata = {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: string;
  index?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path,
  absoluteTitle,
  index = true,
}: PageMetadata): Metadata {
  const socialTitle = absoluteTitle ?? title;

  return {
    title: absoluteTitle ? { absolute: absoluteTitle } : title,
    description,
    alternates: {
      canonical: path,
    },
    robots: {
      index,
      follow: true,
    },
    openGraph: {
      title: socialTitle,
      description,
      url: path,
      type: "website",
      images: [
        {
          url: "/site-art/home-hero-stage.png",
          width: 1700,
          height: 925,
          alt: "Pneumanauts by CJW Armstrong",
        },
      ],
    },
  };
}
