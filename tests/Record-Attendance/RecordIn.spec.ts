import { test, expect } from '@playwright/test';
import { login } from '../login.spec';

test('Record Attendance', async ({ page }) => {
    await login(page);

    await page.waitForSelector('text=Record time');
    await page.locator('text=Record time').dblclick();
    await page.waitForSelector('text=Success');
});