import { test } from '../../fixtures/basePage';

test('close ad', async ({ entryAdPage }) => {
    await entryAdPage.goto();
    await entryAdPage.closeAd();
    await entryAdPage.expectElementToBeVisible(await entryAdPage.getArticleTitle());
    await entryAdPage.enableAdAgain();
    await entryAdPage.closePage();
})

