import type { ReactNode } from 'react';

interface PageIntroProps {
  kicker: string;
  title: string;
  description: string;
  children?: ReactNode;
}

export function PageIntro({ kicker, title, description, children }: PageIntroProps) {
  return (
    <header className="portfolio-page-intro">
      <div>
        <p className="portfolio-kicker">{kicker}</p>
        <h1>{title}</h1>
        <p className="portfolio-page-description">{description}</p>
      </div>
      {children ? <div className="portfolio-intro-aside">{children}</div> : null}
    </header>
  );
}
