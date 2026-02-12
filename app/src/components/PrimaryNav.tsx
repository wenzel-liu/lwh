import type { Ref } from 'react';
import { navItems } from '@/content/navigation';
import { isNavItemActive } from '@/lib/nav';

interface PrimaryNavProps {
  currentPath?: string;
  className?: string;
  id?: string;
  ariaLabel?: string;
  onNavigate?: () => void;
  navRef?: Ref<HTMLElement>;
}

export function PrimaryNav({
  currentPath,
  className = 'top-nav',
  id,
  ariaLabel = 'Primary',
  onNavigate,
  navRef
}: PrimaryNavProps) {
  const activePath =
    currentPath ?? (typeof window !== 'undefined' ? window.location.pathname : '/index.html');

  return (
    <nav className={className} id={id} aria-label={ariaLabel} ref={navRef}>
      {navItems.map((item) => {
        const isActive = isNavItemActive(activePath, item.href);

        return (
          <a
            key={item.href}
            className={`nav-link${isActive ? ' active' : ''}`}
            href={item.href}
            data-nav-link
            aria-current={isActive ? 'page' : undefined}
            onClick={() => onNavigate?.()}
          >
            {item.label}
          </a>
        );
      })}
    </nav>
  );
}
