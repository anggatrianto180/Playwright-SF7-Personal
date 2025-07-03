import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sfworkplaze.dataon.com/standard/home');
  await expect(page).toHaveURL('https://sfworkplaze.dataon.com/standard/home');
});