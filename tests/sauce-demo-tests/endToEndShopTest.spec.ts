import { expect } from '@playwright/test';
import { test } from '../../fixtures/sauceDemoBasePage';

test('Login -> Purchase -> Checkout', async ({page, loginPage, productsInventoryPage})=>{
    await loginPage.goto();
    await loginPage.fillUsernameInput("standard_user");
    await loginPage.fillPasswordInput("secret_sauce");
    await loginPage.clickLoginButton();

    await productsInventoryPage.addAllProductsToCart();
    await productsInventoryPage.goToShoppingCart();

    await page.getByText("Checkout").click();
    await page.getByPlaceholder("First Name").fill("John");
    await page.getByPlaceholder("Last Name").fill("Doe");
    await page.getByPlaceholder("Zip/Postal Code").fill("11000");
    await page.getByText("Continue").click();
    await page.getByText("Finish").click();
    expect(await page.getByText("Thank you for your order!").isVisible());
    await page.pause();
})