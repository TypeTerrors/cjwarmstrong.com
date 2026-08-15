import { series } from "../content";
import { SectionHeader, SiteShell } from "../components/site-shell";
import { createPageMetadata } from "../metadata";

export const metadata = createPageMetadata({
  title: "Series",
  description:
    "Read CJW Armstrong's Pneumanauts publication notes, speculative fiction, and cosmic nonfiction.",
  path: "/series",
});

export default function SeriesPage() {
  return (
    <SiteShell currentPath="/series">
      <section className="page-hero page-hero--single page-hero--series">
        <SectionHeader
          as="h1"
          eyebrow="Series"
          title="The Pneumanaut sections"
          description="The site now points readers toward the real bodies of work CJW is publishing: the debut novel, speculative fiction, and long-form essays."
        />
      </section>

      <section className="feature-panel">
        <div className="series-grid">
          {series.map((entry) => (
            <article className="series-card" key={entry.title}>
              <p>{entry.title}</p>
              <h3>{entry.stage}</h3>
              <p>{entry.summary}</p>
              <a
                className="text-link"
                href={entry.href}
                rel="noreferrer"
                target="_blank"
              >
                Read this section
              </a>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
