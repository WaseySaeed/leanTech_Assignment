import { Page } from '@playwright/test';
import { LoginLocators } from '../utils/locators/login';

export class LoginPage {
  constructor(private page: Page) {}

  async login(username: string, password: string) {
    await this.page.fill(LoginLocators.username, username);
    await this.page.fill(LoginLocators.password, password);
    await this.page.click(LoginLocators.loginButton);
  }
}