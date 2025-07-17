import { InventoryItem } from '../enums/inventoryItems';

export const InventoryLocators = {
  inventoryPageHeading: '[data-test="title"]',
  checkoutCart: '[data-test="shopping-cart-link"]',
  addToCartButton: (item: InventoryItem) => `[data-test="add-to-cart-${item}"]`,
  removeFromCartButton: (item: InventoryItem) => `[data-test="remove-${item}"]`,
  itemName: (item: InventoryItem) => `[data-test=${item}]`,
  cartItemCount: '[data-test="shopping-cart-badge"]',
};