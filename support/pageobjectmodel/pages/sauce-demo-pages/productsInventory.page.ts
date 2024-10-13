import { expect, type Page, type Locator } from '@playwright/test';

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

    public async getAllProducts(): Promise<Locator[]>{
        return await this.productDivs().all();
    }

    // public async addAllProductsToCart(){
    //     let allProducts = await this.getAllProducts();
    //     for(let product of allProducts){
    //         await product.getByText("Add to cart").click();
    //     }
    // }

    public async getSpecifiedAmountOfProducts(numberOfProducts: number){
        let allProducts = await this.getAllProducts();
        let productsToAddToCart: Locator[] = [];
        for(let i=0;i<numberOfProducts;i++){
            productsToAddToCart.push(allProducts[i])
        }
        return productsToAddToCart;
    }

    public async addProductsToCart(products: Locator[]){
        for(let product of products){
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