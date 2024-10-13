import { test } from '../../fixtures/sauceDemoBasePage';
import { LoginPageData } from '../../support/test-data/sauce-demo-test-data/loginPage.data';
import { CheckoutPageData } from '../../support/test-data/sauce-demo-test-data/checkoutPage.data';

test('Login -> Purchase -> Checkout', async ({page, loginPage, productsInventoryPage, 
    cartPage, checkoutStepOnePage, checkoutStepTwoPage, checkoutCompletePage})=>{
    await loginPage.goto();
    await loginPage.fillUsernameInput(LoginPageData.getValidUsername());
    await loginPage.fillPasswordInput(LoginPageData.getValidPassword());
    await loginPage.clickLoginButton();
    await productsInventoryPage.addProductsToCart(await productsInventoryPage.getAllProducts());
    await productsInventoryPage.goToShoppingCart();  
    await cartPage.expectToHaveAnyItemsInCart();
    await cartPage.goToCheckout();
    await checkoutStepOnePage.fillFirstName(CheckoutPageData.getValidFirstName());
    await checkoutStepOnePage.fillLastName(CheckoutPageData.getValidLastName());
    await checkoutStepOnePage.fillPostalCode(CheckoutPageData.getValidPostalCode());
    await checkoutStepOnePage.continueCheckout();
    await checkoutStepTwoPage.finishCheckout();
    await checkoutCompletePage.expectOrderToBeCompleted();
})