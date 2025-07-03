import { test, expect } from '@playwright/test';

test('TC-01-Login', async ({page}) => {
    await page.goto('https://sfworkplaze.dataon.com/');

    await page.waitForTimeout(5000);
    // id => #autocomplete
    // class => .autocomplete
    // attr => [id="autocomplete"] or [type="submit"]
    // class => .box -> 2 duplicate ? page.locator('.box').last(); // page.locator('.box').first()
    await expect(page).toHaveTitle(/Human Capital Management System/);
    await page.getByRole('textbox', { name: '* Username' }).fill('gordon');
    await page.getByRole('textbox', { name: '* Password' }).fill('password123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForTimeout(5000);
    await expect(page).toHaveURL('https://sfworkplaze.dataon.com/standard/home');
    await page.waitForTimeout(5000);
});;