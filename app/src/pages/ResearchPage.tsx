import { BentoCard, BentoGrid } from '@/components/Bento';
import { PageIntro } from '@/components/PageIntro';
import {
  earlierPublicationYears,
  presentations,
  publicationHighlights,
  publications,
  recentPublicationYears,
  researchIntro
} from '@/content/research';
import type { PresentationItem, PublicationItem } from '@/content/types';

function groupByYear<T extends { year: number }>(items: T[], years: number[]): Array<{ year: number; items: T[] }> {
  return years.map((year) => ({
    year,
    items: items.filter((item) => item.year === year)
  }));
}

function PublicationGroups({ items }: { items: Array<{ year: number; items: PublicationItem[] }> }) {
  return (
    <>
      {items.map((group) => (
        <section className="year-group" key={group.year}>
          <span className="year">{group.year}</span>
          <div className="paper-list">
            {group.items.map((paper) => (
              <div className="paper-item" key={`${paper.year}-${paper.title}`}>
                <h4>{paper.title}</h4>
                <p>{paper.citation}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}

function PresentationGroups({ items }: { items: Array<{ year: number; items: PresentationItem[] }> }) {
  return (
    <>
      {items.map((group) => (
        <section className="year-group" key={group.year}>
          <span className="year">{group.year}</span>
          <div className="paper-list">
            {group.items.map((talk) => (
              <div className="paper-item" key={`${talk.year}-${talk.title}`}>
                <h4>{talk.title}</h4>
                <p>{talk.citation}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}

export function ResearchPage() {
  const recentGroups = groupByYear(publications, recentPublicationYears);
  const earlierGroups = groupByYear(publications, earlierPublicationYears);

  const presentationYears = Array.from(new Set(presentations.map((item) => item.year))).sort((a, b) => b - a);
  const presentationGroups = groupByYear(presentations, presentationYears);

  return (
    <>
      <PageIntro kicker={researchIntro.kicker} title={researchIntro.title} description={researchIntro.description} />

      <BentoGrid ariaLabel="Research content">
        <BentoCard className="span-3" revealDelay={20}>
          <h2 className="card-title">Publication Highlights</h2>
          <p className="card-subtitle">{publicationHighlights}</p>
        </BentoCard>

        <BentoCard className="span-2" revealDelay={60}>
          <h3 className="card-title">Publications (2024 - 2022)</h3>
          <PublicationGroups items={recentGroups} />
        </BentoCard>

        <BentoCard revealDelay={100}>
          <h3 className="card-title">Earlier Publications</h3>
          <PublicationGroups items={earlierGroups} />
        </BentoCard>

        <BentoCard className="span-3" revealDelay={160}>
          <h3 className="card-title">Conference Presentations</h3>
          <PresentationGroups items={presentationGroups} />
        </BentoCard>
      </BentoGrid>
    </>
  );
}
