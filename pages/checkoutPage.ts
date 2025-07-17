import { Page } from '@playwright/test';
import { checkoutLocators } from '../utils/locators/checkout';
import { Users } from '../utils/enums/users';
import { CommonUtils } from '../utils/commonUtil';


export class CheckoutPage {
  constructor(private page: Page) {}

 async enterUserInformation() {

  const [firstNameText = '', lastNameText = ''] = Users.STANDARD.split('_');
  await this.page.fill(checkoutLocators.firstName,firstNameText);
  await this.page.fill(checkoutLocators.lastName,lastNameText);
  await this.page.fill(checkoutLocators.zipCode,CommonUtils.generateRandomNumbers());
}

async proceedToCheckoutOverview() {
  await this.page.click(checkoutLocators.continueButton);
}

}