import { test } from '@playwright/test';
import { checkboxPracticePage } from '../../support/pageobjectmodel/pages/checkbox.page';

test('working with checkboxes', async ({ page }) => {
    const checkboxPage = new checkboxPracticePage(page);

    await checkboxPage.goto();
    await checkboxPage.expectCheckboxesToBeVisible();
    await checkboxPage.checkCheckboxes();
    await checkboxPage.expectCheckboxesToBeChecked();
    await checkboxPage.uncheckCheckboxes();
    await checkboxPage.expectCheckboxesToBeUnchecked();
    await checkboxPage.closePage();
});