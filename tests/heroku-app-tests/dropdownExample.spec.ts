import { test } from '../../fixtures/herokuAppBasePage';

test("dropdown selection and assertion", async ({ dropdownPracticePage }) => {
    await dropdownPracticePage.goto();
    await dropdownPracticePage.expectHeadingToBeVisible();
    await dropdownPracticePage.selectOptionFromDropdown("1");
    await dropdownPracticePage.expectDropdownOptionToBe("1");
    await dropdownPracticePage.selectOptionFromDropdown("2");
    await dropdownPracticePage.expectDropdownOptionToBe("2");
    await dropdownPracticePage.closePage();
})