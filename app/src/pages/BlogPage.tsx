import { FluentIcon } from '@/components/FluentIcon';
import { PageIntro } from '@/components/PageIntro';
import { ContactSection, ProjectCard, SectionHeading, Tags } from '@/components/PortfolioParts';
import { ReadingPreview } from '@/components/ReadingPreview';
import { blogCta, blogIntro, blogProjects, blogThemes, blogUsage, recentNotes } from '@/content/blog';

export function BlogPage() {
  const featured = blogProjects.find((project) => project.featured);
  return (
    <div className="portfolio-page">
      <PageIntro {...blogIntro}>
        <nav className="portfolio-page-index" aria-label="On this page">
          <a href="#projects"><span>Projects</span><span>01 — 03 ↘</span></a>
          <a href="#notes"><span>Notes</span><span>01 — 03 ↘</span></a>
        </nav>
      </PageIntro>

      <section id="projects" className="portfolio-section">
        <SectionHeading kicker="Made independently" title="Projects" />
        {featured ? (
          <article className="portfolio-featured">
            <div className="portfolio-featured-copy">
              <p className="portfolio-kicker">Open source · Chrome extension</p>
              <h3>{featured.title}</h3>
              <p className="portfolio-project-description">{featured.description}</p>
              <ul className="portfolio-feature-list">{featured.features?.map((feature) => <li key={feature}>{feature}</li>)}</ul>
              <a className="portfolio-button portfolio-button--light" href={featured.url} target="_blank" rel="noopener noreferrer">
                {featured.linkLabel}<FluentIcon name="arrow" size={14} />
              </a>
            </div>
            <ReadingPreview />
          </article>
        ) : null}
        <div className="portfolio-projects">
          {blogProjects.filter((project) => !project.featured).map((project) => <ProjectCard project={project} key={project.title} />)}
        </div>
      </section>

      <section id="notes" className="portfolio-section">
        <SectionHeading kicker="From the notebook" title="Notes & essays"><span className="portfolio-caption">Writing in Chinese</span></SectionHeading>
        <div className="portfolio-note-list">
          {recentNotes.map((note, index) => (
            <a className="portfolio-note-row" href={note.href} key={note.title}>
              <span className="portfolio-note-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <div><h3>{note.title}</h3><p>{note.description}</p></div>
              <span className="portfolio-note-action">Read note <span aria-hidden="true">↗</span></span>
            </a>
          ))}
        </div>
        <div className="portfolio-writing-context">
          <div><h3>{blogUsage.title}</h3><p>{blogUsage.description}</p><Tags items={blogUsage.tags} /></div>
          <div className="portfolio-theme-list">
            {blogThemes.map((theme) => <div key={theme.title}><h3>{theme.title}</h3><p>{theme.description}</p></div>)}
          </div>
        </div>
      </section>
      <ContactSection kicker="Build something useful" title={blogCta.title} description={blogCta.description} href={blogCta.href} label="Start a conversation" />
    </div>
  );
}
