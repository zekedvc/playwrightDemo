import test from "@playwright/test";
import { RadioPage } from "../pages/radio-page";

test("Visit radio page from demoQA", async ({page}) => {
    const radioPage = new RadioPage(page)
    await radioPage.visitRadioPage()
});

test("Click yes radio page from demoQA", async ({page}) => {
    const radioPage = new RadioPage(page)
    await radioPage.visitRadioPage()
    await radioPage.clickYesRadioButton()
});

test("Click impressive radio page from demoQA", async ({page}) => {
    const radioPage = new RadioPage(page)
    await radioPage.visitRadioPage()
    await radioPage.clickImpressiveRadioButton()
});
