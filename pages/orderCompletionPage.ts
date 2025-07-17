import { expect, Page } from '@playwright/test';
import { orderCompletionLocators } from '../utils/locators/orderCompletion';
import { TextConstants } from '../utils/textConstant';

export class OrderCompletionPage {
  constructor(private page: Page) {}

 async verifyOrderSuccessPage() {
    await expect(this.page.locator(orderCompletionLocators.orderSuccessMessage)).toHaveText(TextConstants.Checkout.OrderSuccess);
    await expect(this.page.locator(orderCompletionLocators.orderSuccessCompleteMessage)).toHaveText(TextConstants.Checkout.OrderSuccessSubDetails);
  }

  async redirectBackToHomeScreen()
  {
    await this.page.click(orderCompletionLocators.backToHomeButon);
  }
}