import { test } from '../../fixtures/basePage';

test('import image', async ({fileUploadPage}) => {
    await fileUploadPage.goto();
    await fileUploadPage.uploadFile("support/images/image1.png");
    await fileUploadPage.expectFilenameToBeVisible();
    await fileUploadPage.closePage();
})