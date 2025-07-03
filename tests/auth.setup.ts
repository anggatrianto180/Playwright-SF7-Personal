import { test as setup, expect } from '@playwright/test';
import path from 'path';

const authFile = path.join(__dirname, '../playwright/.auth/user.json');

setup('authenticate', async ({ page }) => {
    await page.goto('https://sfworkplaze.dataon.com/');;
    await page.getByRole('textbox', { name: '* User ID' }).fill('gordon');
    await page.getByRole('textbox', { name: '* Password' }).fill('password123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForTimeout(5000);
    await expect(page).toHaveURL('https://sfworkplaze.dataon.com/standard/home');
    await page.waitForTimeout(5000);

  await page.context().storageState({ path: authFile });
});