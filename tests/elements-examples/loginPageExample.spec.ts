import { test, expect } from '@playwright/test';
import { loginPageData } from '../../support/test-data/loginPage.data';
import { loginPracticePage } from '../../support/pageobjectmodel/pages/login.page';
import { loginLandingPage } from '../../support/pageobjectmodel/pages/loginLanding.page';
import { loginErrorType } from '../../support/test-data/loginPageErrors.enum';

let loginPage : loginPracticePage;
let landingPage : loginLandingPage;

test.describe('login functionality test cases', () => {
    test.beforeEach(async ({page}) => {
        loginPage = new loginPracticePage(page);
    })

    test.afterEach(async ({page}) => {
        page.close();
    })

    test('login with empty fields', async () => {
        await loginPage.goto();
        await loginPage.clickSubmit();
        await loginPage.checkErrorMessage(loginErrorType.InvalidUsername);
    })
    
    test('login with valid username and empty password', async () => {
        await loginPage.goto();
        await loginPage.fillUsername(loginPageData.getValidUsername());
        await loginPage.clickSubmit();
        await loginPage.checkErrorMessage(loginErrorType.InvalidPassword);
    })

    test('login with empty username and valid password', async () => {
        await loginPage.goto();
        await loginPage.fillPassword(loginPageData.getValidPassword());
        await loginPage.clickSubmit();
        await loginPage.checkErrorMessage(loginErrorType.InvalidUsername);
    })

    test('login with valid username and invalid password', async () => {
        await loginPage.goto();
        await loginPage.fillUsername(loginPageData.getValidUsername());
        await loginPage.fillPassword(loginPageData.getInvalidPassword());
        await loginPage.clickSubmit();
        await loginPage.checkErrorMessage(loginErrorType.InvalidPassword);
    })

    test('login with invalid username and valid password', async () => {
        await loginPage.goto();
        await loginPage.fillUsername(loginPageData.getInvalidUsername());
        await loginPage.fillPassword(loginPageData.getValidPassword());
        await loginPage.clickSubmit();
        await loginPage.checkErrorMessage(loginErrorType.InvalidUsername);
    })

    test('login with valid username and valid password', async ({page}) => {
        landingPage = new loginLandingPage(page);
        await loginPage.goto();
        await loginPage.fillUsername(loginPageData.getValidUsername());
        await loginPage.fillPassword(loginPageData.getValidPassword());
        await loginPage.clickSubmit();
        await landingPage.verifySuccessfulLogin();
    })
})
