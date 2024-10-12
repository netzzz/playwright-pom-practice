import { expect, type Page } from '@playwright/test';

export default class CartPage {
    private readonly page: Page;

    constructor(page: Page){
        this.page=page;
    }

    public async goto(){
        await this.page.goto("https://www.saucedemo.com/cart");
    }

    // Locators

    checkoutButton = () => this.page.getByText("Checkout");
    cartItem = () => this.page.locator(".cart_item");

    // Methods 

    public async goToCheckout(){
        await this.checkoutButton().click();
    }

    public async expectToHaveItemsInCart(){
        let allCartItems = await this.cartItem().all();
        expect((allCartItems).length).toBeGreaterThan(0);
    }
}