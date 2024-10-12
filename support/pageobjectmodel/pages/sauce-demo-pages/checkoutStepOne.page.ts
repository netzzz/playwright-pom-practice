import { type Page } from '@playwright/test';

export default class CheckoutStepOnePage {
    private readonly page: Page;

    constructor(page: Page){
        this.page=page;
    }

    public async goto(){
        await this.page.goto("https://www.saucedemo.com/checkout-step-one.html");
    }

    // Locators

    firstNameInput = () => this.page.getByPlaceholder("First Name");
    lastNameInput = () => this.page.getByPlaceholder("Last Name");
    postalCodeInput = () => this.page.getByPlaceholder("Zip/Postal Code");
    continueButton = () => this.page.getByText("Continue");

    // Methods

    public async fillFirstName(firstName: string){
        await this.firstNameInput().fill(firstName);
    }

    public async fillLastName(lastName: string){
        await this.lastNameInput().fill(lastName);
    }

    public async fillPostalCode(postalCode: string){
        await this.postalCodeInput().fill(postalCode);
    }

    public async continueCheckout(){
        await this.continueButton().click();
    }
}