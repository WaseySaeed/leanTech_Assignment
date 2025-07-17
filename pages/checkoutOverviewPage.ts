import { expect, Page } from '@playwright/test';
import { checkoutOverviewLocators } from '../utils/locators/checkoutOverview';
import { cartLocators } from '../utils/locators/cart';
import { TextConstants } from '../utils/textConstant';

export class CheckoutOverviewPage {
  constructor(private page: Page) {}
  
  async finishOrder() {
   this.page.click(checkoutOverviewLocators.checkoutFinishButton);
  }

  async verifyOrderItem(itemNames:string[]) {
   const allItems = Object.values(TextConstants.Cart);
   let total = 0;
     
       for (const item of allItems) {
         if (!itemNames.includes(item.name)) continue;
     
         // Checking item name
         await expect(
           this.page.locator(checkoutOverviewLocators.itemsLocator, { hasText: item.name })
         ).toBeVisible();
     
         // Checking item description
         await expect(
           this.page.locator(checkoutOverviewLocators.inventoryItemDesc, { hasText: item.desc })
         ).toBeVisible();

        // Checking item amount
        await expect(
          this.page.locator(checkoutOverviewLocators.InventoryItemPrice, { hasText: `$${item.amount}` })
        ).toBeVisible();

        total += item.amount;
  }
  return total;
  }
  

  async verifyOrderShippingDetails(amount:number) {
    const validateShippingDetailsLocators = [
      checkoutOverviewLocators.paymentInfoLabel,
      checkoutOverviewLocators.paymentInfoValue,
      checkoutOverviewLocators.shippingInfoLabel,
      checkoutOverviewLocators.shippingInfoValue,
      checkoutOverviewLocators.totalInfoLabel,
      checkoutOverviewLocators.subTotalLabel,
      checkoutOverviewLocators.taxLabel,
      checkoutOverviewLocators.totalLabel
    ];
    
    for (const items of validateShippingDetailsLocators) {
      await expect(this.page.locator(items)).toBeVisible();
    }
    await expect(this.page.locator(checkoutOverviewLocators.subTotalLabel)).toHaveText(`Item total: $${amount.toString()}`);
  }
}