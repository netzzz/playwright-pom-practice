import { test as base } from '@playwright/test';
import LoginPage  from '../support/pageobjectmodel/pages/sauce-demo-pages/login.page';
import ProductsInventoryPage from '../support/pageobjectmodel/pages/sauce-demo-pages/productsInventory.page'

export const test = base.extend<{
    loginPage: LoginPage;
    productsInventoryPage: ProductsInventoryPage;
}>({
    loginPage: async ({page}, use) => {
        await use(new LoginPage(page));
    },
    productsInventoryPage: async ({page}, use) => {
        await use(new ProductsInventoryPage(page));
    }
})