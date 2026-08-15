import {
  ContactPanel,
  MailingListBand,
  SiteShell,
} from "../components/site-shell";
import { createPageMetadata } from "../metadata";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Find CJW Armstrong's publication, subscription, and reader-conversation links.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <SiteShell currentPath="/contact">
      <ContactPanel />
      <MailingListBand />
    </SiteShell>
  );
}
