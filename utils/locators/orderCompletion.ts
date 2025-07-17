import { Page } from "@playwright/test";

export const orderCompletionLocators = {
    checkoutComplete: '[data-test="title"]',
    checkoutFinishButton:'[data-test="finish"]',
    orderSuccessMessage: '[data-test="complete-header"]',
    orderSuccessCompleteMessage: '[data-test="complete-text"]',
    backToHomeButon:'[data-test="back-to-products"]',
};