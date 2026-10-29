import type { ReactNode } from 'react';
import { FluentIcon } from './FluentIcon';
import type { ProjectItem } from '@/content/types';

export function SectionHeading({ kicker, title, children }: { kicker: string; title: string; children?: ReactNode }) {
  return (
    <header className="portfolio-section-heading">
      <div><p className="portfolio-kicker">{kicker}</p><h2>{title}</h2></div>
      {children}
    </header>
  );
}

export function Tags({ items, label }: { items: string[]; label?: string }) {
  return <ul className="portfolio-tags" aria-label={label}>{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

export function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <article className="portfolio-project">
      <div className="portfolio-project-heading"><h3>{project.title}</h3><span aria-hidden="true">↗</span></div>
      <p>{project.description}</p>
      <div className="portfolio-project-bottom">
        <Tags items={project.tags} label={`${project.title} topics`} />
        <a className="portfolio-text-link" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Explore ${project.title}`}>Explore project</a>
      </div>
    </article>
  );
}

export function ContactSection({ kicker, title, description, href, label }: { kicker: string; title: string; description: string; href: string; label: string }) {
  return (
    <section className="portfolio-contact">
      <div><p className="portfolio-kicker">{kicker}</p><h2>{title}</h2><p>{description}</p></div>
      <a className="portfolio-button" href={href}>{label}<FluentIcon name="arrow" size={14} /></a>
    </section>
  );
}
