import { FeaturedProject } from '@/components/FeaturedProject';
import { PageIntro } from '@/components/PageIntro';
import { ContactSection, ProjectCard } from '@/components/PortfolioParts';
import { projects, projectsIntro } from '@/content/projects';

export function ProjectsPage() {
  const featured = projects.find(project => project.featured);
  const others = projects.filter(project => !project.featured);
  return (
    <div className="portfolio-page">
      <PageIntro {...projectsIntro} />
      <section aria-label="Independent projects" className="portfolio-project-showcase">
        {featured ? <FeaturedProject project={featured} headingLevel={2} /> : null}
        {others.length ? <div className="portfolio-projects">{others.map(project => <ProjectCard key={project.title} project={project} />)}</div> : null}
      </section>
      <ContactSection kicker="Build something useful" title="Share a build idea" description="If you have an idea for a reading or research tool, I’m happy to hear it." href="mailto:wenzel_liu@outlook.jp" label="Get in touch" />
    </div>
  );
}
