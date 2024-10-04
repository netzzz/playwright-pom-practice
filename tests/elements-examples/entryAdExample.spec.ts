import { test } from '@playwright/test';
import { entryAdPage } from '../../support/pageobjectmodel/pages/entryAd.page';

test('close ad', async ({ page }) => {
    const pageEntryAd = new entryAdPage(page);

    await pageEntryAd.goto();
    await pageEntryAd.closeAd();
    await pageEntryAd.expectElementToBeVisible(await pageEntryAd.getArticleTitle());
    await pageEntryAd.enableAdAgain();
    await pageEntryAd.closePage();
})

