import { test } from '../../fixtures/qaPlaygroundBasePage';

test('import image', async ({fileUploadPage}) => {
    await fileUploadPage.goto();
    await fileUploadPage.uploadFile("support/images/qa-playground-images/image1.png");
    await fileUploadPage.expectFilenameToBeVisible();
    await fileUploadPage.closePage();
})