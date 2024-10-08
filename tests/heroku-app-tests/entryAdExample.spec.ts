import { test } from '../../fixtures/herokuAppBasePage';

test('close ad', async ({ entryAdPage }) => {
    await entryAdPage.goto();
    await entryAdPage.closeAd();
    await entryAdPage.expectElementToBeVisible(await entryAdPage.getArticleTitle());
    await entryAdPage.enableAdAgain();
    await entryAdPage.closePage();
})

