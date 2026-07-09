import Link from "next/link";
import { featuredRelease, substackSubscribeUrl } from "./content";
import {
  AuthorPreview,
  BooksGrid,
  HeroVisual,
  MailingListBand,
  SiteShell,
} from "./components/site-shell";

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
            <Link className="button" href="/books">
              Explore the work
            </Link>
            <Link className="button button--ghost" href="/about">
              About Cameron
            </Link>
            <a
              className="text-link"
              href={substackSubscribeUrl}
              rel="noreferrer"
              target="_blank"
            >
              Subscribe on Substack
            </a>
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
