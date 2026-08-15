import { SectionHeader, SiteShell } from "../components/site-shell";
import { createPageMetadata } from "../metadata";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description: "Privacy information for the CJW Armstrong website.",
  path: "/privacy-policy",
  index: false,
});

export default function PrivacyPolicyPage() {
  return (
    <SiteShell currentPath="">
      <section className="page-hero page-hero--single">
        <SectionHeader
          as="h1"
          eyebrow="Legal"
          title="Privacy policy"
          description="Substack handles subscriptions for The Pneumanaut. A formal site privacy policy can be added here before launch."
        />
      </section>
    </SiteShell>
  );
}
