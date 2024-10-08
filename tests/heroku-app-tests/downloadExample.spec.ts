import { test } from '../../fixtures/herokuAppBasePage';

test('check that download is successful', async ({ downloadPage }) => {
    await downloadPage.goto();
    const downloadPromise = downloadPage.getDownloadPromise();
    await downloadPage.clickOnDownloadLink();
    const download = downloadPromise;
    await download;
})