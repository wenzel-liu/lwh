import { BentoCard, BentoGrid } from '@/components/Bento';
import { PageIntro } from '@/components/PageIntro';
import {
  collaborationCta,
  educationItems,
  experienceIntro,
  languageSkills,
  profileSnapshotChips,
  professionalExperience,
  technicalSkills,
  trainingItems
} from '@/content/experience';

export function ExperiencePage() {
  return (
    <>
      <PageIntro
        kicker={experienceIntro.kicker}
        title={experienceIntro.title}
        description={experienceIntro.description}
      />

      <BentoGrid ariaLabel="Experience content">
        <BentoCard className="span-3" revealDelay={20}>
          <h2 className="card-title">Profile Snapshot</h2>
          <div className="chips">
            {profileSnapshotChips.map((chip) => (
              <span className="chip soft" key={chip}>
                {chip}
              </span>
            ))}
          </div>
        </BentoCard>

        <BentoCard className="span-2 row-2" revealDelay={60}>
          <h3 className="card-title">Professional & Research Experience</h3>
          <div className="entry-grid">
            {professionalExperience.map((entry) => (
              <section className="entry" key={entry.title}>
                <h4>{entry.title}</h4>
                <p className="meta">
                  {entry.period} - {entry.location}
                </p>
                <ul className="text-list">
                  {entry.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </BentoCard>

        <BentoCard revealDelay={100}>
          <h3 className="card-title">Education</h3>
          <div className="list-compact">
            {educationItems.map((item) => (
              <section className="list-item" key={item.title}>
                <h4>{item.title}</h4>
                <p>
                  {item.period} - {item.details}
                </p>
                {item.note ? <p className="card-meta">{item.note}</p> : null}
              </section>
            ))}
          </div>
        </BentoCard>

        <BentoCard revealDelay={140}>
          <h3 className="card-title">Training</h3>
          <div className="timeline-list">
            {trainingItems.map((item) => (
              <div className="timeline-item" key={item.title}>
                <h4>{item.title}</h4>
                <p>{item.details}</p>
              </div>
            ))}
          </div>
        </BentoCard>

        <BentoCard className="span-2" revealDelay={180}>
          <h3 className="card-title">Skills & Languages</h3>
          <div className="entry-grid">
            <section className="entry">
              <h4>Technical and Research Skills</h4>
              <div className="chips chips-spaced">
                {technicalSkills.map((skill) => (
                  <span className="chip" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            <section className="entry">
              <h4>Languages</h4>
              <div className="chips chips-spaced">
                {languageSkills.map((language) => (
                  <span className="chip soft" key={language}>
                    {language}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </BentoCard>

        <BentoCard className="cta-card" revealDelay={230}>
          <h3 className="card-title">{collaborationCta.title}</h3>
          <p className="card-subtitle">{collaborationCta.description}</p>
          <div className="cta-actions">
            <a className="button-link" href={collaborationCta.href}>
              Discuss Collaboration
            </a>
          </div>
        </BentoCard>
      </BentoGrid>
    </>
  );
}
