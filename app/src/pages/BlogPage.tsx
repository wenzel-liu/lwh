import { BentoCard, BentoGrid } from '@/components/Bento';
import { FluentIcon } from '@/components/FluentIcon';
import { PageIntro } from '@/components/PageIntro';
import { blogCta, blogIntro, blogProjects, blogThemes, blogUsage, recentNotes } from '@/content/blog';

export function BlogPage() {
  return (
    <>
      <PageIntro kicker={blogIntro.kicker} title={blogIntro.title} description={blogIntro.description} />

      <BentoGrid ariaLabel="Blog content">
        <BentoCard className="span-6" revealDelay={20}>
          <p className="fds-eyebrow">Working Mode</p>
          <h2 className="fds-card-title">{blogUsage.title}</h2>
          <p className="fds-card-description">{blogUsage.description}</p>
          <div className="fds-chip-row">
            {blogUsage.tags.map((tag) => (
              <span className="fds-chip fds-chip--accent" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </BentoCard>

        {blogProjects.map((project, index) => (
          <BentoCard className="span-3" key={project.title} revealDelay={70 + index * 30}>
            <p className="fds-eyebrow">Project Surface</p>
            <h3 className="fds-card-title">{project.title}</h3>
            <p className="fds-card-description">{project.description}</p>
            <div className="fds-chip-row">
              {project.tags.map((tag) => (
                <span className="fds-chip fds-chip--green" key={`${project.title}-${tag}`}>
                  {tag}
                </span>
              ))}
            </div>
            <div className="fds-hero-actions">
              <a className="fds-btn fds-btn--secondary" href={project.url} target="_blank" rel="noopener noreferrer">
                Visit project
                <FluentIcon name="arrow" size={14} />
              </a>
            </div>
          </BentoCard>
        ))}

        <BentoCard className="span-4" revealDelay={130}>
          <div className="fds-section-head">
            <h3 className="fds-card-title">Recent notes</h3>
            <span>Long-form posts</span>
          </div>
          <div className="fds-stack-list">
            {recentNotes.map((note) => (
              <div className="fds-stack-item" key={note.title}>
                <h4>{note.title}</h4>
                <p>{note.description}</p>
                <a className="fds-link-inline with-icon" href={note.href}>
                  Read note
                  <FluentIcon name="arrow" size={12} />
                </a>
              </div>
            ))}
          </div>
        </BentoCard>

        <BentoCard className="span-2 fds-card--mica" revealDelay={170}>
          <p className="fds-eyebrow">Themes</p>
          <h3 className="fds-card-title">What I write through</h3>
          <div className="fds-stack-list">
            {blogThemes.map((theme) => (
              <div className="fds-stack-item" key={theme.title}>
                <h4>{theme.title}</h4>
                <p>{theme.description}</p>
              </div>
            ))}
          </div>
        </BentoCard>

        <BentoCard className="span-6 fds-card--cta" revealDelay={220}>
          <p className="fds-eyebrow">Share A Build Idea</p>
          <h3 className="fds-card-title">{blogCta.title}</h3>
          <p className="fds-card-description">{blogCta.description}</p>
          <div className="fds-hero-actions">
            <a className="fds-btn fds-btn--primary" href={blogCta.href}>
              <FluentIcon name="mail" size={15} />
              Start a Conversation
            </a>
          </div>
        </BentoCard>
      </BentoGrid>
    </>
  );
}
