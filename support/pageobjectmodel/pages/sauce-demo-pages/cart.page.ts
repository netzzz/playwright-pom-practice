import { expect, type Page, type Locator } from '@playwright/test';

export default class CartPage {
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async goto() {
        await this.page.goto("https://www.saucedemo.com/cart");
    }

    // Locators

    checkoutButton = () => this.page.getByText("Checkout");
    cartItem = () => this.page.locator(".cart_item");

    // Methods 

    public async goToCheckout() {
        await this.checkoutButton().click();
    }

    public async getAllItems(): Promise<Locator[]> {
        return await this.cartItem().all();
    }

    public async removeItem(locator: Locator){
        await locator.getByRole('button', { name: "Remove" }).click();
    }

    public async removeSpecifiedNumberOfItemsFromCart(numberOfItems: number) {
        let allItems = await this.getAllItems();

        if (numberOfItems <= allItems.length) {
            for (let i = 0; i < numberOfItems; i++) {
                await this.removeItem(this.cartItem().first());
            }
        }
        else {
            for (let i = 0; i < allItems.length; i++) {
                await this.removeItem(this.cartItem().first());
            }
        }
    }

    public async expectToHaveAnyItemsInCart() {
        expect((await this.getAllItems()).length).toBeGreaterThan(0);
    }

    public async expectToHaveSpecifiedNumberOfItemsInCart(expectedNumberOfItems: number) {
        expect((await this.getAllItems()).length).toBe(expectedNumberOfItems);
    }
}