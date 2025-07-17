import { Page } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { InventoryPage } from '../pages/inventoryPage';
import { CartPage } from '../pages/cartPage';
import { CheckoutPage } from '../pages/checkoutPage';
import { CheckoutOverviewPage } from '../pages/checkoutOverviewPage';
import { OrderCompletionPage } from '../pages/orderCompletionPage';
import { CommonUtils } from './commonUtil';


export class PageManager {
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
  checkoutOverviewPage: CheckoutOverviewPage;
  orderCompletionPage: OrderCompletionPage;
  utils: CommonUtils;


  constructor(public page: Page) {
    this.loginPage = new LoginPage(page);
    this.inventoryPage = new InventoryPage(page);
    this.cartPage = new CartPage(page);
    this.checkoutPage = new CheckoutPage(page);
    this.checkoutOverviewPage = new CheckoutOverviewPage(page);
    this.orderCompletionPage = new OrderCompletionPage(page);
    this.utils = new CommonUtils(page);
  }
}