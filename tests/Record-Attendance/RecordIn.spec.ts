import { test, expect } from '@playwright/test';

test('Record Attendance', async ({ page }) => {
  await page.goto('https://sfworkplaze.dataon.com/standard/home');
  await page.locator('[class="ant-btn ant-btn-primary"]').click();
  await page.locator('[class="ant-typography"]');
  await expect(page.locator('[class="ant-typography"]').nth(1)).toContainText('Completed');
});