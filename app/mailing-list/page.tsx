import { MailingListContent, SiteShell } from "../components/site-shell";
import { createPageMetadata } from "../metadata";

export const metadata = createPageMetadata({
  title: "Subscribe",
  description:
    "Subscribe to The Pneumanaut on Substack for essays, fiction, book notes, and Pneumanauts updates.",
  path: "/mailing-list",
});

export default function MailingListPage() {
  return (
    <SiteShell currentPath="/mailing-list">
      <MailingListContent />
    </SiteShell>
  );
}
