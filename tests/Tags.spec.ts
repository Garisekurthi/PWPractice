import { expect, test } from "@playwright/test";
test.describe('Tags describe 1', () => {
    test.beforeEach(async ({ page }): Promise<void> => {
        await page.goto('https://playwright.dev/');
    });
    test('smoke test1', { tag: '@smoke' }, async ({ page }) => {
        await expect(page).toHaveTitle(/Playwright/);
    });
    test('regression test1', { tag: '@regression' }, async ({ page }) => {
        await expect(page).toHaveTitle(/Playwright/);
    });
    test('smoke test2', { tag: '@smoke' }, async ({ page }) => {
        await expect(page).toHaveTitle(/Playwright/);
    });
    test('smoke test3', { tag: '@smoke' }, async ({ page }) => {
        await expect(page).toHaveTitle(/Playwright/);
    });
});