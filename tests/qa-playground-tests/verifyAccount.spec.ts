import { test, expect, Page, Locator } from '@playwright/test';

test("Fill in code to verify account", async ({page}) => {
    let verificationCodeNumbers: string[]= ["9","9","9","9","9","9"]; 
    await page.goto("https://qaplayground.dev/apps/verify-account/");

    let verificationCodeInputFields: Locator[] = await page.locator("input[class='code']").all();

    for(let i=0;i<verificationCodeInputFields.length;i++){
        await verificationCodeInputFields[i].click();
        await page.keyboard.type(verificationCodeNumbers[i]);
    }
    await expect(page.locator('small[class="info success"]')).toHaveText("Success");
})