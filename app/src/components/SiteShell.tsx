import type { ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';
import { FluentIcon } from './FluentIcon';
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
    <div className="fds-app-shell">
      <header className="fds-topbar">
        <div className="fds-topbar-inner">
          <a className="fds-brand" href="index.html" aria-label="Wenzel Liu homepage">
            <span className="fds-brand-glyph">W</span>
            <span className="fds-brand-copy">
              <strong>Wenzel Liu</strong>
              <span>Fluent Research Portfolio</span>
            </span>
          </a>

          <PrimaryNav currentPath={currentPath} className="top-nav" ariaLabel="Primary" />

          <div className="fds-topbar-actions">
            <div className="fds-search-shell" aria-hidden="true">
              <FluentIcon name="search" size={14} />
              <span>Search papers, talks, notes</span>
            </div>
            <ThemeControl />

            <button
              ref={mobileToggleRef}
              className="fds-iconbtn mobile-toggle"
              type="button"
              aria-controls="mobile-nav"
              aria-expanded={mobileOpen}
              aria-label="Toggle navigation"
              onClick={() => setMobileOpen((open) => !open)}
            >
              <span className="mobile-toggle-label">Menu</span>
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

      <main className="fds-shell">{children}</main>

      <footer className="fds-footer">
        <span>© 2026 Wenzel Liu</span>
        <span className="sep">·</span>
        <span>Fluent rebuild for the personal research site</span>
        <span className="sep">·</span>
        <a href="https://github.com/wenzel-liu/lwh" target="_blank" rel="noopener noreferrer">
          View source
        </a>
      </footer>

      <SiteMotion />
    </div>
  );
}
