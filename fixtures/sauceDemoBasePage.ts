import { test as base } from '@playwright/test';
import LoginPage  from '../support/pageobjectmodel/pages/sauce-demo-pages/login.page';
import ProductsInventoryPage from '../support/pageobjectmodel/pages/sauce-demo-pages/productsInventory.page'
import CartPage from '../support/pageobjectmodel/pages/sauce-demo-pages/cart.page';
import CheckoutStepOnePage from '../support/pageobjectmodel/pages/sauce-demo-pages/checkoutStepOne.page';
import CheckoutStepTwoPage from '../support/pageobjectmodel/pages/sauce-demo-pages/checkoutStepTwo.page';
import CheckoutCompletePage from '../support/pageobjectmodel/pages/sauce-demo-pages/checkoutComplete.page';

export const test = base.extend<{
    loginPage: LoginPage;
    productsInventoryPage: ProductsInventoryPage;
    cartPage: CartPage;
    checkoutStepOnePage: CheckoutStepOnePage;
    checkoutStepTwoPage: CheckoutStepTwoPage;
    checkoutCompletePage: CheckoutCompletePage;
}>({
    loginPage: async ({page}, use) => {
        await use(new LoginPage(page));
    },
    productsInventoryPage: async ({page}, use) => {
        await use(new ProductsInventoryPage(page));
    },
    cartPage: async ({page}, use) => {
        await use(new CartPage(page));
    },
    checkoutStepOnePage: async ({page}, use) => {
        await use(new CheckoutStepOnePage(page));
    },
    checkoutStepTwoPage: async ({page}, use) => {
        await use(new CheckoutStepTwoPage(page));
    },
    checkoutCompletePage: async ({page}, use) => {
        await use(new CheckoutCompletePage(page));
    }
})