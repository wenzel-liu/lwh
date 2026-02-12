import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { ThemeProvider, useTheme } from '@/context/ThemeContext';
import { ThemeControl } from './ThemeControl';

function ReadTheme() {
  const { preference } = useTheme();
  return <output data-testid="pref">{preference}</output>;
}

describe('ThemeControl', () => {
  it('switches theme preference and persists state', async () => {
    const user = userEvent.setup();
    const setItem = vi.spyOn(Storage.prototype, 'setItem');

    render(
      <ThemeProvider>
        <ThemeControl />
        <ReadTheme />
      </ThemeProvider>
    );

    await user.click(screen.getByRole('button', { name: /theme options/i }));
    await user.click(screen.getByRole('menuitem', { name: 'Dark' }));

    expect(screen.getByTestId('pref')).toHaveTextContent('dark');
    expect(setItem).toHaveBeenCalled();

    setItem.mockRestore();
  });
});
