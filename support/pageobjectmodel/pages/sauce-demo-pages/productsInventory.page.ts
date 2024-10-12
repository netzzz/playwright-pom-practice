import { expect, type Page } from '@playwright/test';

export default class ProductsInventoryPage {
    private readonly page: Page;

    constructor(page: Page){
        this.page=page;
    }

    public async goto(){
        await this.page.goto("https://www.saucedemo.com/inventory.html");
    }

    // Locators

    productDivs = () => this.page.locator(".inventory_list > div");
    shoppingCartIcon = () => this.page.locator(".shopping_cart_link");

    // Methods

    public async addAllProductsToCart(){
        let allProducts = await this.productDivs().all();
        for(let product of allProducts){
            await product.getByText("Add to cart").click();
        }
    }

    public async goToShoppingCart(){
        await this.shoppingCartIcon().click();
    }

    public async verifySuccessfulLogin(){
        await expect(this.shoppingCartIcon()).toBeVisible();
    }
}