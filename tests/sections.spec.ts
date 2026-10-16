import { test, expect } from '@playwright/test';

test.describe('Page sections', () => {
  test.describe('@smoke', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
    });

    test('Hero section exists', async ({ page }) => {
      const hero = page.getByRole('heading', { name: 'Add setting sync to your app', level: 1 });
      await expect(hero).toBeVisible();
    });

    test('Application Animation section exists', async ({ page }) => {
      const appAnimation = page.locator('section#application-animation');
      await expect(appAnimation).toBeVisible();
    });

    test('Developer SDKs section exists', async ({ page }) => {
      const devSDKs = page.getByRole('heading', { name: 'Developer SDKs', level: 2 });
      await expect(devSDKs).toBeVisible();
    });

    test('Coming Soon section exists', async ({ page }) => {
      const comingSoon = page.getByRole('heading', { name: 'SmallSync is Almost Here', level: 2 });
      await expect(comingSoon).toBeVisible();
    });
  });
});
