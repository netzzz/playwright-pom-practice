import { test } from '@playwright/test';
import { fileUploadPage } from '../../support/pageobjectmodel/pages/fileUpload.page';

test('import image', async ({page}) => {
    const pageFileUpload = new fileUploadPage(page);

    await pageFileUpload.goto();
    await pageFileUpload.uploadFile("support/images/image1.png");
    await pageFileUpload.expectFilenameToBeVisible();
    await pageFileUpload.closePage();
})