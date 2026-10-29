import { FluentIcon } from '@/components/FluentIcon';
import { PageIntro } from '@/components/PageIntro';
import { ContactSection, SectionHeading, Tags } from '@/components/PortfolioParts';
import { homeCta } from '@/content/profile';
import {
  collaborationCta, educationItems, experienceIntro, languageSkills, profileSnapshotChips,
  professionalExperience, technicalSkills, trainingItems
} from '@/content/experience';

export function ExperiencePage() {
  return (
    <div className="portfolio-page">
      <PageIntro {...experienceIntro}>
        <a className="portfolio-button" href={homeCta.cvHref} download>Download CV<FluentIcon name="download" size={15} /></a>
        <nav className="portfolio-page-index" aria-label="On this page">
          <a href="#career"><span>Experience</span><span aria-hidden="true">↘</span></a>
          <a href="#education"><span>Education & training</span><span aria-hidden="true">↘</span></a>
          <a href="#skills"><span>Skills & languages</span><span aria-hidden="true">↘</span></a>
        </nav>
      </PageIntro>

      <section id="career" className="portfolio-section">
        <SectionHeading kicker="Clinical to translational" title="Experience" />
        <Tags items={profileSnapshotChips} label="Profile overview" />
        <ol className="portfolio-timeline">
          {professionalExperience.map((entry, index) => (
            <li key={entry.title}>
              <div className="portfolio-timeline-meta">
                <p className="portfolio-kicker">{index === 0 ? 'Current role' : 'Earlier experience'}</p>
                <p>{entry.period}</p><span>{entry.location}</span>
              </div>
              <article><h3>{entry.title}</h3><ul>{entry.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></article>
            </li>
          ))}
        </ol>
      </section>

      <section id="education" className="portfolio-section">
        <SectionHeading kicker="Foundation" title="Education & training" />
        <div className="portfolio-detail-grid">
          <div className="portfolio-detail-column">
            <h3 className="portfolio-column-title">Education</h3>
            {educationItems.map((item) => (
              <article className="portfolio-detail-item" key={item.title}>
                <p className="portfolio-kicker">{item.period}</p><h4>{item.title}</h4><p>{item.details}</p>
                {item.note ? <p className="portfolio-award">{item.note}</p> : null}
              </article>
            ))}
          </div>
          <div className="portfolio-detail-column">
            <h3 className="portfolio-column-title">Clinical training</h3>
            {trainingItems.map((item) => <article className="portfolio-detail-item" key={item.title}><h4>{item.title}</h4><p>{item.details}</p></article>)}
          </div>
        </div>
      </section>

      <section id="skills" className="portfolio-section">
        <SectionHeading kicker="In practice" title="Tools & languages" />
        <div className="portfolio-detail-grid">
          <div><h3 className="portfolio-column-title">Technical & research skills</h3><Tags items={technicalSkills} /></div>
          <div><h3 className="portfolio-column-title">Working languages</h3><Tags items={languageSkills} /></div>
        </div>
      </section>
      <ContactSection kicker="Work together" title={collaborationCta.title} description={collaborationCta.description} href={collaborationCta.href} label="Discuss collaboration" />
    </div>
  );
}
