interface PageIntroProps {
  kicker: string;
  title: string;
  description: string;
}

export function PageIntro({ kicker, title, description }: PageIntroProps) {
  return (
    <section className="page-intro" data-reveal>
      <p className="page-kicker">{kicker}</p>
      <h1 className="page-title">{title}</h1>
      <p className="page-description">{description}</p>
    </section>
  );
}
