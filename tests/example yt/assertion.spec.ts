import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sfworkplaze.dataon.com/standard/home');

  await page.waitForSelector('[class="bio-desc-name"]')
  await expect(page.getByText('Gordon Enns')).toHaveText('Gordon Enns');
});