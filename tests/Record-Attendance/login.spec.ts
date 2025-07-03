import { test, expect } from '@playwright/test';

test('TC-01-Login', async ({page}) => {
    await page.goto('https://sfworkplaze.dataon.com/');
    await page.locator('#userName').fill('gordon');
    await page.locator('#password').fill('password123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForTimeout(5000);
    await expect(page).toHaveURL('https://sfworkplaze.dataon.com/standard/home');
    await page.waitForTimeout(5000);
});;