import { BentoCard, BentoGrid } from '@/components/Bento';
import { FluentIcon } from '@/components/FluentIcon';
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
        <section className="fds-year-group" key={group.year}>
          <span className="fds-year-pill">{group.year}</span>
          <div className="fds-publication-list">
            {group.items.map((paper) => (
              <div className="fds-publication-item" key={`${paper.year}-${paper.title}`}>
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
        <section className="fds-year-group" key={group.year}>
          <span className="fds-year-pill">{group.year}</span>
          <div className="fds-publication-list">
            {group.items.map((talk) => (
              <div className="fds-publication-item" key={`${talk.year}-${talk.title}`}>
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
        <BentoCard className="span-2" revealDelay={20}>
          <p className="fds-eyebrow">Overview</p>
          <h2 className="fds-card-title">Publication highlights</h2>
          <p className="fds-card-description">{publicationHighlights}</p>
          <div className="fds-stat-grid">
            <div className="fds-stat">
              <strong>{publications.length}</strong>
              <span>Publications</span>
            </div>
            <div className="fds-stat">
              <strong>{presentations.length}</strong>
              <span>Presentations</span>
            </div>
          </div>
        </BentoCard>

        <BentoCard className="span-4" revealDelay={60}>
          <div className="fds-section-head">
            <h3 className="fds-card-title">Recent papers</h3>
            <span>2024 → 2022</span>
          </div>
          <PublicationGroups items={recentGroups} />
        </BentoCard>

        <BentoCard className="span-2" revealDelay={100}>
          <div className="fds-section-head">
            <h3 className="fds-card-title">Earlier publications</h3>
            <span>2021 → 2019</span>
          </div>
          <PublicationGroups items={earlierGroups} />
        </BentoCard>

        <BentoCard className="span-4" revealDelay={160}>
          <div className="fds-section-head">
            <h3 className="fds-card-title">Conference presentations</h3>
            <span>Recent meeting record</span>
          </div>
          <PresentationGroups items={presentationGroups} />
        </BentoCard>

        <BentoCard className="span-2 fds-card--mica" revealDelay={200}>
          <p className="fds-eyebrow">Profile</p>
          <h3 className="fds-card-title">Research profile</h3>
          <div className="fds-chip-row">
            <span className="fds-chip fds-chip--accent">Heart Failure</span>
            <span className="fds-chip fds-chip--accent">RNA Biology</span>
            <span className="fds-chip">Pressure Overload</span>
            <span className="fds-chip">Translational Analytics</span>
            <span className="fds-chip">Mechanistic Studies</span>
            <span className="fds-chip">Clinical Relevance</span>
          </div>
          <a className="fds-link-inline with-icon" href="experience.html">
            See training and career context
            <FluentIcon name="arrow" size={12} />
          </a>
        </BentoCard>
      </BentoGrid>
    </>
  );
}
