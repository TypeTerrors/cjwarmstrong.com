import {
  ContactPanel,
  MailingListBand,
  SiteShell,
} from "../components/site-shell";

export default function ContactPage() {
  return (
    <SiteShell currentPath="/contact">
      <ContactPanel />
      <MailingListBand />
    </SiteShell>
  );
}
