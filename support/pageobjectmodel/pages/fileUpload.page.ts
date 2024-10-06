import { expect, type Page } from '@playwright/test';

export default class FileUploadPage {
    private readonly page: Page;
    filePath: string;

    constructor(page: Page) {
        this.page = page;
    }

    public async goto(){
        await this.page.goto("https://qaplayground.dev/apps/upload/");
    }

    public async closePage() {
        this.page.close();
    }

    // Locators

    private uploadFileHandle = () => this.page.getByText("Select Image File");

    // Actions

    public async uploadFile(filePath: string){
        await this.uploadFileHandle().setInputFiles(filePath);
        this.filePath = filePath;
    }

    public async expectFilenameToBeVisible(){
        let splitFilePath: string[] = this.filePath.split("/");
        let fileName = splitFilePath[splitFilePath.length-1];
        await expect(this.page.getByText(fileName)).toBeVisible();
    }
}