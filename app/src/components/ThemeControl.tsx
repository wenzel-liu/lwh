import { useEffect, useMemo, useRef, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import type { ThemePreference } from '@/lib/theme';

const options: ThemePreference[] = ['light', 'dark', 'system'];

function labelForPreference(preference: ThemePreference): string {
  return preference.charAt(0).toUpperCase() + preference.slice(1);
}

export function ThemeControl() {
  const { preference, setPreference } = useTheme();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onDocumentClick = (event: MouseEvent) => {
      if (!containerRef.current) {
        return;
      }

      const target = event.target as Node;
      if (!containerRef.current.contains(target)) {
        setOpen(false);
      }
    };

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('click', onDocumentClick);
    document.addEventListener('keydown', onEscape);

    return () => {
      document.removeEventListener('click', onDocumentClick);
      document.removeEventListener('keydown', onEscape);
    };
  }, [open]);

  const currentLabel = useMemo(() => labelForPreference(preference), [preference]);

  return (
    <div className={`theme-control${open ? ' open' : ''}`} data-theme-control ref={containerRef}>
      <button
        className="icon-button"
        type="button"
        data-theme-toggle
        aria-haspopup="true"
        aria-expanded={open}
        aria-label="Theme options"
        onClick={(event) => {
          event.stopPropagation();
          setOpen((prev) => !prev);
        }}
      >
        <span aria-hidden="true">*</span>
        <span className="theme-label" data-theme-current>
          {currentLabel}
        </span>
      </button>

      <div className="theme-menu" data-theme-menu role="menu" aria-label="Theme mode">
        {options.map((option) => {
          const isActive = option === preference;
          return (
            <button
              key={option}
              className={`theme-option${isActive ? ' active' : ''}`}
              type="button"
              data-theme-option={option}
              role="menuitem"
              aria-pressed={isActive}
              onClick={() => {
                setPreference(option);
                setOpen(false);
              }}
            >
              {labelForPreference(option)}
            </button>
          );
        })}
      </div>
    </div>
  );
}
