import { chromium, FullConfig } from '@playwright/test';
import { LoginPage } from './pages/loginPage';
import { Users, COMMON_PASSWORD } from './utils/enums/users';

async function globalSetup(config: FullConfig) {
  const baseURL = config.projects[0].use.baseURL!;
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  const loginPage = new LoginPage(page);
  await page.goto(baseURL);
  await loginPage.login(Users.STANDARD, COMMON_PASSWORD);

  // Save session to file
  await context.storageState({ path: 'auth.json' });
  await browser.close();
}

export default globalSetup;