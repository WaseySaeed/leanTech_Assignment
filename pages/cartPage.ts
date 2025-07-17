import { expect, Page } from '@playwright/test';
import { cartLocators } from '../utils/locators/cart';
import { TextConstants } from '../utils/textConstant';

export class CartPage {
  constructor(private page: Page) {}

  async verifyCartItemsAndDescriptions(itemNames: string[]) {
    const allItems = Object.values(TextConstants.Cart);
  
    for (const item of allItems) {
      if (!itemNames.includes(item.name)) continue;
  
      // Check item name
      await expect(
        this.page.locator(cartLocators.itemsLocator, { hasText: item.name })
      ).toBeVisible();
  
      // Check item description
      await expect(
        this.page.locator(cartLocators.inventoryItemDesc, { hasText: item.desc })
      ).toBeVisible();
    }
  }
  

  async proceedToCheckout() {
     await this.page.click(cartLocators.cartCheckout);
  }
}