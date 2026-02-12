import { useEffect } from 'react';

function revealWithoutMotion(nodes: HTMLElement[]) {
  nodes.forEach((node) => node.classList.add('is-revealed'));
}

export function SiteMotion() {
  useEffect(() => {
    document.documentElement.classList.add('reveal-ready');

    const nodes = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    if (!nodes.length) {
      return;
    }

    const prefersReducedMotion =
      typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || typeof window.IntersectionObserver === 'undefined') {
      revealWithoutMotion(nodes);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const node = entry.target as HTMLElement;
          const delay = Number(node.getAttribute('data-reveal-delay') || 0);
          node.style.transitionDelay = delay > 0 ? `${delay}ms` : '0ms';
          node.classList.add('is-revealed');
          observer.unobserve(node);
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -30px 0px'
      }
    );

    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  return null;
}
