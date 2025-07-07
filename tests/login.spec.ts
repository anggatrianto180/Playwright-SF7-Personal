import { test, expect, Page } from '@playwright/test';

export async function login(page: Page) {
    await test.step('Langkah 1: Membuka halaman login', async () => {
    await page.goto('https://sfworkplaze.dataon.com/');
  });

  await test.step('Langkah 2: Mengisi username', async () => {
    await page.locator('#userName').fill('gordon');
  });

  await test.step('Langkah 3: Mengisi password', async () => {
    await page.locator('#password').fill('password123');
  });

  await test.step('Langkah 4: Menekan tombol Login', async () => {
    await page.getByRole('button', { name: 'Login' }).click();
  });

  await test.step('Langkah 5: Memverifikasi berhasil login dan masuk ke dashboard', async () => {
    await expect(page).toHaveURL('https://sfworkplaze.dataon.com/standard/home');
})};