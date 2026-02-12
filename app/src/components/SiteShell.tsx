import type { ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';
import { PrimaryNav } from './PrimaryNav';
import { ThemeControl } from './ThemeControl';
import { SiteMotion } from './SiteMotion';

interface SiteShellProps {
  children: ReactNode;
}

export function SiteShell({ children }: SiteShellProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileNavRef = useRef<HTMLElement>(null);
  const mobileToggleRef = useRef<HTMLButtonElement>(null);

  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/index.html';

  useEffect(() => {
    if (!mobileOpen) {
      return;
    }

    const onDocumentClick = (event: MouseEvent) => {
      const target = event.target as Node;
      const menu = mobileNavRef.current;
      const toggle = mobileToggleRef.current;

      if (!menu || !toggle) {
        return;
      }

      if (!menu.contains(target) && !toggle.contains(target)) {
        setMobileOpen(false);
      }
    };

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
      }
    };

    document.addEventListener('click', onDocumentClick);
    document.addEventListener('keydown', onEscape);

    return () => {
      document.removeEventListener('click', onDocumentClick);
      document.removeEventListener('keydown', onEscape);
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) {
        setMobileOpen(false);
      }
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="topbar-inner">
          <a className="brand" href="index.html" aria-label="Wenzel Liu homepage">
            <span className="brand-dot" />
            <span className="brand-text">Wenzel Liu</span>
          </a>

          <PrimaryNav currentPath={currentPath} className="top-nav" ariaLabel="Primary" />

          <div className="topbar-actions">
            <ThemeControl />

            <button
              ref={mobileToggleRef}
              className="icon-button mobile-toggle"
              type="button"
              aria-controls="mobile-nav"
              aria-expanded={mobileOpen}
              aria-label="Toggle navigation"
              onClick={() => setMobileOpen((open) => !open)}
            >
              Menu
            </button>
          </div>
        </div>

        <PrimaryNav
          id="mobile-nav"
          currentPath={currentPath}
          navRef={mobileNavRef}
          className={`mobile-nav${mobileOpen ? ' open' : ''}`}
          ariaLabel="Mobile navigation"
          onNavigate={() => setMobileOpen(false)}
        />
      </header>

      <main className="site-content">{children}</main>

      <footer className="site-footer">
        <p>
          (c) 2026 Wenzel Liu. Licensed under{' '}
          <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank" rel="noopener noreferrer">
            CC BY-NC-ND 4.0
          </a>
          .
        </p>
      </footer>

      <SiteMotion />
    </div>
  );
}
