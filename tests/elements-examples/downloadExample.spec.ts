import { test } from '../../fixtures/basePage';

test('check that download is successful', async ({ downloadPage }) => {
    await downloadPage.goto();
    const downloadPromise = downloadPage.getDownloadPromise();
    await downloadPage.clickOnDownloadLink();
    const download = await downloadPromise;
    await downloadPage.expectDownloadPathToBeDefined(download);
})