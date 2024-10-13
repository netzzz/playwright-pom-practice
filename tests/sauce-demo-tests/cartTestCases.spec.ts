import { test } from '../../fixtures/sauceDemoBasePage';
import { LoginPageData } from '../../support/test-data/sauce-demo-test-data/loginPage.data';

test.describe('cart functionality test cases', () => {
    test.beforeEach(async ({loginPage}) => {
        await loginPage.goto();
        await loginPage.fillUsernameInput(LoginPageData.getValidUsername());
        await loginPage.fillPasswordInput(LoginPageData.getValidPassword());
        await loginPage.clickLoginButton();
    })

    test('check adding/removing items to/from cart', async ({page,productsInventoryPage, cartPage}) => {
        await page.pause();
        await productsInventoryPage.addProductsToCart(await productsInventoryPage.getSpecifiedAmountOfProducts(2));
        await productsInventoryPage.goToShoppingCart();
        await cartPage.expectToHaveSpecifiedNumberOfItemsInCart(2);
        await cartPage.removeSpecifiedNumberOfItemsFromCart(2);
        await cartPage.expectToHaveSpecifiedNumberOfItemsInCart(0);
    })
})