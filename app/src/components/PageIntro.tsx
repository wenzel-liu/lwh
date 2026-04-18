interface PageIntroProps {
  kicker: string;
  title: string;
  description: string;
}

export function PageIntro({ kicker, title, description }: PageIntroProps) {
  return (
    <header className="fds-page-header" data-reveal>
      <p className="fds-eyebrow">{kicker}</p>
      <h1 className="fds-page-title">{title}</h1>
      <p className="fds-page-description">{description}</p>
    </header>
  );
}
