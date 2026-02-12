import type { ReactNode } from 'react';

export function BentoGrid({ children, ariaLabel }: { children: ReactNode; ariaLabel: string }) {
  return (
    <section className="bento-grid" aria-label={ariaLabel}>
      {children}
    </section>
  );
}

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  revealDelay?: number;
}

export function BentoCard({ children, className, revealDelay }: BentoCardProps) {
  return (
    <article className={`bento-card${className ? ` ${className}` : ''}`} data-reveal data-reveal-delay={revealDelay}>
      {children}
    </article>
  );
}
