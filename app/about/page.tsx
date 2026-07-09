import Image from "next/image";
import portrait from "../../assets/Profile Pic.png";
import { substackUrl } from "../content";
import { SectionHeader, SiteShell } from "../components/site-shell";

export default function AboutPage() {
  return (
    <SiteShell currentPath="/about">
      <section className="about-layout">
        <div className="portrait-frame portrait-frame--tall">
          <Image
            alt="Portrait of CJW Armstrong"
            className="portrait-image"
            placeholder="blur"
            src={portrait}
          />
        </div>

        <div className="about-layout__copy">
          <SectionHeader
            eyebrow="About the author"
            title="Cameron J. W. Armstrong writes The Pneumanaut"
            description="His work moves between science fiction, theology, cosmology, myth, games, music, and the spiritual questions that keep pulling those worlds together."
          />

          <div className="about-columns">
            <p>
              Cameron&apos;s debut novel, Pneumanauts, is being published by Eclogue
              Press. On Substack, he writes about the novel&apos;s origins,
              influences, soundtrack, and publication journey.
            </p>
            <p>
              The Pneumanaut also gathers his essays and fiction: speculative
              stories, cosmic theology, black holes, alien life, video games,
              heavy psych, and the question of what the sacred might look like
              in a stranger universe.
            </p>
          </div>

          <a
            className="button button--ghost"
            href={substackUrl}
            rel="noreferrer"
            target="_blank"
          >
            Read The Pneumanaut
          </a>
        </div>
      </section>

      <section className="feature-panel">
        <blockquote className="quote-banner quote-banner--mountain">
          <span>“</span>
          <div>
            <p>
              A pneumanaut wonders and wanders: seeking hidden meaning in
              science fiction, faith, myth, and the deepest cosmological
              questions.
            </p>
            <cite>The Pneumanaut</cite>
          </div>
        </blockquote>
      </section>
    </SiteShell>
  );
}
