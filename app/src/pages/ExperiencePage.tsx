import { BentoCard, BentoGrid } from '@/components/Bento';
import { FluentIcon } from '@/components/FluentIcon';
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
        <BentoCard className="span-6" revealDelay={20}>
          <p className="fds-eyebrow">Profile Snapshot</p>
          <div className="fds-chip-row">
            {profileSnapshotChips.map((chip) => (
              <span className="fds-chip fds-chip--accent" key={chip}>
                {chip}
              </span>
            ))}
          </div>
        </BentoCard>

        <BentoCard className="span-4" revealDelay={60}>
          <div className="fds-section-head">
            <h3 className="fds-card-title">Professional and research experience</h3>
            <span>Clinical to translational</span>
          </div>
          <div className="fds-timeline-stack">
            {professionalExperience.map((entry) => (
              <section className="fds-timeline-card" key={entry.title}>
                <h4>{entry.title}</h4>
                <p className="fds-entry-meta">
                  {entry.period} · {entry.location}
                </p>
                <ul className="fds-bullet-list">
                  {entry.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </BentoCard>

        <BentoCard className="span-2" revealDelay={100}>
          <p className="fds-eyebrow">Education</p>
          <div className="fds-stack-list">
            {educationItems.map((item) => (
              <section className="fds-stack-item" key={item.title}>
                <h4>{item.title}</h4>
                <p>
                  {item.period} · {item.details}
                </p>
                {item.note ? <p className="fds-muted-note">{item.note}</p> : null}
              </section>
            ))}
          </div>
        </BentoCard>

        <BentoCard className="span-2" revealDelay={140}>
          <p className="fds-eyebrow">Training</p>
          <div className="fds-stack-list">
            {trainingItems.map((item) => (
              <div className="fds-stack-item" key={item.title}>
                <h4>{item.title}</h4>
                <p>{item.details}</p>
              </div>
            ))}
          </div>
        </BentoCard>

        <BentoCard className="span-2" revealDelay={180}>
          <p className="fds-eyebrow">Skills</p>
          <div className="fds-stack-list">
            <section className="fds-stack-item">
              <h4>Technical and Research Skills</h4>
              <div className="fds-chip-row">
                {technicalSkills.map((skill) => (
                  <span className="fds-chip" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            <section className="fds-stack-item">
              <h4>Languages</h4>
              <div className="fds-chip-row">
                {languageSkills.map((language) => (
                  <span className="fds-chip fds-chip--green" key={language}>
                    {language}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </BentoCard>

        <BentoCard className="span-2 fds-card--cta" revealDelay={230}>
          <p className="fds-eyebrow">Collaboration</p>
          <h3 className="fds-card-title">{collaborationCta.title}</h3>
          <p className="fds-card-description">{collaborationCta.description}</p>
          <div className="fds-hero-actions">
            <a className="fds-btn fds-btn--primary" href={collaborationCta.href}>
              <FluentIcon name="mail" size={15} />
              Discuss Collaboration
            </a>
          </div>
        </BentoCard>
      </BentoGrid>
    </>
  );
}
