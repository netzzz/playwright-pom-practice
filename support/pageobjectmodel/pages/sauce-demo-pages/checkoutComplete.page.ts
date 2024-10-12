import { expect, type Page } from '@playwright/test';

export default class CheckoutCompletePage {
    private readonly page: Page;

    constructor(page: Page){
        this.page=page;
    }

    public async goto(){
        await this.page.goto("https://www.saucedemo.com/checkout-complete.html");
    }

    // Locators

    orderSuccessfulText = () => this.page.getByText("Thank you for your order!");

    // Methods

    public async expectOrderToBeCompleted(){
        await expect(this.orderSuccessfulText()).toBeVisible();
    }
}