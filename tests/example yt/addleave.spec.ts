import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sfworkplaze.dataon.com/standard/home');
  await page.locator('li').filter({ hasText: 'Time & Attendance' }).locator('svg').dblclick();
  await page.getByRole('link', { name: 'Leave Request' }).click();
  await page.getByRole('button', { name: 'plus Add' }).click();
  await page.getByRole('combobox', { name: '* Type Of Leave :' }).click();
  await page.getByText('Annual Leave').click();
  await page.getByRole('textbox', { name: 'Remark :' }).click();
  await page.getByRole('textbox', { name: 'Remark :' }).fill('Test');
  await page.getByRole('button', { name: 'Send To Approver' }).click();
  await page.waitForTimeout(5000);
});