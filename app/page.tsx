import Link from "next/link";
import { bookStoreUrl, featuredRelease } from "./content";
import { createPageMetadata } from "./metadata";
import {
  AuthorPreview,
  BooksGrid,
  HeroVisual,
  MailingListBand,
  SiteShell,
} from "./components/site-shell";

export const metadata = createPageMetadata({
  title: "CJW Armstrong",
  absoluteTitle: "CJW Armstrong | Author of Pneumanauts",
  description:
    "CJW Armstrong is the author of Pneumanauts and The Pneumanaut on Substack.",
  path: "/",
});

export default function HomePage() {
  return (
    <SiteShell currentPath="/">
      <section className="hero-grid">
        <div className="hero-copy">
          <p className="section-eyebrow">{featuredRelease.eyebrow}</p>
          <h1 className="hero-title">{featuredRelease.title}</h1>
          <p className="hero-subtitle">{featuredRelease.subtitle}</p>
          <p className="hero-description">{featuredRelease.summary}</p>

          <div className="hero-actions">
            <a
              aria-label="Buy Pneumanauts from Eclogue Press"
              className="button button--purchase"
              href={bookStoreUrl}
              rel="noreferrer"
              target="_blank"
            >
              Buy Pneumanauts
            </a>
            <Link className="button button--ghost" href="/books">
              Explore the work
            </Link>
            <Link className="text-link" href="/about">
              About CJW
            </Link>
          </div>
        </div>

        <HeroVisual />
      </section>

      <AuthorPreview />
      <BooksGrid />
      <MailingListBand />
    </SiteShell>
  );
}
