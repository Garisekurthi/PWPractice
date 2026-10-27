import { test, expect } from "@playwright/test";

test.describe('Annotations', () => {
    test.beforeEach(async ({ page }): Promise<void> => {
        await page.goto('https://playwright.dev/');
    });
    test('slow test', async ({ page }) => {
        test.slow();
        await expect(page).toHaveTitle(/Playwright/);
    });

    test.skip('skipped test', async ({ page }) => {
       await expect(page).toHaveTitle(/Playwright/);
    });

    test.fail('failing test', async ({ page }) => {
        await expect(page).toHaveTitle(/Playwright/);
    });

    test.fixme('fixme test', async ({ page }) => {
        await expect(page).toHaveTitle(/Playwright/);
    });
});
