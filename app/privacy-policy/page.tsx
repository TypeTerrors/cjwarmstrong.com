import { SectionHeader, SiteShell } from "../components/site-shell";

export default function PrivacyPolicyPage() {
  return (
    <SiteShell currentPath="">
      <section className="page-hero page-hero--single">
        <SectionHeader
          eyebrow="Legal"
          title="Privacy policy"
          description="Substack handles subscriptions for The Pneumanaut. A formal site privacy policy can be added here before launch."
        />
      </section>
    </SiteShell>
  );
}
