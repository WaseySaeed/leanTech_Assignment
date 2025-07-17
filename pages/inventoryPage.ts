import { expect, Page } from '@playwright/test';
import { InventoryLocators } from '../utils/locators/inventory';
import { InventoryItem } from '../utils/enums/inventoryItems';

export class InventoryPage {
  constructor(private page: Page) {}
  

  async addItems(count: number, items: InventoryItem[]) {
    const addedNames: string[] = [];
    if (!items || items.length === 0) {throw new Error('No items provided to add to cart.');}
      
    for (let i = 0; i < count; i++) 
      {
        const itemCard = this.page.locator(
          `[data-test="inventory-item"]:has(${InventoryLocators.addToCartButton(items[i])})`
        );
        const name = await itemCard.locator('[data-test="inventory-item-name"]').textContent();
      
        if (name) addedNames.push(name.trim());
        await this.page.click(InventoryLocators.addToCartButton(items[i]));
      }

      return addedNames;
  }

  async clickOnCart() {
    await this.page.click(InventoryLocators.checkoutCart);
  }

  getItemsToBuy(count?: number, customItems?: InventoryItem[]) {
    const allItems = Object.values(InventoryItem);
    const itemsToUse = customItems && customItems.length > 0 ? customItems : allItems;
    return count ? itemsToUse.slice(0, count) : itemsToUse;
  }

  async verifyItemCountOnInventoryCart(expectedCount: number)
  { 
    const badgeLocator = this.page.locator(InventoryLocators.cartItemCount);
    await badgeLocator.waitFor({ state: 'visible' });
    const itemCountText = parseInt(await badgeLocator.textContent() || '0', 10);
    await expect(itemCountText).toBe(expectedCount)
  }
}