import { test } from '@playwright/test';
import { PageManager } from '../utils/pageManager';
import { InventoryItem } from '../utils/enums/inventoryItems';
import { cartLocators } from '../utils/locators/cart';
import { checkoutLocators } from '../utils/locators/checkout';
import { orderCompletionLocators } from '../utils/locators/orderCompletion';
import { checkoutOverviewLocators } from '../utils/locators/checkoutOverview';
import { InventoryLocators } from '../utils/locators/inventory';
import { UrlRegexConstants } from '../utils/urlRegexConstants';
import { TextConstants } from '../utils/textConstant'


//Added for debugging purposes, will remove it
//export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

test('SauceDemo: complete checkout flow with 3 random items', async ({ page }) => {
  const pages = new PageManager(page);
 
  //Adding item via inventory page
  await page.goto('/inventory.html');
  const items = pages.inventoryPage.getItemsToBuy(3,[InventoryItem.BACKPACK, InventoryItem.FLEECE_JACKET, InventoryItem.BIKE_LIGHT]);
  const itemName = await pages.inventoryPage.addItems(items.length, items);
  await pages.inventoryPage.verifyItemCountOnInventoryCart(3);
  await pages.inventoryPage.clickOnCart();

  // Verifying cart page operations

  await pages.utils.verifyPageUrlAndHeading(
    UrlRegexConstants.cart,
    cartLocators.cartHeading,
    TextConstants.Heading.cart);
  await pages.cartPage.verifyCartItemsAndDescriptions(itemName);
  await pages.cartPage.proceedToCheckout();

  // Verifying checkout page operations

  await pages.utils.verifyPageUrlAndHeading(
    UrlRegexConstants.checkoutStepOne,
    checkoutLocators.checkoutPageHeading,
    TextConstants.Heading.checkoutStepOne);
  await pages.checkoutPage.enterUserInformation();
  await pages.checkoutPage.proceedToCheckoutOverview();

   // Verifying checkout overview page operations

  await pages.utils.verifyPageUrlAndHeading(
    UrlRegexConstants.checkoutStepTwo,
    checkoutOverviewLocators.checkoutOverviewPageHeading,
    TextConstants.Heading.checkoutStepTwo);
  const amount = await pages.checkoutOverviewPage.verifyOrderItem(itemName);
  await pages.checkoutOverviewPage.verifyOrderShippingDetails(amount);
  await pages.checkoutOverviewPage.finishOrder();

   // Verifying order Submission page

   await pages.utils.verifyPageUrlAndHeading(
    UrlRegexConstants.checkoutComplete,
    orderCompletionLocators.checkoutComplete,
    TextConstants.Heading.checkoutComplete);
   await pages.orderCompletionPage.verifyOrderSuccessPage();
   await pages.orderCompletionPage.redirectBackToHomeScreen();
   await pages.utils.verifyPageUrlAndHeading(UrlRegexConstants.inventory,InventoryLocators.inventoryPageHeading,TextConstants.Heading.inventory);

});
