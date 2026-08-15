import { SectionHeader, SiteShell } from "../components/site-shell";
import { createPageMetadata } from "../metadata";

export const metadata = createPageMetadata({
  title: "Terms of Use",
  description: "Terms governing use of the CJW Armstrong website.",
  path: "/terms-of-use",
  index: false,
});

export default function TermsOfUsePage() {
  return (
    <SiteShell currentPath="">
      <section className="page-hero page-hero--single">
        <SectionHeader
          as="h1"
          eyebrow="Legal"
          title="Terms of use"
          description="A formal terms page can be added before launch. Subscription and reader-support terms are handled through Substack."
        />
      </section>
    </SiteShell>
  );
}
