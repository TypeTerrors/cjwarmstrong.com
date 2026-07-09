import { MailingListContent, SiteShell } from "../components/site-shell";

export default function MailingListPage() {
  return (
    <SiteShell currentPath="/mailing-list">
      <MailingListContent />
    </SiteShell>
  );
}
