import { BentoCard, BentoGrid } from '@/components/Bento';
import { PageIntro } from '@/components/PageIntro';
import {
  homeCta,
  homeIntro,
  homeProjects,
  homePublications,
  profileSummary,
  selectedExperience
} from '@/content/profile';

export function BioPage() {
  return (
    <>
      <PageIntro kicker={homeIntro.kicker} title={homeIntro.title} description={homeIntro.description} />

      <BentoGrid ariaLabel="Homepage overview">
        <BentoCard className="span-2 row-2 hero-card" revealDelay={20}>
          <div className="hero-main">
            <h2>{profileSummary.name}</h2>
            <p className="hero-tagline">{profileSummary.role}</p>
            <p>{profileSummary.tagline}</p>

            <div className="hero-meta">
              {profileSummary.heroChips.map((chip, index) => (
                <span key={chip} className={`chip${index < 3 ? ' soft' : ''}`}>
                  {chip}
                </span>
              ))}
            </div>

            <hr className="card-divider" />

            <h3 className="card-title">Current Focus</h3>
            <ul className="text-list">
              {profileSummary.focusItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <aside className="hero-aside">
            <div className="avatar-wrap">
              <img src={profileSummary.avatarSrc} alt="Portrait of Wenzel Liu" />
            </div>

            <div className="info-pair">
              <span className="info-key">Location</span>
              <span className="info-val">{profileSummary.location}</span>
            </div>

            <div className="info-pair">
              <span className="info-key">Contact</span>
              <span className="info-val">
                <a className="link-inline" href={`mailto:${profileSummary.email}`}>
                  {profileSummary.email}
                </a>
              </span>
            </div>

            <div className="social-row" aria-label="Social links">
              {profileSummary.socialLinks.map((social) => (
                <a
                  key={social.label}
                  className="social-link"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </aside>
        </BentoCard>

        <BentoCard className="row-2" revealDelay={60}>
          <h3 className="card-title">Selected Experience</h3>
          <div className="timeline-list">
            {selectedExperience.map((item) => (
              <div className="timeline-item" key={item.title}>
                <h4>{item.title}</h4>
                <p>{item.summary}</p>
              </div>
            ))}
          </div>
          <p className="card-meta">
            <a className="link-inline" href="experience.html">
              View full experience timeline
            </a>
          </p>
        </BentoCard>

        <BentoCard className="span-2" revealDelay={120}>
          <h3 className="card-title">Selected Publications & Talks</h3>
          <div className="list-compact">
            {homePublications.map((item) => (
              <div className="list-item" key={item.title}>
                <h4>{item.title}</h4>
                <p>{item.summary}</p>
              </div>
            ))}
          </div>
          <p className="card-meta">
            <a className="link-inline" href="research.html">
              Browse complete papers & conference talks
            </a>
          </p>
        </BentoCard>

        <BentoCard className="span-2" revealDelay={180}>
          <h3 className="card-title">Projects</h3>
          <div className="project-grid">
            {homeProjects.map((project) => (
              <section className="project-card" key={project.title}>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div className="chips">
                  {project.tags.map((tag) => (
                    <span className="chip" key={`${project.title}-${tag}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <a className="button-link secondary" href={project.url} target="_blank" rel="noopener noreferrer">
                  Visit Project
                </a>
              </section>
            ))}
          </div>
          <p className="card-meta">
            <a className="link-inline" href="blog.html">
              See all project notes and writing
            </a>
          </p>
        </BentoCard>

        <BentoCard revealDelay={220}>
          <h3 className="card-title">Core Stack</h3>
          <div className="chips">
            {profileSummary.coreStack.map((skill) => (
              <span className="chip" key={skill}>
                {skill}
              </span>
            ))}
          </div>

          <hr className="card-divider" />

          <div className="chips">
            {profileSummary.languages.map((language) => (
              <span className="chip soft" key={language}>
                {language}
              </span>
            ))}
          </div>
        </BentoCard>

        <BentoCard className="cta-card span-3" revealDelay={260}>
          <h3 className="card-title">{homeCta.title}</h3>
          <p className="card-subtitle">{homeCta.description}</p>
          <div className="cta-actions">
            <a className="button-link" href={homeCta.emailHref}>
              Email Me
            </a>
            <a className="button-link secondary" href={homeCta.cvHref} download>
              Download CV
            </a>
          </div>
        </BentoCard>
      </BentoGrid>
    </>
  );
}
