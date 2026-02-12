import { expect, test } from '@playwright/test';

const pages = [
  { file: 'index.html', title: /Bio \| Wenzel Liu/i },
  { file: 'blog.html', title: /Blog \| Wenzel Liu/i },
  { file: 'experience.html', title: /Experience \| Wenzel Liu/i },
  { file: 'research.html', title: /Papers & Talks \| Wenzel Liu/i }
];

test.describe('site smoke checks', () => {
  for (const pageMeta of pages) {
    test(`loads ${pageMeta.file}`, async ({ page }) => {
      const errors: string[] = [];

      page.on('console', (message) => {
        if (message.type() === 'error') {
          errors.push(message.text());
        }
      });

      await page.goto(pageMeta.file);
      await expect(page).toHaveTitle(pageMeta.title);
      await expect(page.locator('h1').first()).toBeVisible();
      await expect(page.locator('a[href="#"]')).toHaveCount(0);
      expect(errors).toEqual([]);
    });
  }

  test('theme preference persists after reload', async ({ page }) => {
    await page.goto('index.html');
    await page.getByRole('button', { name: 'Theme options' }).click();
    await page.getByRole('menuitem', { name: 'Dark' }).click();
    await page.reload();

    await expect(page.locator('html')).toHaveAttribute('data-theme-preference', 'dark');
  });
});
