import { Page, expect } from '@playwright/test';

export class CommonUtils {
    constructor(private page: Page) {}

  async verifyPageUrlAndHeading( urlRegex: RegExp, headingLocator: string, expectedHeading: string) {
    await expect(this.page).toHaveURL(urlRegex);
    await expect(this.page.locator(headingLocator)).toHaveText(expectedHeading);
  }

  static generateRandomNumbers()
  {
    const randomNumber = Math.floor(10000 + Math.random() * 90000).toString();
    return randomNumber;
  }
}