import { test } from '../../fixtures/sauceDemoBasePage';
import { LoginPageData, LoginErrorType } from '../../support/test-data/sauce-demo-test-data/loginPage.data';

test.describe('login functionality test cases', () => {
    test.afterEach(async ({page}) => {
        page.close();
    })

    test('login with empty fields', async ({loginPage}) => {
        await loginPage.goto();
        await loginPage.clickLoginButton();
        await loginPage.checkErrorMessage(LoginErrorType.EmptyUsernameEmptyPassword);
    })
    
    test('login with valid username and empty password', async ({loginPage}) => {
        await loginPage.goto();
        await loginPage.fillUsernameInput(LoginPageData.getValidUsername());
        await loginPage.clickLoginButton();
        await loginPage.checkErrorMessage(LoginErrorType.ValidUsernameEmptyPassword);
    })

    test('login with empty username and valid password', async ({loginPage}) => {
        await loginPage.goto();
        await loginPage.fillPasswordInput(LoginPageData.getValidPassword());
        await loginPage.clickLoginButton();
        await loginPage.checkErrorMessage(LoginErrorType.EmptyUsernameValidPassword);
    })

    test('login with valid username and invalid password', async ({loginPage}) => {
        await loginPage.goto();
        await loginPage.fillUsernameInput(LoginPageData.getValidUsername());
        await loginPage.fillPasswordInput(LoginPageData.getInvalidPassword());
        await loginPage.clickLoginButton();
        await loginPage.checkErrorMessage(LoginErrorType.ValidUsernameInvalidPassword);
    })

    test('login with invalid username and valid password', async ({loginPage}) => {
        await loginPage.goto();
        await loginPage.fillUsernameInput(LoginPageData.getInvalidUsername());
        await loginPage.fillPasswordInput(LoginPageData.getValidPassword());
        await loginPage.clickLoginButton();
        await loginPage.checkErrorMessage(LoginErrorType.InvalidUsernameValidPassword);
    })

    test('login with valid username and valid password', async ({loginPage, productsInventoryPage}) => {
        await loginPage.goto();
        await loginPage.fillUsernameInput(LoginPageData.getValidUsername());
        await loginPage.fillPasswordInput(LoginPageData.getValidPassword());
        await loginPage.clickLoginButton();
        await productsInventoryPage.verifySuccessfulLogin();
    })
})