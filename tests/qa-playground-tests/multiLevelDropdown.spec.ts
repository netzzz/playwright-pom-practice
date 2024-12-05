import { test, expect, Page, Locator } from '@playwright/test';

test("Assert that item is present in dropdown", async ({page}) => {
    await page.goto("https://qaplayground.dev/apps/multi-level-dropdown/");

    let menuItems: Locator[] = await page.locator("[class='nav-item']").all();
    await menuItems.pop()?.click();
    await page.getByText("Animals").click();
    await expect(page.locator("a[href='#!Frog']")).toBeVisible();
})