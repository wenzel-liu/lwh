import { BentoCard, BentoGrid } from '@/components/Bento';
import { PageIntro } from '@/components/PageIntro';
import { blogCta, blogIntro, blogProjects, blogThemes, blogUsage, recentNotes } from '@/content/blog';

export function BlogPage() {
  return (
    <>
      <PageIntro kicker={blogIntro.kicker} title={blogIntro.title} description={blogIntro.description} />

      <BentoGrid ariaLabel="Blog content">
        <BentoCard className="span-3" revealDelay={20}>
          <h2 className="card-title">{blogUsage.title}</h2>
          <p className="card-subtitle">{blogUsage.description}</p>
          <div className="chips chips-spaced">
            {blogUsage.tags.map((tag) => (
              <span className="chip soft" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </BentoCard>

        {blogProjects.map((project, index) => (
          <BentoCard key={project.title} revealDelay={70 + index * 30}>
            <h3 className="card-title">{project.title}</h3>
            <p className="card-subtitle">{project.description}</p>
            <div className="chips chips-spaced">
              {project.tags.map((tag) => (
                <span className="chip" key={`${project.title}-${tag}`}>
                  {tag}
                </span>
              ))}
            </div>
            <div className="cta-actions">
              <a className="button-link secondary" href={project.url} target="_blank" rel="noopener noreferrer">
                Visit Project
              </a>
            </div>
          </BentoCard>
        ))}

        <BentoCard revealDelay={130}>
          <h3 className="card-title">Recent Notes</h3>
          <div className="list-compact">
            {recentNotes.map((note) => (
              <div className="list-item" key={note.title}>
                <h4>{note.title}</h4>
                <p>{note.description}</p>
                <a className="link-inline" href={note.href}>
                  Read note
                </a>
              </div>
            ))}
          </div>
        </BentoCard>

        <BentoCard className="span-2" revealDelay={170}>
          <h3 className="card-title">Themes I Work Through</h3>
          <div className="entry-grid">
            {blogThemes.map((theme) => (
              <div className="entry" key={theme.title}>
                <h4>{theme.title}</h4>
                <p className="desc">{theme.description}</p>
              </div>
            ))}
          </div>
        </BentoCard>

        <BentoCard className="cta-card" revealDelay={220}>
          <h3 className="card-title">{blogCta.title}</h3>
          <p className="card-subtitle">{blogCta.description}</p>
          <div className="cta-actions">
            <a className="button-link" href={blogCta.href}>
              Start a Conversation
            </a>
          </div>
        </BentoCard>
      </BentoGrid>
    </>
  );
}
