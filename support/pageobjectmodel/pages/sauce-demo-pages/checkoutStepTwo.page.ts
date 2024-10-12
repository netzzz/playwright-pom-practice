import { type Page } from '@playwright/test';

export default class CheckoutStepTwoPage {
    private readonly page: Page;

    constructor(page: Page){
        this.page=page;
    }

    public async goto(){
        await this.page.goto("https://www.saucedemo.com/checkout-step-two.html");
    }

    // Locators

    finishButton = () => this.page.getByText("Finish");

    // Methods

    public async finishCheckout(){
        await this.finishButton().click();
    }
}
