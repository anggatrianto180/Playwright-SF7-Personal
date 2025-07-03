import { test, expect } from '@playwright/test';

test.use({
  storageState: 'playwright/.auth/user.json'
});

test('test', async ({ page }) => {
  await page.goto('https://sfworkplaze.dataon.com/standard/hrm.loan.loan-request.Add');
  await page.locator('div:nth-child(6) > div:nth-child(2) > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-row > .ant-select > .ant-select-selector').click();
  await page.getByRole('combobox', { name: '* Type of Loan :' }).fill('at');
  await page.getByText('House Flat Declining Balance').click();
  await page.getByRole('row', { name: '* Loan Amount :' }).getByRole('textbox').click();
  await page.getByRole('row', { name: '* Loan Amount :' }).getByRole('textbox').fill('100,0000.00');
  await page.getByRole('button', { name: 'Calculate' }).click();
});