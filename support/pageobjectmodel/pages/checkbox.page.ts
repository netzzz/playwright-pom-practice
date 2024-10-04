import { expect, type Page } from '@playwright/test';

export class checkboxPracticePage {
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async goto() {
        await this.page.goto("https://the-internet.herokuapp.com/checkboxes");
    }

    public async closePage() {
        this.page.close();
    }

    // Locators

    private checkboxesDiv = () => this.page.locator('#checkboxes');
    private allCheckboxesElements = () => this.page.getByRole('checkbox').all();

    // Methods

    public async checkCheckboxes() {
        for (let checkbox of await this.allCheckboxesElements()) {
            await checkbox.check();
        }
    }

    public async uncheckCheckboxes() {
        for (let checkbox of await this.allCheckboxesElements()) {
            await checkbox.uncheck();
        }
    }

    public async expectCheckboxesToBeChecked() {
        for (let checkbox of await this.allCheckboxesElements()) {
            await expect(checkbox).toBeChecked();
        }
    }

    public async expectCheckboxesToBeUnchecked() {
        for (let checkbox of await this.allCheckboxesElements()) {
            await expect(checkbox).not.toBeChecked();
        }
    }

    public async expectCheckboxesToBeVisible() {
        await expect(this.checkboxesDiv()).toBeVisible();
    }
}