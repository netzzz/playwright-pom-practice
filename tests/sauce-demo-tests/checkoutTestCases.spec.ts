import { test } from '../../fixtures/sauceDemoBasePage';
import { LoginPageData } from '../../support/test-data/sauce-demo-test-data/loginPage.data';
import { CheckoutErrorType, CheckoutPageData } from '../../support/test-data/sauce-demo-test-data/checkoutPage.data';

test.describe('login functionality test cases', () => {
    test.beforeEach(async ({loginPage, productsInventoryPage, cartPage })=>{
        await loginPage.goto();
        await loginPage.fillUsernameInput(LoginPageData.getValidUsername());
        await loginPage.fillPasswordInput(LoginPageData.getValidPassword());
        await loginPage.clickLoginButton();
        await productsInventoryPage.addProductsToCart(await productsInventoryPage.getAllProducts());
        await productsInventoryPage.goToShoppingCart();  
        await cartPage.expectToHaveAnyItemsInCart();
        await cartPage.goToCheckout();
    })

    test('checkout using empty name, valid last name and valid postal code', async ({page, checkoutStepOnePage, checkoutStepTwoPage}) => {
        await checkoutStepOnePage.fillLastName(CheckoutPageData.getValidLastName());
        await checkoutStepOnePage.fillPostalCode(CheckoutPageData.getValidPostalCode());
        await checkoutStepOnePage.continueCheckout();
        await checkoutStepOnePage.expectToFindErrorMessage(CheckoutErrorType.EmptyFirstName);
    })

    test('checkout using valid name, empty last name and valid postal code', async ({page, checkoutStepOnePage, checkoutStepTwoPage}) => {
        await checkoutStepOnePage.fillFirstName(CheckoutPageData.getValidFirstName());
        await checkoutStepOnePage.fillPostalCode(CheckoutPageData.getValidPostalCode());
        await checkoutStepOnePage.continueCheckout();
        await checkoutStepOnePage.expectToFindErrorMessage(CheckoutErrorType.EmptyLastName);
    })

    test('checkout using valid name, valid last name and empty postal code', async ({page, checkoutStepOnePage, checkoutStepTwoPage}) => {
        await checkoutStepOnePage.fillFirstName(CheckoutPageData.getValidFirstName());
        await checkoutStepOnePage.fillLastName(CheckoutPageData.getValidPostalCode());
        await checkoutStepOnePage.continueCheckout();
        await checkoutStepOnePage.expectToFindErrorMessage(CheckoutErrorType.EmptyPostalCode);
    })

    test('checkout using valid name, valid last name and valid postal code', async ({checkoutStepOnePage, checkoutStepTwoPage}) => {
        await checkoutStepOnePage.fillFirstName(CheckoutPageData.getValidFirstName());
        await checkoutStepOnePage.fillLastName(CheckoutPageData.getValidLastName());
        await checkoutStepOnePage.fillPostalCode(CheckoutPageData.getValidPostalCode());
        await checkoutStepOnePage.continueCheckout();
        await checkoutStepTwoPage.expectToHavePriceTotalOnPage();
    })
})