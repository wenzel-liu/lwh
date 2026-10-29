import { useEffect } from 'react';
import { PageIntro } from '@/components/PageIntro';
import { BlogCollectionCard } from '@/components/BlogCollectionCard';
import { SectionHeading } from '@/components/PortfolioParts';
import { blogCollections, blogIntro, recentNotes } from '@/content/blog';
import { siteHref } from '@/lib/nav';

export function BlogPage() {
  useEffect(() => {
    if (window.location.hash === '#projects') window.location.replace(siteHref('projects.html'));
  }, []);

  return (
    <div className="portfolio-page portfolio-blog">
      <PageIntro {...blogIntro}>
        <nav className="portfolio-page-index" aria-label="On this page">
          <a href="#collections"><span>Essay collections</span><span>2 collections ↘</span></a>
          <a href="#notes"><span>Daily notes</span><span>{recentNotes.length} articles ↘</span></a>
        </nav>
      </PageIntro>

      <section id="collections" className="portfolio-blog-collections" aria-label="Essay collections">
        {blogCollections.map(collection => <BlogCollectionCard key={collection.id} collection={collection} />)}
      </section>

      <section id="notes" className="portfolio-section">
        <SectionHeading kicker="Daily life" title="Notes & essays"><span className="portfolio-caption">日常记录与随笔</span></SectionHeading>
        <div className="portfolio-note-list">
          {recentNotes.map((note, index) => (
            <a className="portfolio-note-row" href={note.href} key={note.title} lang="zh-CN">
              <span className="portfolio-note-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <div><h3>{note.title}</h3><p>{note.description}</p></div>
              <span className="portfolio-note-action">Read note <span aria-hidden="true">↗</span></span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
