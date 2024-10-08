import { expect, type Page, type Locator } from '@playwright/test';

export default class DragAndDropPage {
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async goto() {
        await this.page.goto("https://the-internet.herokuapp.com/drag_and_drop");
    }

    // Locators

    columnA = () => this.page.locator("#column-a");
    columnB = () => this.page.locator("#column-b");
    firstColumn = () => this.page.locator("div[id='columns'] > div").first();

    // Methods

    public async dragFromTo(from: Locator, to: Locator){
        await from.dragTo(to);
    }

    public async checkTextOfFirstColumnToBe(text: string){
        await expect(this.firstColumn()).toHaveText(text);
    }
}