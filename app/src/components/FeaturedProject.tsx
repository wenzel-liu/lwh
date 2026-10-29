import type { ProjectItem } from '@/content/types';
import { FluentIcon } from './FluentIcon';
import { ReadingPreview } from './ReadingPreview';

export function FeaturedProject({ project, headingLevel = 3 }: { project: ProjectItem; headingLevel?: 2 | 3 }) {
  const Heading = headingLevel === 2 ? 'h2' : 'h3';
  return (
    <article className="portfolio-featured" aria-label={project.title}>
      <div className="portfolio-featured-copy">
        <p className="portfolio-kicker">Open source · Chrome extension</p>
        <Heading>{project.title}</Heading>
        <p className="portfolio-project-description">{project.description}</p>
        <ul className="portfolio-feature-list">{project.features?.map(feature => <li key={feature}>{feature}</li>)}</ul>
        <a className="portfolio-button portfolio-button--light" href={project.url} target="_blank" rel="noopener noreferrer">
          {project.linkLabel ?? 'Explore project'}<FluentIcon name="arrow" size={14} />
        </a>
      </div>
      <ReadingPreview />
    </article>
  );
}
