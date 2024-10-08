import { test, expect } from '@playwright/test';

test('Login -> Purchase -> Checkout', async ({page})=>{
    await page.goto("https://www.saucedemo.com/");
    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");
    await page.getByText("Login").click();
    const products = await page.locator(".inventory_list > div").all();
    for(let product of products){
        await product.getByText("Add to cart").click();
    }
    await page.locator(".shopping_cart_link").click();
    await page.getByText("Checkout").click();
    await page.getByPlaceholder("First Name").fill("John");
    await page.getByPlaceholder("Last Name").fill("Doe");
    await page.getByPlaceholder("Zip/Postal Code").fill("11000");
    await page.getByText("Continue").click();
    await page.getByText("Finish").click();
    expect(await page.getByText("Thank you for your order!").isVisible());
})