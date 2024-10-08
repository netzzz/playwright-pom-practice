import { expect, type Page } from '@playwright/test';

export default class DropdownPracticePage {
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async goto() {
        this.page.goto("https://the-internet.herokuapp.com/dropdown");
    }

    public async closePage() {
        this.page.close();
    }

    // Locators

    articleHeading = () => this.page.getByRole('heading', { name: 'Dropdown List' });
    dropdown = () => this.page.locator('#dropdown');
    
    // Methods

    public async expectHeadingToBeVisible() {
        await expect(this.articleHeading()).toBeVisible();
    }

    public async selectOptionFromDropdown(option: string) {
        await this.dropdown().selectOption(option);
    }

    public async expectDropdownOptionToBe(option: string) {
        expect(await this.dropdown().inputValue()).toBe(option);
    }

}