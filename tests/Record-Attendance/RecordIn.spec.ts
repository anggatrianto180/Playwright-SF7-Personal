import { test, expect } from '@playwright/test';

test('Record Attendance', async ({ page }) => {
    await page.goto('https://sfworkplaze.dataon.com/');
    await page.waitForTimeout(5000);
    await expect(page).toHaveTitle(/Human Capital Management System/);
    await page.getByRole('textbox', { name: '* Username' }).fill('gordon');
    await page.getByRole('textbox', { name: '* Password' }).fill('password123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForTimeout(5000);
    await expect(page).toHaveURL('https://sfworkplaze.dataon.com/standard/home');
    await page.waitForTimeout(5000);
    await page.locator('[class="ant-btn ant-btn-primary"]').click();
    await page.locator('[class="ant-typography"]');
    await expect(page.locator('[class="ant-typography"]').nth(1)).toContainText('Completed');
});