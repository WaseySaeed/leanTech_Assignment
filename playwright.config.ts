import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    headless: false,
    baseURL: 'https://www.saucedemo.com',
    storageState: 'auth.json',
    screenshot: 'only-on-failure',
    launchOptions: {
      slowMo: 500,
    }
  },
  globalSetup: './global-setup.ts'
});
