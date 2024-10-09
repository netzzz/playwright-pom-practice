import { expect } from '@playwright/test';
import { test } from '../../fixtures/sauceDemoBasePage';

test('Login -> Purchase -> Checkout', async ({page, loginPage})=>{
    await loginPage.goto();
    await loginPage.fillUsernameInput("standard_user");
    await loginPage.fillPasswordInput("secret_sauce");
    await loginPage.clickLoginButton();

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