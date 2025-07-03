import { test, expect } from '@playwright/test';

test('Add Leave Request', async ({ page }) => {
  await page.goto('https://sfworkplaze.dataon.com/standard/hrm.time-and-attendance.attendance-request.leave-request');
});