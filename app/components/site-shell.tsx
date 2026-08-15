import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import {
  bookStoreUrl,
  books,
  contactDetails,
  mailingListBenefits,
  navigation,
  substackSubscribeUrl,
  substackUrl,
} from "../content";

type SiteShellProps = {
  children: ReactNode;
  currentPath: string;
};

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  as?: "h1" | "h2";
};

function thumbnailStyle(image: string): CSSProperties {
  return { backgroundImage: `url("${image}")` };
}

export function SiteShell({ children, currentPath }: SiteShellProps) {
  return (
    <main className="site-shell">
      <div className="site-frame">
        <header className="site-header">
          <Link className="site-brand" href="/">
            CJW Armstrong
          </Link>

          <nav aria-label="Primary" className="site-nav">
            {navigation.map((item) => (
              <Link
                className={currentPath === item.href ? "is-active" : undefined}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="site-header__actions">
            <a
              aria-label="Buy Pneumanauts from Eclogue Press"
              className="header-buy-link"
              href={bookStoreUrl}
              rel="noreferrer"
              target="_blank"
            >
              <span className="header-buy-link__desktop">Buy the book</span>
              <span className="header-buy-link__mobile">Buy</span>
            </a>

            <div className="site-socials" aria-label="Publication links">
              <a
                aria-label="Read The Pneumanaut on Substack"
                className="site-socials__substack"
                href={substackUrl}
                rel="noreferrer"
                target="_blank"
              >
                <span className="substack-mark" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </span>
              </a>
              <a
                aria-label="Subscribe to The Pneumanaut on Substack"
                href={substackSubscribeUrl}
                rel="noreferrer"
                target="_blank"
              >
                ML
              </a>
            </div>
          </div>

          <details className="site-mobile-nav">
            <summary aria-label="Open navigation">
              <span />
              <span />
              <span />
            </summary>
            <nav aria-label="Mobile">
              {navigation.map((item) => (
                <Link href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ))}
              <a
                className="site-mobile-nav__buy"
                href={bookStoreUrl}
                rel="noreferrer"
                target="_blank"
              >
                Buy Pneumanauts
              </a>
            </nav>
          </details>
        </header>

        {children}

        <footer className="site-footer">
          <p>© 2026 CJW Armstrong</p>
          <div>
            <a
              className="site-footer__buy"
              href={bookStoreUrl}
              rel="noreferrer"
              target="_blank"
            >
              Buy Pneumanauts
            </a>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-use">Terms of Use</Link>
          </div>
        </footer>
      </div>
    </main>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  as: Heading = "h2",
}: SectionHeaderProps) {
  return (
    <div className="section-copy">
      <p className="section-eyebrow">{eyebrow}</p>
      <Heading className="section-title">{title}</Heading>
      {description ? <p className="section-description">{description}</p> : null}
    </div>
  );
}

export function HeroVisual() {
  return <div aria-hidden="true" className="hero-visual" />;
}

export function AuthorPreview() {
  return (
    <section className="feature-panel feature-panel--author">
      <div className="portrait-frame">
        <Image
          alt="Portrait of CJW Armstrong"
          className="portrait-image"
          height={1402}
          src="/images/profile-pic.png"
          width={1122}
        />
      </div>

      <div className="author-copy">
        <SectionHeader
          eyebrow="About the author"
          title="Science fiction, theology, and the strange edges of wonder"
          description="CJW Armstrong writes The Pneumanaut, a Substack publication about theological odysseys into deep cosmological questions, alongside fiction and notes on his debut novel."
        />
        <Link className="button button--ghost" href="/about">
          Read more about CJW
        </Link>
      </div>

      <blockquote className="quote-panel quote-panel--mountain">
        <p>
          Wonder and wander: that is the pulse of The Pneumanaut, where science
          fiction, faith, myth, and cosmology keep opening new doors.
        </p>
      </blockquote>
    </section>
  );
}

export function BooksGrid() {
  return (
    <section className="feature-panel">
      <div className="panel-heading">
        <SectionHeader
          eyebrow="Books"
          title="Read CJW's work"
          description="Start with Pneumanauts, then follow the novel notes, fiction, and essays published through The Pneumanaut."
        />
        <Link className="text-link" href="/books">
          View all books
        </Link>
      </div>

      <div className="book-grid">
        {books.map((book) => (
          <article className="book-card" key={book.title}>
            <div
              aria-hidden="true"
              className="book-cover book-cover--remote"
              style={thumbnailStyle(book.image)}
            >
              <span>{book.collection}</span>
              <strong>{book.title}</strong>
            </div>
            <div className="book-card__copy">
              <p>{book.collection}</p>
              <h3>{book.title}</h3>
              <p>{book.summary}</p>
              <a
                className="text-link"
                href={book.href}
                rel="noreferrer"
                target="_blank"
              >
                Read on Substack
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function MailingListBand() {
  return (
    <section className="signup-band">
      <div className="signup-band__copy">
        <SectionHeader
          eyebrow="Stay connected"
          title="Subscribe through The Pneumanaut"
          description="CJW sends new posts, fiction, essays, and Pneumanauts updates through Substack. Subscribe there for the actual mailing list."
        />
      </div>

      <div className="signup-form signup-form--links">
        <a
          className="button"
          href={substackSubscribeUrl}
          rel="noreferrer"
          target="_blank"
        >
          Subscribe on Substack
        </a>
        <a className="text-link" href={substackUrl} rel="noreferrer" target="_blank">
          Visit The Pneumanaut
        </a>
      </div>
    </section>
  );
}

type BooksListProps = {
  items?: ReadonlyArray<(typeof books)[number]>;
};

export function BooksList({ items = books }: BooksListProps) {
  return (
    <div className="stacked-list">
      {items.map((book) => (
        <article className="list-card" key={book.title}>
          <div
            aria-hidden="true"
            className="list-card__cover book-cover book-cover--remote"
            style={thumbnailStyle(book.image)}
          >
            <span>{book.collection}</span>
            <strong>{book.title}</strong>
          </div>
          <div className="list-card__copy">
            <p>{book.collection}</p>
            <h3>{book.title}</h3>
            <p>{book.summary}</p>
            <div className="list-card__actions">
              <a
                className="button button--ghost"
                href={book.href}
                rel="noreferrer"
                target="_blank"
              >
                Read on Substack
              </a>
              <a
                className="text-link"
                href={substackSubscribeUrl}
                rel="noreferrer"
                target="_blank"
              >
                Subscribe
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export function ContactPanel() {
  return (
    <section className="contact-layout">
      <div className="contact-details">
        <SectionHeader
          as="h1"
          eyebrow="Get in touch"
          title="Follow CJW's work at the source"
          description="The Pneumanaut is the primary home for CJW's essays, fiction, novel updates, and subscriber conversations."
        />

        <ul className="detail-list">
          {contactDetails.map((item) => (
            <li key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </li>
          ))}
        </ul>
      </div>

      <div className="contact-form contact-form--links">
        <SectionHeader
          eyebrow="Substack"
          title="Read, subscribe, or join the conversation"
          description="Use Substack for the mailing list and reader-supported updates. The site now points visitors there instead of collecting email locally."
        />
        <div className="list-card__actions">
          <a
            className="button"
            href={substackUrl}
            rel="noreferrer"
            target="_blank"
          >
            Open The Pneumanaut
          </a>
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
    </section>
  );
}

export function MailingListContent() {
  return (
    <section className="mailing-layout">
      <div className="mailing-layout__hero">
        <SectionHeader
          as="h1"
          eyebrow="Subscribe"
          title="The mailing list lives on Substack"
          description="The Pneumanaut is a reader-supported publication. Subscribe on Substack to receive CJW's essays, fiction, book notes, and Pneumanauts updates."
        />
        <div className="signup-form signup-form--panel signup-form--links">
          <a
            className="button"
            href={substackSubscribeUrl}
            rel="noreferrer"
            target="_blank"
          >
            Subscribe on Substack
          </a>
          <a className="text-link" href={substackUrl} rel="noreferrer" target="_blank">
            Visit The Pneumanaut
          </a>
        </div>
      </div>

      <div className="benefit-grid">
        {mailingListBenefits.map((benefit) => (
          <article className="benefit-card" key={benefit}>
            <p>{benefit}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
