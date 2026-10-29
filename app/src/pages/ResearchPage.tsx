import { PageIntro } from '@/components/PageIntro';
import { SectionHeading, Tags } from '@/components/PortfolioParts';
import { presentations, publicationHighlights, publications, researchIntro } from '@/content/research';
import type { PresentationItem, PublicationItem } from '@/content/types';

function ResearchList({ items, prefix }: { items: Array<PublicationItem | PresentationItem>; prefix: string }) {
  const years = Array.from(new Set(items.map((item) => item.year))).sort((a, b) => b - a);
  return (
    <div className="portfolio-records">
      {years.map((year) => (
        <section className="portfolio-year" id={prefix + '-' + year} key={year} aria-labelledby={prefix + '-title-' + year}>
          <h3 id={prefix + '-title-' + year}>{year}</h3>
          <ol className="portfolio-record-list">
            {items.filter((item) => item.year === year).map((item) => <li key={item.title}><h4>{item.title}</h4><p>{item.citation}</p></li>)}
          </ol>
        </section>
      ))}
    </div>
  );
}

export function ResearchPage() {
  return (
    <div className="portfolio-page">
      <PageIntro {...researchIntro}>
        <div className="portfolio-research-stats">
          <a href="#publications"><strong>{publications.length}</strong><span>Publications <span aria-hidden="true">↘</span></span></a>
          <a href="#presentations"><strong>{presentations.length}</strong><span>Presentations <span aria-hidden="true">↘</span></span></a>
        </div>
      </PageIntro>

      <section id="publications" className="portfolio-section portfolio-archive-section">
        <div className="portfolio-archive-aside">
          <SectionHeading kicker="Peer-reviewed work" title="Publications" />
          <p>{publicationHighlights}</p>
          <nav className="portfolio-year-index" aria-label="Publication years">
            {Array.from(new Set(publications.map((paper) => paper.year))).sort((a, b) => b - a).map((year) => <a href={'#paper-' + year} key={year}>{year}</a>)}
          </nav>
        </div>
        <ResearchList items={publications} prefix="paper" />
      </section>

      <section id="presentations" className="portfolio-section portfolio-archive-section">
        <div className="portfolio-archive-aside">
          <SectionHeading kicker="At the meeting" title="Conference presentations" />
          <p>Posters and moderated presentations at cardiovascular research meetings.</p>
          <a className="portfolio-text-link" href="#publications">Back to publications <span aria-hidden="true">↑</span></a>
        </div>
        <ResearchList items={presentations} prefix="talk" />
      </section>

      <section className="portfolio-section">
        <SectionHeading kicker="Research profile" title="Areas of interest">
          <a className="portfolio-text-link" href="experience.html">Training & career <span aria-hidden="true">↗</span></a>
        </SectionHeading>
        <Tags items={['Heart Failure', 'RNA Biology', 'Pressure Overload', 'Translational Analytics', 'Mechanistic Studies', 'Clinical Relevance']} />
      </section>
    </div>
  );
}
