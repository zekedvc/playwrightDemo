import test from "@playwright/test";


test("Verify site status", async ({page}) => {
    await page.goto("https://pipepasstoigo-qa3.ipipeline.com/default.aspx?gaid=2416");
});