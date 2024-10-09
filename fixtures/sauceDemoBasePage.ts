import { test as base } from '@playwright/test';
import LoginPage  from '../support/pageobjectmodel/pages/sauce-demo-pages/login.page';

export const test = base.extend<{
    loginPage: LoginPage;
}>({
    loginPage: async ({page}, use) => {
        await use(new LoginPage(page));
    }
})