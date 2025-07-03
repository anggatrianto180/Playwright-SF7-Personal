import { test, expect } from '@playwright/test';

test('Add Claim Request Single', async ({ page }) => {
  await page.goto('https://sfworkplaze.dataon.com/auth');
  await page.getByRole('textbox', { name: '* User ID' }).fill('gordon');
  await page.getByRole('textbox', { name: '* Password' }).fill('password123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('menuitem', { name: 'reimbursement' }).locator('svg').click();
  await page.getByRole('link', { name: 'Claim Form' }).click();
  await page.getByRole('button', { name: 'Add Claim down' }).click();
  await page.getByRole('link', { name: 'plus Add Single Claim' }).click();
  await page.getByRole('combobox', { name: '* Claim Type :' }).click();
  await page.getByRole('combobox', { name: '* Claim Type :' }).fill('acco');
  await page.getByText('Accomodation').click();
  await page.getByRole('row', { name: '* Amount : IDR' }).getByRole('textbox').click();
  await page.getByRole('row', { name: '* Amount : IDR' }).getByRole('textbox').fill('10,0000.00');
  await page.getByRole('row', { name: '* Amount : IDR' }).click();
  await page.getByRole('textbox', { name: 'Remark :' }).click();
  await page.getByRole('textbox', { name: 'Remark :' }).fill('Remark');
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'Send to Approver' }).click();
  await page.waitForTimeout(5000);

  await expect(page).toHaveURL('https://sfworkplaze.dataon.com/standard/hrm.reimbursement.claim');
  //Sample Assertion use variable
  //const claimPage = page.getByRole('heading', {name : 'Dashboard'});
  //await expect(claimPage).toBeVisible();
});