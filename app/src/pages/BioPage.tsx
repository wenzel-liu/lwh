import { BentoCard, BentoGrid } from '@/components/Bento';
import { FluentIcon } from '@/components/FluentIcon';
import { PageIntro } from '@/components/PageIntro';
import { SocialIcon } from '@/components/SocialIcon';
import {
  homeCta,
  homeIntro,
  homeProjects,
  homePublications,
  profileSummary,
  selectedExperience
} from '@/content/profile';

export function BioPage() {
  const primaryChips = profileSummary.heroChips.slice(0, 4);

  return (
    <>
      <PageIntro kicker={homeIntro.kicker} title={homeIntro.title} description={homeIntro.description} />

      <section className="fds-hero" data-reveal data-reveal-delay={20}>
        <article className="fds-card fds-card--mica fds-hero-ident">
          <div className="fds-avatar-frame">
            <img src={profileSummary.avatarSrc} alt="Portrait of Wenzel Liu" />
          </div>
          <div className="fds-identity">
            <h2>{profileSummary.name}</h2>
            <p>{profileSummary.role}</p>
          </div>
          <div className="fds-hero-chips">
            {primaryChips.map((chip) => (
              <span key={chip} className="fds-chip fds-chip--green">
                {chip}
              </span>
            ))}
          </div>
          <div className="fds-identity-meta">
            <span>
              <FluentIcon name="pin" size={14} />
              {profileSummary.location}
            </span>
            <a href={`mailto:${profileSummary.email}`}>
              <FluentIcon name="mail" size={14} />
              {profileSummary.email}
            </a>
          </div>
          <div className="fds-social-row" aria-label="Social links">
            {profileSummary.socialLinks.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                {social.label === 'ORCID' ? <SocialIcon name="ORCID" /> : <SocialIcon name={social.label as 'GitHub' | 'LinkedIn' | 'X'} />}
              </a>
            ))}
          </div>
        </article>

        <article className="fds-card fds-card--accent fds-hero-main">
          <p className="fds-eyebrow">Cardiology · RNA Biology · Translational Analytics</p>
          <h2 className="fds-hero-title">{profileSummary.tagline}</h2>
          <p className="fds-hero-description">
            I work at the intersection of mechanistic cardiovascular research and deployable evidence design, with a
            focus on heart failure, omics-driven target validation, and clinically grounded translational workflows.
          </p>
          <div className="fds-hero-chips">
            {profileSummary.heroChips.map((chip, index) => (
              <span key={chip} className={`fds-chip${index < 2 ? ' fds-chip--accent' : ''}`}>
                {chip}
              </span>
            ))}
          </div>
          <div className="fds-hero-actions">
            <a className="fds-btn fds-btn--primary" href={homeCta.emailHref}>
              <FluentIcon name="mail" size={15} />
              Email Wenzel
            </a>
            <a className="fds-btn fds-btn--secondary" href={homeCta.cvHref} download>
              <FluentIcon name="download" size={15} />
              Curriculum Vitae
            </a>
          </div>
        </article>
      </section>

      <BentoGrid ariaLabel="Homepage overview">
        <BentoCard className="span-3" revealDelay={60}>
          <p className="fds-eyebrow">Current Focus</p>
          <h3 className="fds-card-title">What I am building right now</h3>
          <ul className="fds-focus-list">
            {profileSummary.focusItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </BentoCard>

        <BentoCard className="span-3" revealDelay={100}>
          <p className="fds-eyebrow">Methods</p>
          <h3 className="fds-card-title">Core stack and working languages</h3>
          <div className="fds-chip-row">
            {profileSummary.coreStack.map((skill) => (
              <span className="fds-chip" key={skill}>
                {skill}
              </span>
            ))}
          </div>
          <hr className="fds-divider" />
          <div className="fds-chip-row">
            {profileSummary.languages.map((language) => (
              <span className="fds-chip fds-chip--green" key={language}>
                {language}
              </span>
            ))}
          </div>
        </BentoCard>

        <BentoCard className="span-4" revealDelay={140}>
          <div className="fds-section-head">
            <h3 className="fds-card-title">Selected publications and talks</h3>
            <a className="fds-link-inline" href="research.html">
              Open research archive
            </a>
          </div>
          <div className="fds-publication-list">
            {homePublications.map((item) => (
              <article className="fds-publication-item" key={item.title}>
                <h4>{item.title}</h4>
                <p>{item.summary}</p>
              </article>
            ))}
          </div>
        </BentoCard>

        <BentoCard className="span-2" revealDelay={180}>
          <div className="fds-section-head">
            <h3 className="fds-card-title">Selected experience</h3>
            <a className="fds-link-inline" href="experience.html">
              Full timeline
            </a>
          </div>
          <div className="fds-mini-timeline">
            {selectedExperience.map((item) => (
              <article className="fds-mini-timeline-item" key={item.title}>
                <h4>{item.title}</h4>
                <p>{item.summary}</p>
              </article>
            ))}
          </div>
        </BentoCard>

        <BentoCard className="span-6" revealDelay={220}>
          <div className="fds-section-head">
            <h3 className="fds-card-title">Projects and active surfaces</h3>
            <a className="fds-link-inline" href="blog.html">
              Notes and builds
            </a>
          </div>
          <div className="fds-project-grid">
            {homeProjects.map((project) => (
              <section className="fds-project-card" key={project.title}>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div className="fds-chip-row">
                  {project.tags.map((tag) => (
                    <span className="fds-chip fds-chip--accent" key={`${project.title}-${tag}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <a className="fds-link-inline" href={project.url} target="_blank" rel="noopener noreferrer">
                  Visit project
                  <FluentIcon name="arrow" size={12} />
                </a>
              </section>
            ))}
          </div>
        </BentoCard>

        <BentoCard className="span-6 fds-card--cta" revealDelay={260}>
          <p className="fds-eyebrow">Get In Touch</p>
          <h3 className="fds-card-title fds-card-title--large">{homeCta.title}</h3>
          <p className="fds-card-description">{homeCta.description}</p>
          <div className="fds-hero-actions">
            <a className="fds-btn fds-btn--primary" href={homeCta.emailHref}>
              <FluentIcon name="mail" size={15} />
              Start a conversation
            </a>
            <a className="fds-btn fds-btn--secondary" href={homeCta.cvHref} download>
              <FluentIcon name="download" size={15} />
              Download CV
            </a>
          </div>
        </BentoCard>
      </BentoGrid>
    </>
  );
}
