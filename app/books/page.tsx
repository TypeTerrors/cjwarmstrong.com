import Link from "next/link";
import { books } from "../content";
import { BooksList, SectionHeader, SiteShell } from "../components/site-shell";

type BooksPageProps = {
  searchParams?: Promise<{
    section?: string;
  }>;
};

const filters = [
  { key: "featured", label: "Featured work", href: "/books" },
  { key: "novel", label: "The Novel", href: "/books?section=novel" },
  {
    key: "fiction-essays",
    label: "Fiction & Essays",
    href: "/books?section=fiction-essays",
  },
] as const;

export default async function BooksPage({ searchParams }: BooksPageProps) {
  const params = await searchParams;
  const activeFilter =
    params?.section === "novel" || params?.section === "fiction-essays"
      ? params.section
      : "featured";
  const visibleBooks =
    activeFilter === "novel"
      ? books.filter((book) => book.collection === "The Novel")
      : activeFilter === "fiction-essays"
        ? books.filter(
            (book) => book.collection === "Fiction" || book.collection === "Essays",
          )
        : books;

  return (
    <SiteShell currentPath="/books">
      <section className="page-hero page-hero--books">
        <div>
          <SectionHeader
            eyebrow="Books"
            title="Pneumanauts, fiction, and essays"
            description="A focused entry point for Cameron's debut novel, the writing around it, and selected fiction and essays from The Pneumanaut."
          />
        </div>
        <div className="page-hero__art" />
      </section>

      <section className="feature-panel">
        <div className="tab-row" aria-label="Book categories">
          {filters.map((filter) => (
            <Link
              aria-current={activeFilter === filter.key ? "page" : undefined}
              className={
                activeFilter === filter.key
                  ? "tab-row__item tab-row__item--active"
                  : "tab-row__item"
              }
              href={filter.href}
              key={filter.key}
            >
              {filter.label}
            </Link>
          ))}
        </div>

        <BooksList items={visibleBooks} />
      </section>
    </SiteShell>
  );
}
