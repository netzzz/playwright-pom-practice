import { test } from '@playwright/test';
import { dropdownPracticePage } from '../../support/pageobjectmodel/pages/dropdown.page';

test("dropdown selection and assertion", async ({ page }) => {
    const dropdownPage = new dropdownPracticePage(page);

    await dropdownPage.goto();
    await dropdownPage.expectHeadingToBeVisible();
    await dropdownPage.selectOptionFromDropdown("1");
    await dropdownPage.expectDropdownOptionToBe("1");
    await dropdownPage.selectOptionFromDropdown("2");
    await dropdownPage.expectDropdownOptionToBe("2");
    await dropdownPage.closePage();
})