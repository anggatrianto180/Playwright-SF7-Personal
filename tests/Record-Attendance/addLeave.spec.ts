import { test, expect } from '@playwright/test';

test('Add Leave Request', async ({ page }) => {
    await page.goto('https://sfworkplaze.dataon.com/');
    await page.locator('#userName').fill('gordon');
    await page.locator('#password').fill('password123');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL('https://sfworkplaze.dataon.com/standard/home');
    await page.goto('https://sfworkplaze.dataon.com/standard/hrm.time-and-attendance.attendance-request.leave-request');
});