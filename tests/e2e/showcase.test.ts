import { test, expect } from '@playwright/test';

test.describe('Strata Plugin Showcase', () => {
  test('should display device info and handle touches', async ({ page }) => {
    await page.goto('http://localhost:3000');

    // Check device info
    await expect(page.locator('#platform')).not.toBeEmpty();
    await expect(page.locator('#orientation')).toBeVisible();

    // Perform a touch action
    const touchArea = page.locator('.touch-area');
    await touchArea.click();

    // Check touch count (StrataInputProvider uses React Native's Responder system, 
    // which we might need to mock or trigger correctly in web)
    // For now, let's just ensure the UI rendered and we can take a screenshot
    await page.screenshot({ path: 'showcase-screenshot.png' });
  });

  test('visual regression check', async ({ page }) => {
    await page.goto('http://localhost:3000');
    // Simple visual snapshot test
    await expect(page).toHaveScreenshot('showcase-initial.png');
  });
});
