import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://sfworkplaze.dataon.com/');
})

test.describe('Valid Group',{tag:'@ValidGroup'},() => {
    test('Test Case 1', async({page}) => {
        //await page.goto('https://sfworkplaze.dataon.com/');
        await page.waitForTimeout(5000)
        await page.getByRole('button', { name: 'Login' }).click();
    });

    test('Test Case 2', async({page}) => {
        await page.waitForTimeout(5000)
        await page.getByRole('button', { name: 'Login' }).click();
    });

    test('Test Case 3', async({page}) => {
        await page.waitForTimeout(5000)
        await page.getByRole('button', { name: 'Login' }).click();
    });  
})

test.afterEach(async ({ page }) => {
    await page.waitForTimeout(3000);
})

