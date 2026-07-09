import { SectionHeader, SiteShell } from "../components/site-shell";

export default function TermsOfUsePage() {
  return (
    <SiteShell currentPath="">
      <section className="page-hero page-hero--single">
        <SectionHeader
          eyebrow="Legal"
          title="Terms of use"
          description="A formal terms page can be added before launch. Subscription and reader-support terms are handled through Substack."
        />
      </section>
    </SiteShell>
  );
}
