import { expect, type Page } from '@playwright/test';

export class loginLandingPage {
    private readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }

    // Locators

    private successfulLoginMessage = () => this.page.getByText("Logged In Successfully")

    // Methods

    async verifySuccessfulLogin(){
        await expect(this.successfulLoginMessage()).toBeVisible();
    }
}