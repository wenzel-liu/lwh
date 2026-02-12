import type { ReactNode } from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@/context/ThemeContext';
import { SiteShell } from '@/components/SiteShell';
import '@/styles/site.css';

export function renderPage(page: ReactNode) {
  const root = document.getElementById('app');

  if (!root) {
    throw new Error('Missing #app root element');
  }

  createRoot(root).render(
    <StrictMode>
      <ThemeProvider>
        <SiteShell>{page}</SiteShell>
      </ThemeProvider>
    </StrictMode>
  );
}
