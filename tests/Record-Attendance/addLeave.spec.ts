import { test, expect } from '@playwright/test';
import { login } from '../login.spec';

test('Add Leave Request', async ({ page }) => {
    await login(page);

    await page.goto('https://sfworkplaze.dataon.com/standard/hrm.time-and-attendance.attendance-request.leave-request.Add');
    await page.waitForURL('https://sfworkplaze.dataon.com/standard/hrm.time-and-attendance.attendance-request.leave-request.Add');
    await page.locator('[id="LeaveRequestAdd_LEAVE_CODE"]').click();
    await page.locator('[class="ant-select-item-option-content"]').nth(1).click()

    const input = page.locator('xpath=//input[@id="LeaveRequestAdd_LEAVE_STARTDATE_PART"]');
    await input.click();
    await input.press('Control+A');
    await input.press('Delete');
    await input.fill('2 Aug 2025');
    
    await page.locator('xpath=//div[10]').click();

    const inputTo = page.locator('xpath=//input[@id="LeaveRequestAdd_LEAVE_ENDDATE_PART"]');
    await inputTo.click();
    await inputTo.press('Control+A');
    await inputTo.press('Delete');
    await inputTo.fill('2 Aug 2025');

    await page.locator('xpath=//textarea[@id="LeaveRequestAdd_REMARK"]').fill('Reason AT');
    await page.locator('xpath=//button[@class="ant-btn ant-btn-primary"]').dblclick()
    // await page.waitForURL('https://sfworkplaze.dataon.com/standard/hrm.time-and-attendance.attendance-request.leave-request');
    // await expect(page).toHaveURL('https://sfworkplaze.dataon.com/standard/hrm.time-and-attendance.attendance-request.leave-request');
});