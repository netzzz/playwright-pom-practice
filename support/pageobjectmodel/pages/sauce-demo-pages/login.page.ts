import { expect, type Page } from '@playwright/test';
import { LoginPageData, LoginErrorType } from '../../../test-data/sauce-demo-test-data/loginPage.data';

export default class LoginPage {
    private readonly page: Page;

    constructor(page: Page){
        this.page=page;
    }

    public async goto(){
        await this.page.goto("https://www.saucedemo.com/");
    }

    // Locators

    usernameInput = () => this.page.locator("#user-name");
    passwordInput = () => this.page.locator("#password");
    loginButton = () => this.page.getByText("Login");
    errorMessageDiv = () => this.page.locator("div[class*='error-message-container']")

    // Methods

    public async fillUsernameInput(username: string){
        await this.usernameInput().fill(username);
    }

    public async fillPasswordInput(password: string){
        await this.passwordInput().fill(password);
    }

    public async clickLoginButton(){
        await this.loginButton().click();
    }

    public async checkErrorMessage(errorType : LoginErrorType){
        await expect(this.errorMessageDiv()).toContainText(LoginPageData.getErrorMessage(errorType));
    }
}