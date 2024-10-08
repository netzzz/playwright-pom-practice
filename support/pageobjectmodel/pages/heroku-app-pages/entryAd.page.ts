import { expect, type Page, type Locator } from '@playwright/test';

export default class EntryAdPage {
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async goto() {
        this.page.goto("https://the-internet.herokuapp.com/entry_ad");
    }

    public async closePage() {
        this.page.close();
    }

    // Locators

    adCloseButton = () => this.page.locator("div[class='modal-footer'] p");
    articleTitle = () => this.page.locator('text="Entry Ad"');
    reEnableAd = () => this.page.getByRole('link', { name: 'click here' });

    // Methods

    public async closeAd() {
        await this.adCloseButton().click();
    }

    public async getArticleTitle() : Promise<Locator> {
        return this.articleTitle();
    }

    public async expectElementToBeVisible(element: Locator) {
        await expect(element).toBeVisible();
    }

    public async enableAdAgain() {
        await this.reEnableAd().click();
    }
}