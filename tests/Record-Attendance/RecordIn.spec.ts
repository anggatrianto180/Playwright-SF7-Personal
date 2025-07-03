import { test, expect } from '@playwright/test';

test('Record Attendance', async ({ page }) => {
    await page.goto('https://sfworkplaze.dataon.com/');
    await page.locator('#userName').fill('gordon');
    await page.locator('#password').fill('password123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.locator('[class="ant-btn ant-btn-primary"]').click();
    await page.locator('[class="ant-typography"]');
    await expect(page.locator('[class="ant-typography"]').nth(1)).toContainText('Completed');
});