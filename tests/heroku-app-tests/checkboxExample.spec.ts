import { test } from '../../fixtures/herokuAppBasePage';

test('working with checkboxes', async ({  checkboxPracticePage}) => {
    await checkboxPracticePage.goto();
    await checkboxPracticePage.expectCheckboxesToBeVisible();
    await checkboxPracticePage.checkCheckboxes();
    await checkboxPracticePage.expectCheckboxesToBeChecked();
    await checkboxPracticePage.uncheckCheckboxes();
    await checkboxPracticePage.expectCheckboxesToBeUnchecked();
    await checkboxPracticePage.closePage();
});