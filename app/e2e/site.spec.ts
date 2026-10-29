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

test.describe('work-first homepage', () => {
  test('work shortcut reaches the showcase and emphasis changes the preview, not its text', async ({ page }) => {
    await page.goto('index.html');
    await page.getByRole('link', { name: 'Explore my work' }).click();
    await expect(page).toHaveURL(/#work$/);
    await expect(page.getByRole('heading', { name: 'Selected work' })).toBeInViewport();

    const sample = page.locator('#reading-sample');
    const text = await sample.textContent();
    const firstWord = sample.locator('strong').first();
    const emphasizedWeight = await firstWord.evaluate((node) => Number(getComputedStyle(node).fontWeight));
    const toggle = page.getByRole('button', { name: 'Word emphasis' });
    await expect(toggle).toHaveAttribute('aria-pressed', 'true');
    await toggle.click();
    await expect(toggle).toHaveAttribute('aria-pressed', 'false');
    const plainWeight = await firstWord.evaluate((node) => Number(getComputedStyle(node).fontWeight));
    expect(emphasizedWeight).toBeGreaterThan(plainWeight);
    expect(await sample.textContent()).toBe(text);
    await toggle.click();
    await expect(firstWord).toHaveCSS('font-weight', String(emphasizedWeight));
  });

  for (const width of [390, 768, 940]) {
    test(`navigation and content fit a ${width}px viewport`, async ({ page }) => {
      await page.setViewportSize({ width, height: 844 });
      await page.goto('index.html');
      const toggle = page.getByRole('button', { name: 'Toggle navigation' });
      await toggle.click();
      const menu = page.getByRole('navigation', { name: 'Mobile navigation' });
      await expect(menu).toBeVisible();
      await page.setViewportSize({ width: width + 5, height: 844 });
      await expect(menu).toBeVisible();
      await page.keyboard.press('Escape');
      await expect(menu).toBeHidden();
      await expect(toggle).toBeFocused();
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);

      await toggle.click();
      await menu.getByRole('link', { name: 'Experience' }).click();
      await expect(page).toHaveTitle(/Experience/);
    });
  }

  test('keyboard users can skip directly to the content', async ({ page }) => {
    await page.goto('index.html');
    await page.keyboard.press('Tab');
    await expect(page.getByRole('link', { name: 'Skip to content' })).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(page.getByRole('main')).toBeFocused();
  });

  test('portrait and CV are available in the production preview', async ({ page }) => {
    await page.goto('index.html');
    const portrait = page.getByRole('img', { name: 'Portrait of Wenzel Liu' });
    await expect(portrait).toBeVisible();
    expect(await portrait.evaluate((node) => (node as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
    const href = await page.getByRole('link', { name: 'Curriculum Vitae', exact: true }).getAttribute('href');
    const response = await page.request.get(href!);
    expect(response.ok()).toBe(true);
    expect((await response.body()).subarray(0, 4).toString()).toBe('%PDF');
  });
});
